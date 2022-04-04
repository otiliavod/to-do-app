package com.example.todoapp.domain.logic;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskRequestParams {
    private String taskTitle;
    private String taskDescription;
    private Long userId;
}
