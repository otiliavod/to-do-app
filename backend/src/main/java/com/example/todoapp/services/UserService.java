package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDao;

    public UserService(UserDAO userDao) {
        this.userDao = userDao;
    }

    public UserChecksResponse signUp(User user) {
        String userAlreadyExists = this.userDao.checkUsername(user.getUsername());
        String emailAlreadyExists = this.userDao.checkEmail(user.getEmail());
        UserChecksResponse res = new UserChecksResponse();
        if(userAlreadyExists == null && emailAlreadyExists == null ){
            this.userDao.signUp(user);
            return res;
        }
        if(userAlreadyExists != null){
            res.setUserAlreadyInUse(true);
        }
        if(emailAlreadyExists != null){
            res.setEmailAlreadyInUse(true);
        }
        return res;
    }

    public String checkUsername(String username) {
        return this.userDao.checkUsername(username);
    }

    public String checkEmail(String email) {
        return this.userDao.checkEmail(email);
    }
}
