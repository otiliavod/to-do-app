package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.vo.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    private final UserDAO userDao;
    private final PasswordEncoder passwordEncoder;

    public ProfileService(UserDAO userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }
    public void updateProfile(User user) {
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        this.userDao.updateProfile(user);
    }
    public void deleteProfile(Long id) {
        this.userDao.deleteProfile(id);
    }
}
