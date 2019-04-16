package com.freq.accountservice.controller;

import com.freq.accountservice.payload.request.SignUpRequest;
import com.freq.accountservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("users")
public class AccountController {
    private AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @PostMapping("")
    ResponseEntity<?> signUp(@RequestBody @Valid SignUpRequest signUpRequest){
       return accountService.createAccount(signUpRequest);
    }
}
