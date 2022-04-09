import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTTokenService } from 'src/app/auth/jwttoken.service';
import { Task } from '../models/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  task: Task;
  taskGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl({ value: 1, disabled: true }),
    description: new FormControl(''),
  });

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private jwtTokenService: JWTTokenService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigateByUrl('/tasks');
  }

  save() {
    if (!this.taskGroup.get('title').errors) {
      let task = new Task();
      task.taskTitle = this.taskGroup.get('title').value;
      task.status = this.taskGroup.get('status').value;
      task.taskDescription = this.taskGroup.get('description').value;
      task.userId = this.jwtTokenService.getUserId();
      this.tasksService.addTask(task).subscribe((taskRes) => {
        this.tasksService.setAddedTask(taskRes);
        this.router.navigateByUrl('/tasks');
      });
    } else {
      this.taskGroup.setErrors({ title: true });
    }
  }

  showErrors() {
    const { dirty, touched, errors } = this.taskGroup.get('title');
    return dirty && touched && errors;
  }
}
