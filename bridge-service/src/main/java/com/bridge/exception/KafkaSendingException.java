package com.bridge.exception;

public class KafkaSendingException extends BridgeServiceException {

    private static final String ERROR_CODE = "KAFKA_SENDING_ERROR";

    public KafkaSendingException(String message) {
        super(ERROR_CODE, message);
    }

    public KafkaSendingException(String message, Throwable cause) {
        super(ERROR_CODE, message, cause);
    }

}
