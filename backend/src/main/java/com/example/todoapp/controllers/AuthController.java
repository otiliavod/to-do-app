package com.example.todoapp.controllers;

import com.example.todoapp.domain.vo.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/authenticate")
public class AuthController {
    @PostMapping("/signIn")
    public String signIn(@RequestBody User user) {
        return user.getUsername();
    }
}
