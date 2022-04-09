import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JWTTokenService } from '../jwttoken.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  onSubmit() {
    if (this.authForm.invalid || this.authForm.pending) {
      return;
    }

    this.authService.signIn(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/tasks');
      },
      error: ({ error }) => {
        if (error.username) {
          this.authForm.setErrors({ credentials: true });
        }
      },
    });
  }
}
