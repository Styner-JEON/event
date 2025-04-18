package com.auth.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {

    SIGNUP_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    JWT_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    LOGIN_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    AUTH_ERROR(HttpStatus.INTERNAL_SERVER_ERROR),

    UNEXPECTED_ERROR(HttpStatus.INTERNAL_SERVER_ERROR);

    private final HttpStatus errorStatus;

}
