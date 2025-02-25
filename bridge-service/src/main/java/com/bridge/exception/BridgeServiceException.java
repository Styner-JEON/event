package com.bridge.exception;

public class BridgeServiceException extends RuntimeException {

    private final String errorCode;

    public BridgeServiceException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public BridgeServiceException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

}
