package com.example.todoapp.domain.logic;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserChecksResponse {
    private Boolean userAlreadyInUse = false;
    private Boolean emailAlreadyInUse = false;
}
