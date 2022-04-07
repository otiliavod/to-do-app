import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getUserTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // onClickDelete() {
  //   this.tasksService.deleteTask();
  // }
}
