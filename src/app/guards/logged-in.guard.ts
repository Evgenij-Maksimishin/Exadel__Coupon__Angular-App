import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  // THIS IS REVERTED AuthGuard TO PROTECT LOGIN PAGE!
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    const currentUser = this.authService.currentUserValue;
    if (!currentUser) return true; // if not logged in - return true

    // if logged in - redirect to home page
    this.router.navigate(['/']);
    return false;
  }
}
