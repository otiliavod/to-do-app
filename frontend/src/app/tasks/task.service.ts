import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/user';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  getTasks(userId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/${userId}`);
  }
}
