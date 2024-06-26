package com.futurethink.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.futurethink.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Boolean existsByName(String name);

    Boolean existsByEmail(String email);
}