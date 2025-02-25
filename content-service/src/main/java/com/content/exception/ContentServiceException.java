package com.content.exception;

import lombok.Getter;

@Getter
public class ContentServiceException extends RuntimeException {

    public ContentServiceException(String message) {
        super(message);
    }

    public ContentServiceException(String message, Throwable cause) {
        super(message, cause);
    }

}
