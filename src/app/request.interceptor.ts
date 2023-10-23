import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newrequest = request.clone({
      headers: request.headers.set('correlation-ID', crypto.randomUUID()),
    });
    console.log(newrequest);
    return next.handle(newrequest);
  }
}
