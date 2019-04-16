package com.freq.accountservice.service;

import com.freq.accountservice.payload.request.SignUpRequest;
import org.springframework.http.ResponseEntity;

public interface AccountService {
    ResponseEntity<?> createAccount(SignUpRequest signUpRequest);
}
