package com.bridge.controller;

import com.bridge.model.dto.EventDto;
import com.bridge.service.PublicDataApiClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BatchController {

    private final PublicDataApiClient publicDataApiClient;

    @GetMapping("/batch")
    public ResponseEntity<List<EventDto>> setEventDtoList() {
        List<EventDto> eventDtoList = publicDataApiClient.getEventDtoList();
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(eventDtoList);
    }

}
