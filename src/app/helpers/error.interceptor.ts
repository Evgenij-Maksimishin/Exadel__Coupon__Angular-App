import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AuthService} from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          if (!this.router.url.includes('/login')) {
            // auto logout if 401 response returned from api when user is NOT on login page
            this.authenticationService.logout();
            this.router.navigate(['/login'], {
              queryParams: {returnUrl: this.router.routerState.snapshot.url},
            });
          }
          console.log(err);
        }

        if (err.status === 403) {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `You are not authorized.`,
          });
        }

        if (err.status === 500) {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `Unexpected server error.`,
          });
        }

        if (err.status === 404) {
          this.router.navigate(['/404']);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }),
    );
  }
}
