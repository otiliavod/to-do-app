import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { JWTTokenService } from './jwttoken.service';
import { LocalStorageService } from './local-storage.service';

interface SignupCredentials {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  userAlreadyInUse: boolean;
  emailAlreadyInUse: boolean;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface JwtToken {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService,
    private jwtTokenService: JWTTokenService
  ) {}

  usernameAvailable(username: string) {
    return this.http.get<string>(
      `${this.baseUrl}/signUp/checkUsername/${username}`
    );
  }

  emailAvailable(email: string) {
    return this.http.get<string>(`${this.baseUrl}/signUp/checkEmail/${email}`);
  }

  signUp(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(
      `${this.baseUrl}/signUp`,
      credentials
    );
  }

  signIn(credentials: SigninCredentials) {
    return this.http
      .post<JwtToken>(`${this.baseUrl}/authenticate/signIn`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap(({ token }) => {
          this.localStorageService.set('token', token);
          this.jwtTokenService.setToken(token);
        })
      );
  }

  isAuthenticated() {
    if (this.jwtTokenService.getUser()) {
      if (this.jwtTokenService.isTokenExpired()) {
        return false;
      }
      return true;
    }
    return false;
  }

  signOutIfExpired() {
    if (this.jwtTokenService.isTokenExpired()) {
      this.localStorageService.remove('token');
      this.router.navigateByUrl('/');
    }
  }
}
