import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksHomeComponent } from './tasks-home/tasks-home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksHomeComponent,
    TasksListComponent,
    TasksDetailsComponent,
    TaskCreateComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class TasksModule {}
