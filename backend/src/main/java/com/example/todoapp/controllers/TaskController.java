package com.example.todoapp.controllers;

import com.example.todoapp.domain.vo.Task;
import com.example.todoapp.services.TaskService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/tasks")
@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(path="/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    List<Task> getUserTasks(@PathVariable Long userId) {
      return this.taskService.getUserTasks(userId);
    }
}
