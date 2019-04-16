package com.freq.accountservice.mapper;

import com.freq.accountservice.model.Account;
import com.freq.accountservice.payload.request.SignUpRequest;
import org.springframework.security.crypto.password.PasswordEncoder;

public class AccountMapper {
    public static Account mapSignUpRequestToAccount(SignUpRequest signUpRequest, PasswordEncoder passwordEncoder){
        signUpRequest.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return Account.builder()
                .username(signUpRequest.getUsername())
                .email(signUpRequest.getEmail())
                .build();
    }
}
