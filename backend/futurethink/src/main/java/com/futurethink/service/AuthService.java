package com.futurethink.service;

import com.futurethink.dto.request.LoginRequest;
import com.futurethink.dto.request.RegisterRequest;
import com.futurethink.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}