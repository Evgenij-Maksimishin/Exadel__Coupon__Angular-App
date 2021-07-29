import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {Router} from '@angular/router';
import {DealService} from '../../services/deal.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchMenu') searchMenu: any;

  public searchItems: any[];

  public searchText: string;

  private noResultsLabel: string;

  private seeAllLabel: string;

  private inTotalLabel: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private dealService: DealService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.translation.onChange().subscribe(() => {
      this.noResultsLabel = this.translation.translate('search.noResults');
      this.seeAllLabel = this.translation.translate('search.seeAll');
      this.inTotalLabel = this.translation.translate('search.inTotal');
    });
  }

  private formatSearchResults(data: any) {
    const searchItems: any[] = [];
    if (data?.elements.length === 0) {
      searchItems.push({
        label: this.noResultsLabel,
        items: [],
      });
      this.searchItems = [...searchItems];
    } else {
      data.elements.forEach((element: any) => {
        searchItems.push({
          label: element.shortDescription,
          command: () => {
            this.router.navigateByUrl(`deal/${element.id}`);
          },
        });
      });
      searchItems.push({
        label: `${this.seeAllLabel} (${data.elements.length} ${this.inTotalLabel})`,
        command: () => {
          this.router.navigateByUrl(`/search?query=${this.searchText}`);
        },
      });
      this.searchItems = [...searchItems];
    }
  }

  public onSearch(event: any) {
    if (event.length < 2) {
      this.searchMenu.hide(event);
    } else {
      this.dealService.searchDeals(event).subscribe((data) => {
        this.formatSearchResults(data);
        this.searchMenu.show(event);
      });
    }
  }
}
