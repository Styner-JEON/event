package com.auth.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(SignupException.class)
    public ResponseEntity<ErrorResponse> handleSignupException(SignupException e) {
        return buildErrorResponse(ErrorCode.SIGNUP_ERROR, e, true);
    }

    @ExceptionHandler(CustomJwtException.class)
    public ResponseEntity<ErrorResponse> handleCustomJwtException(CustomJwtException e) {
        return buildErrorResponse(ErrorCode.JWT_ERROR, e, true);
    }

    @ExceptionHandler(CustomLoginException.class)
    public ResponseEntity<ErrorResponse> handleCustomLoginException(CustomLoginException e) {
        return buildErrorResponse(ErrorCode.LOGIN_ERROR, e, true);
    }

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<ErrorResponse> handleAuthException(AuthException e) {
        return buildErrorResponse(ErrorCode.AUTH_ERROR, e, true);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception e) {
        return buildErrorResponse(ErrorCode.UNEXPECTED_ERROR, e, false);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(ErrorCode errorCode, Exception e, boolean isUnexpectedError) {
        log.error(String.valueOf(errorCode), e);
        String message = isUnexpectedError ? e.getMessage() : "An unexpected error occurred.";
        return ResponseEntity.status(errorCode.getErrorStatus()).body(new ErrorResponse(errorCode, message));
    }

}
