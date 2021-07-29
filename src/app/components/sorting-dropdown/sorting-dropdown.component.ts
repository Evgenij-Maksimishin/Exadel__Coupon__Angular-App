import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';

export enum SortingType {
  Sorting = 'sorting',
  Status = 'status',
}

interface Sorting {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-sorting-dropdown',
  template: ` <p-dropdown
    [options]="sortingOptions"
    [(ngModel)]="sorting"
    placeholder="{{ 'sorting.hot' | translate: locale.language }}"
    optionLabel="label"
    (onChange)="sortingChange()"
  >
  </p-dropdown>`,
  styles: [
    `
      :host ::ng-deep .p-dropdown {
        width: 280px;
      }
    `,
  ],
})
export class SortingDropdownComponent implements OnInit {
  public sortingOptions: Sorting[];

  public sorting: Sorting;

  @Output() selectedSorting = new EventEmitter<Sorting>();

  private hotLabel: string;

  private newestLabel: string;

  private popularLabel: string;

  private permanentLabel: string;

  private comingSoonLabel: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
  ) {}

  ngOnInit() {
    this.translation.onChange().subscribe(() => {
      this.hotLabel = this.translation.translate('sorting.hot');
      this.newestLabel = this.translation.translate('sorting.newest');
      this.popularLabel = this.translation.translate('sorting.popular');
      this.permanentLabel = this.translation.translate('sorting.permanent');
      this.comingSoonLabel = this.translation.translate('sorting.comingSoon');
    });

    this.sortingOptions = [
      {
        id: 'HOTTEST',
        label: this.hotLabel,
        type: SortingType.Sorting,
      },
      {
        id: 'NEWEST',
        label: this.newestLabel,
        type: SortingType.Sorting,
      },
      {
        id: 'POPULAR',
        label: this.popularLabel,
        type: SortingType.Sorting,
      },
      /* {
        id: 'PERPETUAL',
        label: this.permanentLabel,
        type: SortingType.Status,
      },
      {
        id: 'COMING_SOON',
        label: this.comingSoonLabel,
        type: SortingType.Status,
      }, */
    ];
  }

  public sortingChange() {
    this.selectedSorting.emit(this.sorting);
  }
}
