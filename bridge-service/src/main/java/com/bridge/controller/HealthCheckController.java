package com.bridge.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping(path = "/bridge/${api.version}", produces = MediaType.APPLICATION_JSON_VALUE)
public class HealthCheckController {

    /**
     * 헬스체킹
     * @return
     */
    @GetMapping(path = "/healthcheck")
    public ResponseEntity<HealthStatus> healthcheck() {
        ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));
        String koreanDateTime = zonedDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z"));
        HealthStatus status = new HealthStatus("UP", koreanDateTime);
        return ResponseEntity.ok().body(status);
    }

    @AllArgsConstructor
    @Setter
    @Getter
    public static class HealthStatus {

        private String status;

        private String koreanDateTime;

    }

}




