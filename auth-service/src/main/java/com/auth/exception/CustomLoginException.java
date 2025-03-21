package com.auth.exception;

public class CustomLoginException extends AuthException {

    public CustomLoginException(String message) {
        super(message);
    }

    public CustomLoginException(String message, Throwable cause) {
        super(message, cause);
    }

}
