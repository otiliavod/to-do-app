import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskUtilsService } from '../task-utils.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css'],
})
export class TasksDetailsComponent {
  task: Task;
  isEditable = false;
  detailsGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private taskUtils: TaskUtilsService,
    private router: Router
  ) {
    this.task = route.snapshot.data['task'];
    this.route.data.subscribe(({ task }) => {
      this.task = task;
      this.detailsGroup = new FormGroup({
        title: new FormControl(this.task.taskTitle, [
          Validators.required,
          Validators.minLength(2),
        ]),
        status: new FormControl({
          value: this.task.status,
          disabled: !this.isEditable,
        }),
        description: new FormControl(this.task.taskDescription),
      });
    });
  }

  setEditable(status: boolean) {
    let statusFormControl = this.detailsGroup.get('status');
    this.isEditable = status;
    if (status) {
      statusFormControl.enable();
    } else {
      statusFormControl.disable();
    }
  }

  cancelEditable() {
    // Reset to default values
    // let titleFormControl = this.detailsGroup.get('title');
    // let statusFormControl = this.detailsGroup.get('status');
    // let descriptionFormControl = this.detailsGroup.get('description');

    // this.setEditable(false);
    // titleFormControl.patchValue(this.task.taskTitle);
    // statusFormControl.patchValue(this.task.status);
    // descriptionFormControl.patchValue(this.task.taskDescription);
    this.router.navigateByUrl('/tasks');
  }

  saveForm() {
    if (!this.detailsGroup.get('title').errors) {
      this.task.taskTitle = this.detailsGroup.get('title').value;
      this.task.status = this.detailsGroup.get('status').value;
      this.task.taskDescription = this.detailsGroup.get('description').value;
      this.taskService.updateTask(this.task).subscribe();
      this.setEditable(false);
      this.taskService.changedTask(this.task);
      this.router.navigateByUrl('/tasks');
    } else {
      this.detailsGroup.setErrors({ title: true });
    }
  }

  deleteTask() {
    this.taskUtils.deleteTask(this.task.id);
  }

  showErrors() {
    const { dirty, touched, errors } = this.detailsGroup.get('title');
    return dirty && touched && errors;
  }
}
