import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;

    if (currentUser.role === 'ADMIN') return true;

    this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
