package com.example.todoapp.controllers;

import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import com.example.todoapp.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping
    ResponseEntity<UserChecksResponse> signUp(@RequestBody User user){
        return this.userService.signUp(user);
    }

    @GetMapping(path = "/checkUsername/{username}")
    ResponseEntity<String> checkUsername(@PathVariable String username) {
        return this.userService.checkUsername(username);
    }

    @GetMapping(path = "/checkEmail/{email}")
    ResponseEntity<String> checkEmail(@PathVariable String email) {
        return this.userService.checkEmail(email);
    }

    @PutMapping(path = "/")
    void updateProfile(@RequestBody User user) {
        this.userService.updateProfile(user);
    }
}
