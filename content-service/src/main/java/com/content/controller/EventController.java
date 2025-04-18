package com.content.controller;

import com.content.mapper.EventMapper;
import com.content.model.dto.EventDto;
import com.content.model.response.EventResponse;
import com.content.model.response.TestResponse;
import com.content.service.EventService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/events/${api.version}", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@Slf4j
public class EventController {

    private final EventService eventService;

    private final EventMapper eventMapper;

    @GetMapping
    public ResponseEntity<Page<EventResponse>> getEventList(@PageableDefault(
            size = 20,
            page = 0,
            sort = "modifiedTime",
            direction = Sort.Direction.DESC
    )  Pageable pageable) {
        Page<EventDto> eventDtoPage = eventService.selectEventList(pageable);
        Page<EventResponse> eventResponsePage = eventDtoPage.map(eventMapper::toEventResponse);
        return ResponseEntity.ok(eventResponsePage);
    }

    @GetMapping("/{contentId}")
    public ResponseEntity<EventResponse> getEvent(@PathVariable Long contentId) {
        EventDto eventDto = eventService.selectEvent(contentId);
        EventResponse eventResponse = eventMapper.toEventResponse(eventDto);
        return ResponseEntity.ok(eventResponse);
    }

    @GetMapping("/test")
    public TestResponse getEventList2(Pageable pageable) {
        TestResponse testResponse = new TestResponse();
        testResponse.setContentId(111L);
        testResponse.setTitle("test title");
        testResponse.setFirstImage("http://tong.visitkorea.or.kr/cms/resource/71/3108671_image2_1.jpg");
        testResponse.setFirstImage2("http://tong.visitkorea.or.kr/cms/resource/71/3108671_image3_1.jpg");
        return testResponse;
    }

}
