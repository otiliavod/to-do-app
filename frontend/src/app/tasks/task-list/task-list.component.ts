import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  crtUser: any;
  taskList = [];
  constructor(
    private authService: AuthService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.crtUser = this.authService.getCrtUser();
    this.taskService.getTasks(this.crtUser.id).subscribe((tasks) => {
      this.taskList = tasks;
      console.log(tasks);
    });
  }
}
