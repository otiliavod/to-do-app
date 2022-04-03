package com.example.todoapp.controllers;

import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import com.example.todoapp.services.SignUpService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signUp")
public class SignUpController {
    private final SignUpService signUpService;


    public SignUpController(SignUpService signUpService){
        this.signUpService = signUpService;
    }

    @PostMapping
    ResponseEntity<UserChecksResponse> signUp(@RequestBody User user){
        return this.signUpService.signUp(user);
    }

    @GetMapping(path = "/checkUsername/{username}")
    ResponseEntity<String> checkUsername(@PathVariable String username) {
        return this.signUpService.checkUsername(username);
    }

    @GetMapping(path = "/checkEmail/{email}")
    ResponseEntity<String> checkEmail(@PathVariable String email) {
        return this.signUpService.checkEmail(email);
    }
}
