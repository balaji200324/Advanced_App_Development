package com.futurethink.dto.request;

import com.futurethink.enumerated.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class UserRequest {
    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public  Role getRole() {
        return role;
    }
    
}
