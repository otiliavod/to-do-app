import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-home',
  templateUrl: './tasks-home.component.html',
  styleUrls: ['./tasks-home.component.css'],
})
export class TasksHomeComponent implements OnInit {
  tasks = [];
  updatedTask: Subscription;
  deletedTask: Subscription;
  constructor(
    private tasksService: TasksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.tasksService.getUserTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: () => {
        this.authService.signOutIfExpired();
      },
    });
    this.updatedTask = this.tasksService.getUpdatedTask().subscribe((task) => {
      this.updateTask(task);
    });
    this.deletedTask = this.tasksService.getDeletedTask().subscribe((id) => {
      this.deleteTask(id);
    });
  }

  updateTask(task) {
    if (task) {
      let crtTaskIdx = this.tasks.findIndex(
        (currentTask) => currentTask.id === task.id
      );
      if (crtTaskIdx !== -1) {
        this.tasks[crtTaskIdx] = task;
      }
    }
  }

  deleteTask(id: number) {
    if (id) {
      let crtTaskIdx = this.tasks.findIndex(
        (currentTask) => currentTask.id === id
      );
      if (crtTaskIdx !== -1) {
        this.tasks.splice(crtTaskIdx, 1);
      }
    }
  }
}
