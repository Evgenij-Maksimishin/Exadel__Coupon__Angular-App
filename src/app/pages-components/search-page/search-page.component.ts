import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {DealService} from '../../services/deal.service';
import {Deal} from '../../models/deal.model';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public searchText: string;

  public deals: Deal[];

  public favorites: any;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private route: ActivatedRoute,
    private dealService: DealService,
    private favoritesService: FavoritesService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params.query;

      this.favoritesService.getFavoriteDealIds().subscribe((data) => {
        this.favorites = data;
      });

      this.dealService.searchDeals(this.searchText, 20).subscribe((data) => {
        this.deals = data.elements;
      });
    });
  }
}
