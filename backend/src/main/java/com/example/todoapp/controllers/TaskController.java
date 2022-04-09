package com.example.todoapp.controllers;

import com.example.todoapp.domain.vo.Task;
import com.example.todoapp.services.TaskService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/tasks")
@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(path="/getUserTasks/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
    List<Task> getUserTasks(@PathVariable String username) {
      return this.taskService.getUserTasks(username);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = this.taskService.getTaskById(id);
        if(task != null) {
            return ResponseEntity.ok(task);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(path="/")
    public Task addUserTask(@RequestBody Task task) {
        return this.taskService.addUserTask(task);
    }

    @PutMapping(path="/")
    public void updateTask(@RequestBody Task task) {
        this.taskService.updateTask(task);
    }

    @DeleteMapping(path="/{id}")
    public void deleteTask(@PathVariable Long id) {
        this.taskService.deleteTask(id);
    }
}
