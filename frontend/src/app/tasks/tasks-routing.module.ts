import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { TasksHomeComponent } from './tasks-home/tasks-home.component';
import { TasksResolverService } from './tasks-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TasksHomeComponent,
    children: [
      {
        path: ':id',
        component: TasksDetailsComponent,
        resolve: { task: TasksResolverService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
