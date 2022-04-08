import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY, map, take } from 'rxjs';
import { Task } from './models/task';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root',
})
export class TasksResolverService implements Resolve<Task> {
  constructor(private tasksService: TasksService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return this.tasksService.getTask(id).pipe(
      catchError(() => {
        this.router.navigate(['/tasks']);
        return EMPTY;
      })
    );
  }
}
