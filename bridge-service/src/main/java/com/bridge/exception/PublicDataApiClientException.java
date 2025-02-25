package com.bridge.exception;

public class PublicDataApiClientException extends BridgeServiceException {

    private static final String ERROR_CODE = "PUBLIC_DATA_API_CLIENT_ERROR";

    public PublicDataApiClientException(String message) {
        super(ERROR_CODE, message);
    }

    public PublicDataApiClientException(String message, Throwable cause) {
        super(ERROR_CODE, message, cause);
    }

}
