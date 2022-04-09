import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'tasks',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./tasks/tasks.module').then((mod) => mod.TasksModule),
  },
  {
    path: 'profile',
    canLoad: [AuthGuard],
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
