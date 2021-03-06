package com.example.todoapp.dao.mybatis.user;

import com.example.todoapp.domain.logic.ProfileDetails;
import com.example.todoapp.domain.vo.User;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface UserDAO {
    String checkUsername(String username);
    String checkEmail(String email);
    void signUp(User user);
    User findByUsername(String username);
    void updateProfile(User user);
    void deleteProfile(Long id);
    ProfileDetails getProfileDetails(Long id);
}
