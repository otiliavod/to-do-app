package com.example.todoapp.dao.mybatis.task;

import com.example.todoapp.domain.vo.Task;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskDAO {
     List<Task> getUserTasks(Long userId);
}
