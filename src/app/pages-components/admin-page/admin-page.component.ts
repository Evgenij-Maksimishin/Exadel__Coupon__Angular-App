import {Component, Inject, OnInit} from '@angular/core';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  public isAdmin = false;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUserValue;
    if (currentUser.role === 'ADMIN') {
      this.isAdmin = true;
    }
  }
}
