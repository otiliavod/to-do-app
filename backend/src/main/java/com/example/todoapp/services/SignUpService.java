package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.logic.UserChecksResponse;
import com.example.todoapp.domain.vo.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {
    private final UserDAO userDao;
    private final PasswordEncoder passwordEncoder;

    public SignUpService(UserDAO userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<UserChecksResponse> signUp(User user) {
        String userAlreadyExists = this.userDao.checkUsername(user.getUsername());
        String emailAlreadyExists = this.userDao.checkEmail(user.getEmail());
        UserChecksResponse res = new UserChecksResponse();
        if(userAlreadyExists == null && emailAlreadyExists == null ){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
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
