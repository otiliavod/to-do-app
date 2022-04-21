package com.example.todoapp.controllers;

import com.example.todoapp.domain.logic.ProfileDetails;
import com.example.todoapp.domain.vo.User;
import com.example.todoapp.services.ProfileService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
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

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProfileDetails> getProfileDetails(@PathVariable Long id) {
        ProfileDetails profileDetails = this.profileService.getProfileDetails(id);
        if(profileDetails != null) {
            return ResponseEntity.ok(profileDetails);
        }
        return ResponseEntity.notFound().build();
    }
}
