import { Component, Input } from '@angular/core';
import { TaskUtilsService } from '../task-utils.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasks = [];
  @Input() showFirstTask;

  constructor(private taskUtils: TaskUtilsService) {}

  deleteTask(id: number) {
    this.taskUtils.deleteTask(id);
  }
}
