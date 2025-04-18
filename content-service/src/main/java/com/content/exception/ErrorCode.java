package com.content.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {

    IMAGE_PROCESSING_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    EVENT_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    UNEXPECTED_ERROR(HttpStatus.INTERNAL_SERVER_ERROR);

    private final HttpStatus errorStatus;

}
