package com.futurethink.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import com.futurethink.dto.request.UserRequest;
import com.futurethink.dto.request.UserUpdateRequest;
import com.futurethink.model.User;
import com.futurethink.repository.UserRepository;
import com.futurethink.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;

    @Override
    public void createUser(UserRequest userRequest)
    {
        User user =new User();
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        userRepo.save(user);     
    }
    @Override
    public void updateUser(long userUid,UserUpdateRequest userUpdateRequest){
        User existingUser=userRepo.findById(userUid)
        .orElseThrow(() -> new RuntimeException("User Not Found"));
        existingUser.setName(userUpdateRequest.getName());
        existingUser.setEmail(userUpdateRequest.getEmail());
        existingUser.setPassword(userUpdateRequest.getPassword());

    }
    @Override
    public void deleteUser(long userUid) {
       userRepo.deleteById(userUid);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}