import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

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

interface SigninResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:8080/users';
  signedin$ = new BehaviorSubject(null);
  username = '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.get<string>(`${this.baseUrl}/checkUsername/${username}`);
  }

  emailAvailable(email: string) {
    return this.http.get<string>(`${this.baseUrl}/checkEmail/${email}`);
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${this.baseUrl}`, credentials, {
      withCredentials: true,
    });
  }

  signin(credentials: SigninCredentials) {
    return this.http
      .post<SigninResponse>(`${this.baseUrl}/signin`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${this.baseUrl}/signedin`, {
        withCredentials: true,
      })
      .pipe(
        tap(({ authenticated, username }) => {
          this.signedin$.next(authenticated);
          this.username = username;
        })
      );
  }
}
