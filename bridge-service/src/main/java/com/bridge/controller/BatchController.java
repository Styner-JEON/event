package com.bridge.controller;

import com.bridge.service.PublicDataApiClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BatchController {

    private final PublicDataApiClient publicDataApiClient;

    @GetMapping("/batch")
    public ResponseEntity<?> getEventList() {
        publicDataApiClient.getEventList();
        return null;
        //        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body();
    }

}
