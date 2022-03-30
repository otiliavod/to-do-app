import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  userAlreadyInUse: boolean;
  emailAlreadyInUse: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.get<string>(`${this.baseUrl}/checkUsername/${username}`);
  }

  emailAvailable(email: string) {
    return this.http.get<string>(`${this.baseUrl}/checkEmail/${email}`);
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${this.baseUrl}/users`, credentials);
  }
}
