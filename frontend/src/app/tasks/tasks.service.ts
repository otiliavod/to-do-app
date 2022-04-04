import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}
}
