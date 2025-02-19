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
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PublicDataApiClient {

    private final RestClient restClient;

    private final ObjectMapper objectMapper;

    @Value("${public-data-api.base-url}")
    private String baseUrl;

    @Value("${public-data-api.endpoints.area-based-list}")
    private String areaBasedListEndpoint;

    @Value("${public-data-api.endpoints.detail-common}")
    private String detailCommonEndpoint;

    @Value("${public-data-api.endpoints.detail-intro}")
    private String detailIntroEndpoint;

    @Value("${public-data-api.service-key}")
    private String serviceKey;

    @Value("${public-data-api.num-of-rows}")
    private Integer numOfRows;

    public List<EventDto> getEventDtoList() {
        int pageNo = 1;
        List<EventDto> eventDtoList = new ArrayList<>();
        while (setAreaBasedList(pageNo, eventDtoList)) {
            pageNo++;
        }
        return eventDtoList;
    }

    /**
     * 지역기반관광정보조회 API 호출해서 세팅
      * @return
     */
    public boolean setAreaBasedList(int pageNo, List<EventDto> eventDtoList) {
        String apiName = "AreaBasedList";
        URI uri = buildAreaBasedListUri(pageNo);
        String result = fetchApiResponse(uri, apiName);
        log.info("page number = {}", pageNo);
        if (isJson(result)) {
            log.info("AreaBasedList Parsing JSON");
            JsonNode rootJsonNode  = stringToJsonNode(apiName, result);
            JsonNode bodyJsonNode = rootJsonNode.path("response").path("body");
            JsonNode numOfRowsNode = bodyJsonNode.path("numOfRows");
            int currentTotalCount = bodyJsonNode.path("totalCount").asInt();
            int currentNumOfRows = numOfRowsNode.asInt();

            if (currentNumOfRows == 0) {
                log.info("No more AreaBasedList");
                return false;
            }

            EventListHttpResponse eventListHttpResponse = parseJsonNode(rootJsonNode, EventListHttpResponse.class);
            List<EventListItem> eventListItemList = eventListHttpResponse.getResponse().getBody().getItems().getEventListItemList();
            eventListItemList.forEach(eventListItem -> {
                EventDto eventDto = new EventDto();
                areaBasedListToEventDto(eventDto, eventListItem);
                eventDtoList.add(eventDto);
            });

            if (numOfRows > currentNumOfRows || currentNumOfRows * pageNo == currentTotalCount) {
                log.info("No more AreaBasedList");
                return false;
            }
        } else if (isXml(result)) {
            handleErrorResponse("AreaBasedList", result);
            return false;
        } else {
            log.error("Unexpected AreaBasedList response format.");
            return false;
        }
        return true;
    }

    /**
     * 공통정보조회 API 호출해서 세팅
     * @param contentId
     */
    public void setDetailCommon(String contentId, EventDto eventDto) {
        String apiName = "DetailCommon";
        log.info("contentId = {}", contentId);
        URI uri = buildDetailCommonUri(contentId);
        String result = fetchApiResponse(uri, apiName);
        if (isJson(result)) {
            log.info("DetailCommon Parsing JSON");
            JsonNode rootJsonNode  = stringToJsonNode(apiName, result);
            DetailCommonHttpResponse detailCommonHttpResponse = parseJsonNode(rootJsonNode, DetailCommonHttpResponse.class);
            DetailCommonItem detailCommonItem = detailCommonHttpResponse.getResponse().getBody().getItems().getDetailCommonItemList().getFirst();
            detailCommonToEventDto(eventDto, detailCommonItem);
        } else if (isXml(result)) {
            handleErrorResponse("DetailCommon", result);
        } else {
            log.error("Unexpected DetailCommon response format.");
        }
    }

    /**
     * 소개정보조회 API 호출해서 세팅
     * @param contentId
     */
    public void setDetailIntro(String contentId, EventDto eventDto) {
        String apiName = "DetailIntro";
        log.info("contentId = {}", contentId);
        URI uri = buildDetailIntroUri(contentId);
        String result = fetchApiResponse(uri, apiName);
        if (isJson(result)) {
            log.info("DetailIntro Parsing JSON");
            JsonNode rootJsonNode = stringToJsonNode(apiName, result);
            DetailIntroHttpResponse detailIntroHttpResponse = parseJsonNode(rootJsonNode, DetailIntroHttpResponse.class);
            DetailIntroItem detailIntroItem = detailIntroHttpResponse.getResponse().getBody().getItems().getDetailIntroItemList().getFirst();
            detailIntroToEventDto(eventDto, detailIntroItem);
        } else if (isXml(result)) {
            log.info("DetailIntro Parsing XML");
            handleErrorResponse("DetailIntro", result);
        } else {
            log.error("Unexpected DetailIntro response format.");
        }
    }

    private URI buildAreaBasedListUri(int pageNo) {
        String yesterday = LocalDate.now(ZoneId.of("Asia/Seoul"))
                    .minusDays(1)
                    .format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        URI uri = UriComponentsBuilder.fromUriString(baseUrl + areaBasedListEndpoint)  // 지역기반관광정보조회
                .queryParam("serviceKey", serviceKey)  // 공공데이터포털에서 발급받은인증키
                .queryParam("MobileApp", "event")  // 서비스명
                .queryParam("MobileOS", "ETC")  // OS 구분(IOS, AND, ETC)
                .queryParam("_type", "json")  // 응답메세지 형식(XML, JSON)
                .queryParam("listYN", "Y")  // 목록 구분(Y=목록, N=개수)
                .queryParam("arrange", "Q")  // (A=제목순, C=수정일순, D=생성일순) 대표이미지가 존재하는 정렬(O=제목순, Q=수정일순, R=생성일순)
                .queryParam("contentTypeId", "15")  // 콘텐츠 타입(15=행사/공연/축제)
                .queryParam("numOfRows", String.valueOf(numOfRows))  // 페이지당 데이터 수
                .queryParam("pageNo", pageNo)  // 현재 페이지 번호
                .queryParam("modifiedtime", yesterday)  // 수정일
                .build(true)
                .toUri();
        log.info("AreaBasedList URI: {}", uri);
        return uri;
    }

    private URI buildDetailCommonUri(String contentId) {
        URI uri = UriComponentsBuilder.fromUriString(baseUrl + detailCommonEndpoint)
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
        log.info("DetailCommon URI: {}", uri);
        return uri;
    }

    private URI buildDetailIntroUri(String contentId) {
        URI uri = UriComponentsBuilder.fromUriString(baseUrl + detailIntroEndpoint)
                .queryParam("serviceKey", serviceKey)
                .queryParam("MobileApp", "event")
                .queryParam("MobileOS", "ETC")
                .queryParam("_type", "json")
                .queryParam("contentTypeId", "15")
                .queryParam("contentId", contentId)
                .build(true)
                .toUri();
        log.info("DetailIntro URI: {}", uri);
        return uri;
    }

    private String fetchApiResponse(URI uri, String apiName) {
        try {
            String result = restClient.get().uri(uri).retrieve().body(String.class);
            log.info("{} result: {}", apiName, result);
            return result;
        } catch (Exception e) {
            log.error("Error calling {} API: {}", apiName, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private boolean isJson(String result) {
        return result.trim().startsWith("{");
    }

    private boolean isXml(String result) {
        return result.trim().startsWith("<");
    }

    private void areaBasedListToEventDto(EventDto eventDto, EventListItem eventListItem) {
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
    }

    private void detailCommonToEventDto(EventDto eventDto, DetailCommonItem detailCommonItem) {
        eventDto.setHomepage(detailCommonItem.getHomepage());
        eventDto.setOverview(detailCommonItem.getOverview());
    }

    private void detailIntroToEventDto(EventDto eventDto, DetailIntroItem detailIntroItem) {
        eventDto.setEventStartDate(detailIntroItem.getEventStartDate());
        eventDto.setEventEndDate(detailIntroItem.getEventEndDate());
        eventDto.setPlayTime(detailIntroItem.getPlayTime());
        eventDto.setUseTimeFestival(detailIntroItem.getUseTimeFestival());
        eventDto.setSponsor1(detailIntroItem.getSponsor1());
        eventDto.setSponsor1Tel(detailIntroItem.getSponsor1Tel());
        eventDto.setSponsor2(detailIntroItem.getSponsor2());
        eventDto.setSponsor2Tel(detailIntroItem.getSponsor2Tel());
    }

    private JsonNode stringToJsonNode(String apiName, String jsonString) {
        try {
            return objectMapper.readTree(jsonString);
        } catch (JsonProcessingException e) {
            log.error("Error parsing JSON response from {}: {}", apiName, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private <T> T parseJsonNode(JsonNode jsonNode, Class<T> clazz) {
        try {
            return objectMapper.treeToValue(jsonNode, clazz);
        } catch (JsonProcessingException e) {
            log.error("Error parsing JSON to {}: {}", clazz.getSimpleName(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private void handleErrorResponse(String apiName, String result) {
        log.info("{} Parsing XML", apiName);
        XmlMapper xmlMapper = new XmlMapper();
        OpenApiServiceResponse openApiServiceResponse = null;
        try {
            openApiServiceResponse = xmlMapper.readValue(result, OpenApiServiceResponse.class);
        } catch (JsonProcessingException e) {
            log.error("Error parsing the {} result in XML: {}", apiName, e.getMessage());
            throw new RuntimeException(e);
        }
        CmmMsgHeader cmmMsgHeader = openApiServiceResponse.getCmmMsgHeader();
        log.error(
                "{} Error HTTP Response: errMsg = {}, returnAuthMsg = {}, returnReasonCode = {}",
                apiName, cmmMsgHeader.getErrMsg(), cmmMsgHeader.getReturnAuthMsg(), cmmMsgHeader.getReturnReasonCode()
        );
    }

}