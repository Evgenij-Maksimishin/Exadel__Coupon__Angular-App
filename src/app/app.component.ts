import {Component, Inject, isDevMode, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  L10N_CONFIG,
  L10nConfig,
  L10N_LOCALE,
  L10nLocale,
  L10nTranslationService,
} from 'angular-l10n';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public noFooterPages = [
    '/admin',
    '/admin/vendors',
    '/admin/deals',
    '/admin/categories',
    '/admin/statistics',
  ];

  schema = this.l10nConfig.schema;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    private translation: L10nTranslationService,
    public authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit() {
    if (isDevMode()) {
      this.translation.onChange().subscribe({
        next: (locale: L10nLocale) => {
          console.log(locale);
          console.log(this.translation.data);
        },
      });
    }

    this.translation.onError().subscribe({
      next: (error: any) => {
        if (error) console.log(error);
      },
    });
  }

  setLocale(locale: L10nLocale): void {
    this.translation.setLocale(locale);
  }
}
