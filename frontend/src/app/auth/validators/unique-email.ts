import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { map, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      map((value) => {
        if (!value) {
          return null;
        }
      }),
      catchError((err) => {
        if (err.error) {
          return of({ nonUniqueEmail: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
