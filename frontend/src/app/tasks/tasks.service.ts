import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JWTTokenService } from '../auth/jwttoken.service';
import { Task } from './models/task';
import { environment } from '../../environments/environment';
const BASE_URL = `${environment.restUrl}/tasks`;

interface TaskSummary {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  updatedTask = new BehaviorSubject(null);
  deletedTask = new BehaviorSubject(null);
  addedTask = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private jwtTokenService: JWTTokenService
  ) {}

  getUserTasks() {
    return this.http.get<TaskSummary[]>(
      `${BASE_URL}/getUserTasks/${this.jwtTokenService.getUser()}`
    );
  }

  getTask(id: string) {
    return this.http.get<Task>(`${BASE_URL}/${id}`);
  }

  addTask(task: Task) {
    return this.http.post<Task>(`${BASE_URL}/`, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${BASE_URL}/`, task);
  }

  deleteTask(id: number) {
    return this.http.delete<Task>(`${BASE_URL}/${id}`);
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

  getAddedTask() {
    return this.addedTask;
  }

  setAddedTask(task: Task) {
    this.addedTask.next(task);
  }
}
