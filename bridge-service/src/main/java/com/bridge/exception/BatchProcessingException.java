package com.bridge.exception;

public class BatchProcessingException extends BridgeServiceException {

    private static final String ERROR_CODE = "BATCH_PROCESSING_ERROR";

    public BatchProcessingException(String message) {
        super(ERROR_CODE, message);
    }

    public BatchProcessingException(String message, Throwable cause) {
        super(ERROR_CODE, message, cause);
    }

}
