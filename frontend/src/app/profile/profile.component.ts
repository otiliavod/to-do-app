import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTTokenService } from '../auth/jwttoken.service';
import { User } from '../auth/models/user';
import { MatchPassword } from '../auth/validators/match-password';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private jwtTokenService: JWTTokenService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveProfile() {
    if (this.profileForm.valid) {
      let user = new User();
      user.firstName = this.profileForm.get('firstName').value;
      user.lastName = this.profileForm.get('lastName').value;
      user.password = this.profileForm.get('password').value;
      user.id = this.jwtTokenService.getUserId();
      this.profileService.updateProfile(user).subscribe({
        next: () => this.router.navigateByUrl('/tasks'),
        error: () => {
          this.profileForm.setErrors({ noFieldUpdated: true });
        },
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('/tasks');
  }
}
