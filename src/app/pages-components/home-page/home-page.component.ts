import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {Location} from '@angular/common';
import {Deal} from '../../models/deal.model';
import {DealService} from '../../services/deal.service';
import {FilterMenuComponent} from '../../components/filter-menu/filter-menu.component';
import {
  SortingDropdownComponent,
  SortingType,
} from '../../components/sorting-dropdown/sorting-dropdown.component';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(FilterMenuComponent) filters: FilterMenuComponent;

  @ViewChild(SortingDropdownComponent) sorting: SortingDropdownComponent;

  public filtersState: any = {};

  public isLoading: boolean = true;

  public deals: Deal[];

  public totalPages: number;

  public currentPage = 0;

  public favorites: number[];

  public queryParams: any;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dealService: DealService,
    private favoritesService: FavoritesService,
  ) {}

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;

      this.loadDeals();
    });
  }

  private loadDeals(): void {
    this.favoritesService.getFavoriteDealIds().subscribe((dealIds) => {
      this.favorites = dealIds;
      this.dealService.getDeals(this.filtersState, this.currentPage).subscribe((data) => {
        if (this.currentPage > 0) {
          this.deals = [...this.deals, ...data.elements];
        } else {
          this.deals = data.elements;
        }

        this.totalPages = data.totalPages;
        this.isLoading = false;
      });
    });
  }

  public handleLoadMore(): void {
    this.currentPage += 1;
    this.loadDeals();
  }

  public applyFilters(): void {
    this.filtersState = {...this.filters.filtersState};

    if (this.sorting.sorting?.id) {
      if (this.sorting.sorting.type === SortingType.Sorting) {
        this.filtersState.sortingType = this.sorting.sorting.id; // if it is a sorting type
      } else {
        this.filtersState.status = this.sorting.sorting.id; // or it is a status
      }
    } else {
      this.filtersState.sortingType = 'HOTTEST';
    }

    this.updateParams(this.filtersState);

    this.deals = [];
    this.isLoading = true;
    this.currentPage = 0;

    this.loadDeals();
  }

  private updateParams(state: any): void {
    console.log(state);
    const params = {}; // TODO: Handle location

    if (state.categoriesIdSet) {
      // @ts-ignore
      // eslint-disable-next-line prefer-destructuring
      params.category = JSON.stringify(state.categoriesIdSet[0]);
    }

    if (state.vendorsIdSet) {
      // @ts-ignore
      params.vendors = JSON.stringify(state.vendorsIdSet);
    }

    if (state.tagsIdSet) {
      // @ts-ignore
      params.tags = JSON.stringify(state.tagsIdSet);
    }

    const url = this.router
      .createUrlTree([], {relativeTo: this.route, queryParams: params})
      .toString();

    this.location.go(url);
  }
}
