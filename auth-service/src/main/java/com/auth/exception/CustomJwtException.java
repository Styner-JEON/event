package com.auth.exception;

public class CustomJwtException extends AuthException{

    public CustomJwtException(String message) {
        super(message);
    }

    public CustomJwtException(String message, Throwable cause) {
        super(message, cause);
    }

}
