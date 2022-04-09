import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root',
})
export class TaskUtilsService {
  constructor(private taskService: TasksService, private router: Router) {}

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.taskService.setDeletedTask(id);
    this.router.navigateByUrl('/tasks');
  }
}
