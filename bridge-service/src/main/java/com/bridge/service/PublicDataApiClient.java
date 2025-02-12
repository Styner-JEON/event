package com.bridge.service;

import com.bridge.model.detailcommon.DetailCommonHttpResponse;
import com.bridge.model.detailcommon.DetailCommonItem;
import com.bridge.model.detailintro.DetailIntroHttpResponse;
import com.bridge.model.detailintro.DetailIntroItem;
import com.bridge.model.dto.EventDto;
import com.bridge.model.error.CmmMsgHeader;
import com.bridge.model.error.OpenApiServiceResponse;
import com.bridge.model.eventlist.EventListHttpResponse;
import com.bridge.model.eventlist.EventListItem;
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

    private final KafkaProducer kafkaProducer;

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
            log.info("AreaBasedList result: {}", result);
            log.info("AreaBasedList page number = {}", pageNo);

            if (result != null && result.trim().startsWith("{")) {
                log.info("AreaBasedList Parsing JSON");
                JsonNode rootJsonNode = null;
                try {
                    rootJsonNode = objectMapper.readTree(result);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the AreaBasedList result in JSON: {}", e.getMessage());
                    throw new RuntimeException(e);
                }

                JsonNode bodyJsonNode = rootJsonNode.path("response").path("body");
                JsonNode numOfRowsNode = bodyJsonNode.path("numOfRows");
                    if (numOfRowsNode.asInt(1) == 0) {
                        log.info("No more AreaBasedList");
                        break;
                    }

                EventListHttpResponse eventListHttpResponse = null;
                try {
                    eventListHttpResponse = objectMapper.treeToValue(rootJsonNode, EventListHttpResponse.class);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the AreaBasedList rootNode in JSON: {}", e.getMessage());
                    throw new RuntimeException(e);
                }

                List<EventListItem> eventListItemList = eventListHttpResponse.getResponse().getBody().getItems().getEventListItemList();
                eventListItemList.forEach(eventListItem -> {
                    EventDto eventDto = new EventDto();
                    String contentId = String.valueOf(eventListItem.getContentId());
                    eventDto = areaBasedListToEventDto(eventListItem, eventDto);
                    eventDto = getDetailCommon(contentId, eventDto);
                    eventDto = getDetailIntro(contentId, eventDto);
                    log.info("EventDto: {}", eventDto);
                    kafkaProducer.sendEventDto(eventDto);
                });

                pageNo++;
            } else if (result != null && result.trim().startsWith("<")) {
                log.info("AreaBasedList Parsing XML");
                XmlMapper xmlMapper = new XmlMapper();
                OpenApiServiceResponse openApiServiceResponse = null;
                try {
                    openApiServiceResponse = xmlMapper.readValue(result, OpenApiServiceResponse.class);
                } catch (JsonProcessingException e) {
                    log.error("Error parsing the AreaBasedList result in XML: {}", e.getMessage());
                    throw new RuntimeException(e);
                }

                CmmMsgHeader cmmMsgHeader = openApiServiceResponse.getCmmMsgHeader();
                log.error(
                        "AreaBasedList Error HTTP Response: errMsg = {}, returnAuthMsg = {}, returnReasonCode = {}",
                        cmmMsgHeader.getErrMsg(), cmmMsgHeader.getReturnAuthMsg(), cmmMsgHeader.getReturnReasonCode()
                );

                break;
            } else {
                log.error("Unexpected AreaBasedList response format.");
                break;
            }
        }
    }

    /**
     * 공통정보조회
     * @param contentId
     */
    private EventDto getDetailCommon(String contentId, EventDto eventDto) {
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

        if (result != null && result.trim().startsWith("{")) {
            log.info("DetailCommon Parsing JSON");
            JsonNode rootJsonNode = null;
            try {
                rootJsonNode = objectMapper.readTree(result);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailCommon result in JSON: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            DetailCommonHttpResponse detailCommonHttpResponse = null;
            try {
                detailCommonHttpResponse = objectMapper.treeToValue(rootJsonNode, DetailCommonHttpResponse.class);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailCommon rootNode in JSON: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            List<DetailCommonItem> detailCommonItemList = detailCommonHttpResponse.getResponse().getBody().getItems().getDetailCommonItemList();
            detailCommonItemList.forEach(detailCommonItem -> {
                detailCommonToEventDto(eventDto, detailCommonItem);
            });
        } else if (result != null && result.trim().startsWith("<")) {
            log.info("DetailCommon Parsing XML");
            XmlMapper xmlMapper = new XmlMapper();
            OpenApiServiceResponse openApiServiceResponse = null;
            try {
                openApiServiceResponse = xmlMapper.readValue(result, OpenApiServiceResponse.class);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailCommon result in XML: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            CmmMsgHeader cmmMsgHeader = openApiServiceResponse.getCmmMsgHeader();
            log.error(
                    "DetailCommon Error HTTP Response: errMsg = {}, returnAuthMsg = {}, returnReasonCode = {}",
                    cmmMsgHeader.getErrMsg(), cmmMsgHeader.getReturnAuthMsg(), cmmMsgHeader.getReturnReasonCode()
            );
        } else {
            log.error("Unexpected DetailCommon response format.");
        }

        return eventDto;
    }

    /**
     * 소개정보조회
     * @param contentId
     */
    private EventDto getDetailIntro(String contentId, EventDto eventDto) {
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

        if (result != null && result.trim().startsWith("{")) {
            log.info("DetailIntro Parsing JSON");
            JsonNode rootJsonNode = null;
            try {
                rootJsonNode = objectMapper.readTree(result);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailIntro result in JSON: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            DetailIntroHttpResponse detailIntroHttpResponse = null;
            try {
                detailIntroHttpResponse = objectMapper.treeToValue(rootJsonNode, DetailIntroHttpResponse.class);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailIntro rootNode in JSON: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            List<DetailIntroItem> detailIntroItemList = detailIntroHttpResponse.getResponse().getBody().getItems().getDetailIntroItemList();
            detailIntroItemList.forEach(detailIntroItem -> {
                detailIntroToEventDto(eventDto, detailIntroItem);
            });
        } else if (result != null && result.trim().startsWith("<")) {
            log.info("DetailIntro Parsing XML");
            XmlMapper xmlMapper = new XmlMapper();
            OpenApiServiceResponse openApiServiceResponse = null;
            try {
                openApiServiceResponse = xmlMapper.readValue(result, OpenApiServiceResponse.class);
            } catch (JsonProcessingException e) {
                log.error("Error parsing the DetailIntro result in XML: {}", e.getMessage());
                throw new RuntimeException(e);
            }

            CmmMsgHeader cmmMsgHeader = openApiServiceResponse.getCmmMsgHeader();
            log.error(
                    "DetailIntro Error HTTP Response: errMsg = {}, returnAuthMsg = {}, returnReasonCode = {}",
                    cmmMsgHeader.getErrMsg(), cmmMsgHeader.getReturnAuthMsg(), cmmMsgHeader.getReturnReasonCode()
            );
        } else {
            log.error("Unexpected DetailIntro response format.");
        }

        return eventDto;
    }

    private EventDto areaBasedListToEventDto(EventListItem eventListItem, EventDto eventDto) {
        eventDto.setContentId(eventListItem.getContentId());
        eventDto.setCreatedTime(eventListItem.getCreatedTime());
        eventDto.setModifiedTime(eventListItem.getModifiedTime());
        eventDto.setAddr1(eventListItem.getAddr1());
        eventDto.setAddr2(eventListItem.getAddr2());
        eventDto.setAreaCode(eventListItem.getAreaCode());
        eventDto.setFirstImage(eventListItem.getFirstImage());
        eventDto.setFirstImage2(eventListItem.getFirstImage2());
        eventDto.setMapX(eventListItem.getMapX());
        eventDto.setMapY(eventListItem.getMapY());
        eventDto.setTitle(eventListItem.getTitle());
        eventDto.setZipCode(eventListItem.getZipCode());
        return eventDto;
    }

    private EventDto detailCommonToEventDto(EventDto eventDto, DetailCommonItem detailCommonItem) {
        eventDto.setHomepage(detailCommonItem.getHomepage());
        eventDto.setOverview(detailCommonItem.getOverview());
        return eventDto;
    }

    private EventDto detailIntroToEventDto(EventDto eventDto, DetailIntroItem detailIntroItem) {
        eventDto.setEventStartDate(detailIntroItem.getEventStartDate());
        eventDto.setEventEndDate(detailIntroItem.getEventEndDate());
        eventDto.setPlayTime(detailIntroItem.getPlayTime());
        eventDto.setUseTimeFestival(detailIntroItem.getUseTimeFestival());
        eventDto.setSponsor1(detailIntroItem.getSponsor1());
        eventDto.setSponsor1Tel(detailIntroItem.getSponsor1Tel());
        eventDto.setSponsor2(detailIntroItem.getSponsor2());
        eventDto.setSponsor2Tel(detailIntroItem.getSponsor2Tel());
        return eventDto;
    }

}
