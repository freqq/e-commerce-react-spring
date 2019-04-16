package com.freq.accountservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UsernameExistsException extends RuntimeException{
    public UsernameExistsException(String message){
        super(message);
    }

    public UsernameExistsException(String message, Throwable cause){
        super(message, cause);
    }
}
