package com.futurethink.service;

import java.util.List;

import com.futurethink.dto.request.UserRequest;
import com.futurethink.dto.request.UserUpdateRequest;
import com.futurethink.model.User;


public interface UserService {

    void createUser(UserRequest userRequest);
    void updateUser(long userUid, UserUpdateRequest userUpdateRequest);
    void deleteUser(long userUid);
    List<User> getAllUsers();
}
