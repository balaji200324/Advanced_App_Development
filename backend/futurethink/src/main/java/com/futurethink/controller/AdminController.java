package com.futurethink.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.futurethink.dto.request.RegisterRequest;
import com.futurethink.dto.request.UserUpdateRequest;
import com.futurethink.dto.response.MessageResponse;
import com.futurethink.enumerated.Role;
import com.futurethink.model.Course;
import com.futurethink.model.User;
import com.futurethink.repository.UserRepository;
import com.futurethink.service.CourseService;
import com.futurethink.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/admin")
@AllArgsConstructor
@Tag(name = "Admin Controls", description = "Endpoints for admin")
public class AdminController {
    private final UserService userService;
    private final UserRepository userRepository;
	private final CourseService courseService;
    @Autowired
    private final PasswordEncoder encoder;

    @PostMapping("/Addusers")
    @PreAuthorize("hasRole('Admin')")
    @Operation(summary = "Add user", description = "Allows admin to create user.")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
	    if (userRepository.existsByName(registerRequest.getName())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
	    }

	    if (userRepository.existsByEmail(registerRequest.getEmail())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
	    }

		User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(encoder.encode(registerRequest.getPassword()));
		user.setRole(Role.User);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User created successfully!"));
    }

    @PutMapping("/users/{userId}")
	@PreAuthorize("hasRole('Admin')")
    public ResponseEntity<?> AdminupdateUser(@PathVariable Long userId, @RequestBody UserUpdateRequest userUpdateRequest) {
	    User existingUser = userRepository.findById(userId)
	            .orElseThrow(() -> new RuntimeException("Error: User not found."));

	    existingUser.setName(userUpdateRequest.getName());
	    existingUser.setEmail(userUpdateRequest.getEmail());

	    if (userUpdateRequest.getPassword() != null && !userUpdateRequest.getPassword().isEmpty()) {
	        existingUser.setPassword(encoder.encode(userUpdateRequest.getPassword()));
	    }
        userRepository.save(existingUser);
        return ResponseEntity.ok(new MessageResponse("User updated successfully."));
    }


    @DeleteMapping("/users/{userId}")
	@PreAuthorize("hasRole('Admin')")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
	    userService.deleteUser(userId);
	    return ResponseEntity.ok(new MessageResponse("User deleted successfully."));
	}
	

	@GetMapping("/allCourses")
    @PreAuthorize("hasRole('Admin')")
    public List<Course> getAllCoureses() {
        return courseService.getAllCourses();
    }
	
	@GetMapping("/allUsers")
    @PreAuthorize("hasRole('Admin')")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}