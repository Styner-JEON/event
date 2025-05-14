package com.content.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

//    @ExceptionHandler(ImageProcessingException.class)
//    public ResponseEntity<ErrorResponse> handleImageProcessingException(ImageProcessingException e) {
//        return buildErrorResponse(ErrorCode.IMAGE_PROCESSING_ERROR, e, true);
//    }

    @ExceptionHandler(EventException.class)
    public ResponseEntity<ErrorResponse> handleEventException(EventException e) {
        String message = e.getMessage();
        log.error(message);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(message));
    }

//    private ResponseEntity<ErrorResponse> buildErrorResponse(ErrorCode errorCode, Exception e, boolean isUnexpectedError) {
//        log.error(errorCode.name(), e);
//        String message = isUnexpectedError ? e.getMessage() : "An unexpected error occurred.";
//        return ResponseEntity.status(errorCode.getErrorStatus()).body(new ErrorResponse(errorCode.name(), message));
//    }

//    private ResponseEntity<ErrorResponse> buildErrorResponse(ErrorCode errorCode, Exception e, boolean isUnexpectedError) {
//        log.error(String.valueOf(errorCode), e);
//        String message = isUnexpectedError ? e.getMessage() : "An unexpected error occurred.";
//        return ResponseEntity.status(errorCode.getErrorStatus()).body(new ErrorResponse(errorCode, message));
//    }

}
