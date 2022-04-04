package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.task.TaskDAO;
import com.example.todoapp.domain.vo.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private TaskDAO taskDao;

    public TaskService(TaskDAO taskDao) {
        this.taskDao = taskDao;
    }

    public List<Task> getUserTasks(Long userId) {
        return this.taskDao.getUserTasks(userId);
    }

    public void addUserTask(Task task) {
        this.taskDao.addUserTask(task);
    }

    public void updateTask(Task task) {
        this.taskDao.updateTask(task);
    }

    public void deleteTask(Long id) {
        this.taskDao.deleteTask(id);
    }
}
