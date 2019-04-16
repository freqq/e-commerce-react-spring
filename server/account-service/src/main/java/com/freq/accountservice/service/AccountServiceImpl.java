package com.freq.accountservice.service;

import com.freq.accountservice.exception.EmailExistsException;
import com.freq.accountservice.exception.UsernameExistsException;
import com.freq.accountservice.mapper.AccountMapper;
import com.freq.accountservice.model.Account;
import com.freq.accountservice.payload.request.SignUpRequest;
import com.freq.accountservice.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@Service
public class AccountServiceImpl implements AccountService {
    private AccountRepository accountRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public AccountServiceImpl(AccountRepository accountRepository, BCryptPasswordEncoder bCryptPasswordEncoder){
        this.accountRepository = accountRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public ResponseEntity<?> createAccount(SignUpRequest signUpRequest){
        Account account = AccountMapper.mapSignUpRequestToAccount(signUpRequest, bCryptPasswordEncoder);
        if(accountRepository.existsAccountByEmail(account.getEmail()))
            throw new EmailExistsException("There is already an account with this email.");
        else if(accountRepository.existsAccountByUsername(account.getUsername()))
            throw new UsernameExistsException("There is already an account with this username");

        accountRepository.save(account);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/{id}")
                .buildAndExpand(account.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

}
