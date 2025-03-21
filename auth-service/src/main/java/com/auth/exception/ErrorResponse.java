package com.auth.exception;

public record ErrorResponse(ErrorCode errorCode, String message) {
}
