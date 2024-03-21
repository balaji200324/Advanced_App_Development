package com.futurethink.config;

import static com.futurethink.enumerated.Role.SUPERADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.futurethink.model.User;
import com.futurethink.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCli implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0)
            return;
        var superadmin = User.builder().name("Mohan").email("mohan@gmail.com")
                .password(passwordEncoder.encode("Mohan@123")).phoneNumber("1234567890").role(SUPERADMIN).active(true)
                .build();
        userRepository.save(superadmin);
    }

}
