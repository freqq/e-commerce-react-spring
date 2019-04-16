package com.freq.accountservice.repository;

import com.freq.accountservice.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    boolean existsAccountByEmail(String email);
    boolean existsAccountByUsername(String username);
}
