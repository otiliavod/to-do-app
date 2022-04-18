package com.example.todoapp.controllers;

import com.example.todoapp.domain.logic.JwtRequest;
import com.example.todoapp.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/authenticate")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> signIn(@RequestBody JwtRequest authenticationRequest) throws Exception {
        return ResponseEntity.ok(this.authService.authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
    }
}
