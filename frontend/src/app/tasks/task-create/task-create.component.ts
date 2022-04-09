import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  task: Task;
  taskGroup = new FormGroup({
    title: new FormControl(),
    status: new FormControl(),
    description: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
