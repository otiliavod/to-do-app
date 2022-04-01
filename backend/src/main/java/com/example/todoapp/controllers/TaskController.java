package com.example.todoapp.controllers;

import com.example.todoapp.domain.vo.Task;
import com.example.todoapp.services.TaskService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path="/")
    public void addUserTask(@RequestBody Task task) {
        this.taskService.addUserTask(task);
    }
}
