package com.example.todoapp.domain.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class User {
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
}
