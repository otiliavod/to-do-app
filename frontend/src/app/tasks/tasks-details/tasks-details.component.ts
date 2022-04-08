import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css'],
})
export class TasksDetailsComponent {
  @Output() changedTask = new EventEmitter();
  task: Task;
  isEditable = false;
  detailsGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService
  ) {
    this.task = route.snapshot.data['task'];
    this.route.data.subscribe(({ task }) => {
      this.task = task;
      this.detailsGroup = new FormGroup({
        title: new FormControl(this.task.taskTitle),
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
    let titleFormControl = this.detailsGroup.get('title');
    let statusFormControl = this.detailsGroup.get('status');
    let descriptionFormControl = this.detailsGroup.get('description');

    this.setEditable(false);
    titleFormControl.patchValue(this.task.taskTitle);
    statusFormControl.patchValue(this.task.status);
    descriptionFormControl.patchValue(this.task.taskDescription);
  }

  saveForm() {
    this.task.taskTitle = this.detailsGroup.get('title').value;
    this.task.status = this.detailsGroup.get('status').value;
    this.task.taskDescription = this.detailsGroup.get('description').value;
    this.taskService.updateTask(this.task).subscribe();
    this.setEditable(false);
    this.changedTask.emit(this.task);
  }
}
