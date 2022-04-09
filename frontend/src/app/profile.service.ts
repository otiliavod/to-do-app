import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth/models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  updateProfile(user: User) {
    return this.http.put(this.baseUrl, user);
  }
}
