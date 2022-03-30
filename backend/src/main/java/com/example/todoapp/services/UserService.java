package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDao;

    public UserService(UserDAO userDao) {
        this.userDao = userDao;
    }

    public ResponseEntity<UserChecksResponse> signUp(User user) {
        String userAlreadyExists = this.userDao.checkUsername(user.getUsername());
        String emailAlreadyExists = this.userDao.checkEmail(user.getEmail());
        UserChecksResponse res = new UserChecksResponse();
        if(userAlreadyExists == null && emailAlreadyExists == null ){
            this.userDao.signUp(user);
            return ResponseEntity.ok(res);
        }
        if(userAlreadyExists != null){
            res.setUserAlreadyInUse(true);
        }
        if(emailAlreadyExists != null){
            res.setEmailAlreadyInUse(true);
        }
        return ResponseEntity.unprocessableEntity().body(res);
    }

    public ResponseEntity<String> checkUsername(String username) {
        String foundUsername = this.userDao.checkUsername(username);
        if(foundUsername != null){
            return ResponseEntity.unprocessableEntity().body(foundUsername);
        }
        else {
           return ResponseEntity.ok(foundUsername);
        }
    }

    public ResponseEntity<String> checkEmail(String email) {
        String foundEmail = this.userDao.checkEmail(email);
        if( foundEmail != null) {
            return ResponseEntity.unprocessableEntity().body(foundEmail);
        }
        else {
            return ResponseEntity.ok(foundEmail);
        }
    }
}
