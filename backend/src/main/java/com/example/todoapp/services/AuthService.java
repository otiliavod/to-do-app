package com.example.todoapp.services;

import com.example.todoapp.config.JwtTokenUtil;
import com.example.todoapp.domain.logic.JwtResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final JwtUserDetailService jwtUserDetailService;

    public AuthService(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, JwtUserDetailService jwtUserDetailService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.jwtUserDetailService = jwtUserDetailService;
    }

    public JwtResponse authenticate(String username, String password) throws Exception{
        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
            final UserDetails userDetails = this.jwtUserDetailService.loadUserByUsername(username);
            final String token = jwtTokenUtil.generateToken(userDetails);
            return new JwtResponse(token, username);
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
