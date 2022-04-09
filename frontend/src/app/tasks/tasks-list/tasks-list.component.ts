import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasks = [];

  constructor(private tasksService: TasksService, private router: Router) {}

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
    this.tasksService.setDeletedTask(id);
    this.router.navigateByUrl('/tasks');
  }
}
