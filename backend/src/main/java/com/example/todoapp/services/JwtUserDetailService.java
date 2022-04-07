package com.example.todoapp.services;

import com.example.todoapp.dao.mybatis.user.UserDAO;
import com.example.todoapp.domain.logic.CustomUserDetails;
import com.example.todoapp.domain.vo.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailService implements UserDetailsService {
    private final UserDAO userDao;

    public JwtUserDetailService(UserDAO userDao) {
        this.userDao = userDao;
    }

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userDao.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);
    }
}
