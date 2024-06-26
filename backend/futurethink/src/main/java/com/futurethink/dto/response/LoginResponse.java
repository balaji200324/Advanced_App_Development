package com.futurethink.dto.response;

import com.futurethink.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class LoginResponse {
    @Builder.Default
    private String accessToken = "";
    private String userName = "";

    private Role role;

}
