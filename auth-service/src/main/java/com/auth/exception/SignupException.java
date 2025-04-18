package com.auth.exception;

public class SignupException extends AuthException {

    public SignupException(String message) {
        super(message);
    }

    public SignupException(String message, Throwable cause) {
        super(message, cause);
    }

}