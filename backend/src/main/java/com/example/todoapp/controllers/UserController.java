package com.example.todoapp.controllers;

import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import com.example.todoapp.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping
    UserChecksResponse signUp(@RequestBody User user){
        return this.userService.signUp(user);
    }

    @GetMapping(path = "/checkUsername/{username}")
    String checkUsername(@PathVariable String username) {
        return this.userService.checkUsername(username);
    }

    @GetMapping(path = "/checkEmail/{email}")
    String checkEmail(@PathVariable String email) {
        return this.userService.checkEmail(email);
    }
}