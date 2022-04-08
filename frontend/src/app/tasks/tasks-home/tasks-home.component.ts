import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-home',
  templateUrl: './tasks-home.component.html',
  styleUrls: ['./tasks-home.component.css'],
})
export class TasksHomeComponent implements OnInit {
  tasks = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getUserTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  updatedTask(event) {
    console.log(event);
  }
}
