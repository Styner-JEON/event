package com.bridge.service;

import com.bridge.model.eventhttpresponse.error.CmmMsgHeader;
import com.bridge.model.eventhttpresponse.error.OpenApiServiceResponse;
import com.bridge.model.eventhttpresponse.ok.EventHttpResponse;
import com.bridge.model.eventhttpresponse.ok.Item;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PublicDataApiClient {

    private final ObjectMapper objectMapper;

    @Value("${publicdataapi.serviceKey}")
    private String serviceKey;

    /**
     * 지역기반관광정보조회
     */
    public void getEventList() {
        RestClient defaultClient = RestClient.create();
        int pageNo = 1;

        while (true) {
            URI uri = UriComponentsBuilder.fromUriString("http://apis.data.go.kr/B551011/KorService1/areaBasedList1")  // 지역기반관광정보조회
                    .queryParam("serviceKey", serviceKey)  // 공공데이터포털에서 발급받은인증키
                    .queryParam("MobileApp", "event")  // 서비스명
                    .queryParam("MobileOS", "ETC")  // OS 구분(IOS, AND, ETC)
                    .queryParam("_type", "json")  // 응답메세지 형식(XML, JSON)
                    .queryParam("listYN", "Y")  // 목록 구분(Y=목록, N=개수)
                    .queryParam("arrange", "Q")  // (A=제목순, C=수정일순, D=생성일순) 대표이미지가 존재하는 정렬(O=제목순, Q=수정일순, R=생성일순)
                    .queryParam("contentTypeId", "15")  // 콘텐츠 타입(15=행사/공연/축제)
                    .queryParam("numOfRows", "10")  // 페이지당 데이터 수
                    .queryParam("pageNo", pageNo)  // 현재 페이지 번호
                    .queryParam("modifiedtime", "20250207")  // 수정일
                    .build(true)
                    .toUri();

            String result = defaultClient.get().uri(uri).retrieve().body(String.class);
            log.info("result: {}", result);
            log.info("page number = {}", pageNo);

            if (result != null && result.trim().startsWith("{")) {
                log.info("Parsing JSON");
                JsonNode rootNode = null;
                try {
                    rootNode = objectMapper.readTree(result);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the result in JSON: {}", e.getMessage());
                    throw new RuntimeException(e);
                }
                JsonNode numOfRowsNode = rootNode.path("response").path("body").path("numOfRows");
                    if (numOfRowsNode.asInt(1) == 0) {
                        log.info("No more data");
                        break;
                    }

                EventHttpResponse eventHttpResponse = null;
                try {
                    eventHttpResponse = objectMapper.treeToValue(rootNode, EventHttpResponse.class);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the rootNode in JSON: {}", e.getMessage());
                    throw new RuntimeException(e);
                }
                List<Item> itemList = eventHttpResponse.getResponse().getBody().getItems().getItemList();
                itemList.forEach(item -> {
                    String contentId = String.valueOf(item.getContentId());
                    getDetailCommon(contentId);
                    getDetailIntro(contentId);
                });

                pageNo++;
            } else if (result != null && result.trim().startsWith("<")) {
                log.info("Parsing XML");
                XmlMapper xmlMapper = new XmlMapper();
                OpenApiServiceResponse openApiServiceResponse = null;
                try {
                    openApiServiceResponse = xmlMapper.readValue(result, OpenApiServiceResponse.class);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the result in XML: {}", e.getMessage());
                    throw new RuntimeException(e);
                }
                CmmMsgHeader cmmMsgHeader = openApiServiceResponse.getCmmMsgHeader();
                log.error(
                        "Error HTTP Response: errMsg = {}, returnAuthMsg = {}, returnReasonCode = {}",
                        cmmMsgHeader.getErrMsg(), cmmMsgHeader.getReturnAuthMsg(), cmmMsgHeader.getReturnReasonCode()
                );
                break;
            } else {
                log.error("Unexpected response format.");
                break;
            }
        }
    }

    /**
     * 공통정보조회
     * @param contentId
     */
    private void getDetailCommon(String contentId) {
        RestClient defaultClient = RestClient.create();
        URI uri = UriComponentsBuilder.fromUriString("http://apis.data.go.kr/B551011/KorService1/detailCommon1")
                .queryParam("serviceKey", serviceKey)
                .queryParam("MobileApp", "event")
                .queryParam("MobileOS", "ETC")
                .queryParam("_type", "json")
                .queryParam("contentTypeId", "15")
                .queryParam("defaultYN", "Y")
                .queryParam("firstImageYN", "N")
                .queryParam("areacodeYN", "N")
                .queryParam("catcodeYN", "N")
                .queryParam("addrinfoYN", "N")
                .queryParam("mapinfoYN", "Y")
                .queryParam("overviewYN", "Y")
                .queryParam("contentId", contentId)
                .build(true)
                .toUri();

        String result = defaultClient.get().uri(uri).retrieve().body(String.class);
        log.info("DetailCommon result for contentId {}: {}", contentId, result);
    }

    /**
     * 소개정보조회
     * @param contentId
     */
    private void getDetailIntro(String contentId) {
        RestClient defaultClient = RestClient.create();
        URI uri = UriComponentsBuilder.fromUriString("http://apis.data.go.kr/B551011/KorService1/detailIntro1")
                .queryParam("serviceKey", serviceKey)
                .queryParam("MobileApp", "event")
                .queryParam("MobileOS", "ETC")
                .queryParam("_type", "json")
                .queryParam("contentTypeId", "15")
                .queryParam("contentId", contentId)
                .build(true)
                .toUri();

        String result = defaultClient.get().uri(uri).retrieve().body(String.class);
        log.info("DetailIntro result for contentId {}: {}", contentId, result);
    }

}
