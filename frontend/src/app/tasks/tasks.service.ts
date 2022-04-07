import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JWTTokenService } from '../auth/jwttoken.service';
import { Task } from './models/task';

interface TaskSummary {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  baseUrl = 'http://localhost:8080/tasks';

  constructor(
    private http: HttpClient,
    private jwtTokenService: JWTTokenService
  ) {}

  getUserTasks() {
    return this.http.get<TaskSummary[]>(
      `${this.baseUrl}/getUserTasks/${this.jwtTokenService.getUser()}`
    );
  }

  getTask(id: string) {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  addTask(task: Task) {
    return this.http.post<Task>(`${this.baseUrl}/`, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${this.baseUrl}/`, task);
  }

  deleteTask(id: number) {
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }
}
