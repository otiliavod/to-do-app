package com.example.todoapp.dao.mybatis.task;

import com.example.todoapp.domain.vo.Task;

import java.util.List;

public interface TaskDAO {
     List<Task> getUserTasks(Long userId);
}
