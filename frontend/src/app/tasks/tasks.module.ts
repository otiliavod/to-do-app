import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TaskHomeComponent } from './task-home/task-home.component';

@NgModule({
  declarations: [TaskListComponent, TaskShowComponent, TaskHomeComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class TasksModule {}
