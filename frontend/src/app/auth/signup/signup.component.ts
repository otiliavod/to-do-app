import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueEmail } from '../validators/unique-email';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private uniqueEmail: UniqueEmail,
    private router: Router
  ) {}

  ngOnInit(): void {}

  authForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.uniqueEmail.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  onSubmit() {
    if (this.authForm.invalid || this.authForm.pending) {
      return;
    }

    this.authService.signUp(this.authForm.value).subscribe({
      next: () => {
        this.authService.signIn(this.authForm.value).subscribe(() => {
          this.router.navigateByUrl('/tasks');
        });
      },
      error: (err) => {
        const { userAlreadyInUse, emailAlreadyInUse } = err.error;
        let errorsToBeShown = {};
        if (!err.status) {
          errorsToBeShown['noConnection'] = true;
        } else {
          if (userAlreadyInUse) {
            errorsToBeShown['nonUniqueUsername'] = true;
          }
          if (emailAlreadyInUse) {
            errorsToBeShown['nonUniqueEmail'] = true;
          }
        }
        this.authForm.setErrors(errorsToBeShown);
      },
    });
  }
}
