import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth/models/user';
import { environment } from '../environments/environment';
const BASE_URL = `${environment.restUrl}/users`;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(user: User) {
    return this.http.put(BASE_URL, user);
  }
}
