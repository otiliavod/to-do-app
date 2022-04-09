package com.example.todoapp.controllers;

import com.example.todoapp.domain.vo.User;
import com.example.todoapp.services.ProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class ProfileController {
    private final ProfileService profileService;
    public ProfileController(ProfileService profileService){
        this.profileService = profileService;
    }

    @PutMapping
    void updateProfile(@RequestBody User user) {

        this.profileService.updateProfile(user);
    }

    @DeleteMapping(path="/{id}")
    void deleteProfile(@PathVariable Long id) {
        this.profileService.deleteProfile(id);
    }
}
