import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  updatedTask = new BehaviorSubject(null);
  deletedTask = new BehaviorSubject(null);

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

  changedTask(task: Task) {
    this.updatedTask.next(task);
  }

  getUpdatedTask() {
    return this.updatedTask;
  }

  getDeletedTask() {
    return this.deletedTask;
  }

  setDeletedTask(id: number) {
    this.deletedTask.next(id);
  }
}
