package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    private final UserDAO userDao;

    public ProfileService(UserDAO userDao) {
        this.userDao = userDao;
    }
    public void updateProfile(User user) {
        this.userDao.updateProfile(user);
    }
    public void deleteProfile(Long id) {
        this.userDao.deleteProfile(id);
    }
}
