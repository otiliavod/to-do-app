package com.example.todoapp.dao.mybatis.task;

import com.example.todoapp.domain.vo.Task;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskDAO {
     List<Task> getUserTasks(String username);
     void addUserTask(Task task);
     void updateTask(Task task);
     Task getTaskById(Long id);
     void deleteTask(Long id);
}
