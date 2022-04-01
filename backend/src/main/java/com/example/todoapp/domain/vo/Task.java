package com.example.todoapp.domain.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Task {
    private Long id;
    private String taskTitle;
    private String taskDescription;
    private Short status;
    private Long userId;
}
