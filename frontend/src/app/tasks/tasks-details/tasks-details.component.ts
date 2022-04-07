import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css'],
})
export class TasksDetailsComponent implements OnInit {
  task: Task;

  constructor(private route: ActivatedRoute) {
    this.task = route.snapshot.data['task'];
    this.route.data.subscribe(({ task }) => {
      this.task = task;
    });
  }

  ngOnInit(): void {}
}
