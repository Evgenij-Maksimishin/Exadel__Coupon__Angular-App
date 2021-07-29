import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {AuthService} from '../../services/auth.service';
import {UserRole} from '../../models/user-role.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];

  private profileLabel: string;

  private favoritesLabel: string;

  private historyLabel: string;

  private adminLabel: string;

  private signOutLabel: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUserValue;

    this.translation.onChange().subscribe(() => {
      this.profileLabel = this.translation.translate('header.profile');
      this.favoritesLabel = this.translation.translate('header.favorites');
      this.historyLabel = this.translation.translate('header.history');
      this.adminLabel = this.translation.translate('header.admin');
      this.signOutLabel = this.translation.translate('header.signOut');
    });

    this.items = [
      {label: this.profileLabel, icon: 'pi pi-fw pi-id-card', routerLink: '/profile'},
      {label: this.favoritesLabel, icon: 'pi pi-fw pi-heart', routerLink: '/favorites'},
      {label: this.historyLabel, icon: 'pi pi-fw pi-book', routerLink: '/orders'},
      {
        label: this.signOutLabel,
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this.signOut();
        },
      },
    ];

    if (currentUser.role === UserRole.Admin || currentUser.role === UserRole.Moderator) {
      this.items.splice(3, 0, {
        label: this.adminLabel,
        icon: 'pi pi-fw pi-shield',
        routerLink: '/admin/deals',
      });
    }
  }

  // TODO: Get real profile pic or return default placeholder
  // eslint-disable-next-line class-methods-use-this
  public get profilePic(): string {
    return '../../../assets/images/avatar-placeholder.png';
  }

  public signOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
