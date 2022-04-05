import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let bearer = '';

    if (token) {
      bearer = `Bearer ${token}`;
    }

    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: bearer,
      },
    });
    return next.handle(req);
  }
}
