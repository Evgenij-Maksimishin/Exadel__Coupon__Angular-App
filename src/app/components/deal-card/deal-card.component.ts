import {Component, Inject, Input, isDevMode} from '@angular/core';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {Deal} from '../../models/deal.model';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-deal-card',
  templateUrl: 'deal-card.component.html',
  styleUrls: ['deal-card.component.scss'],
})
export class DealCardComponent {
  @Input() deal: Deal;

  @Input() addedToFavorites: boolean = false;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private favoritesService: FavoritesService,
  ) {}

  public addToFavorites() {
    this.addedToFavorites = !this.addedToFavorites;
  }

  public handleAddToFavorites() {
    if (isDevMode()) console.log(this.deal.id);
    this.favoritesService.addDealToFavorites(this.deal.id).subscribe((data) => {
      if (isDevMode()) console.log(data);
      this.addedToFavorites = true;
    });
  }

  public handleRemoveFromFavorites() {
    this.favoritesService.removeDealFromFavorites(this.deal.id).subscribe((data) => {
      if (isDevMode()) console.log(data);
      this.addedToFavorites = false;
    });
  }
}
