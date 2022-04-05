package com.example.todoapp.domain.logic;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
@Getter
@Setter
public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String token;
    private final String username;

    public JwtResponse(String token, String username) {
        this.token = token;
        this.username = username;
    }
}