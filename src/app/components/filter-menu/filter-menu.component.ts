import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {Category} from '../../models/category.model';
import {Vendor} from '../../models/vendor.model';
import {FilterService} from '../../services/filter.service';

interface CountryCity {
  id: number;
  name: string;
  country: boolean;
  checked: boolean;
}

interface Tag {
  id: number;
  name: string;
  checked?: boolean;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();

  private _params: any;

  @Input()
  public set params(value: any) {
    // eslint-disable-next-line no-underscore-dangle
    this._params = value;
    setTimeout(() => this.filtersChanged.emit(), 500); // TODO: Rework
  }

  public get params(): any {
    // eslint-disable-next-line no-underscore-dangle
    return this._params;
  }

  public locations: CountryCity[];

  public selectedLocation!: CountryCity;

  public categories: Category[];

  public selectedCategory!: Category;

  public tags: Tag[];

  public selectedTags!: Tag[];

  public vendors: Vendor[];

  public selectedVendors!: Vendor[];

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private filterService: FilterService,
  ) {}

  ngOnInit() {
    this.filterService.updateFilters({main: ''}).subscribe((data) => this.updateFiltersState(data));
  }

  private selectFilters(params: any): any {
    console.log(params);
    if (params.location) {
      this.selectLocation(+params.location, params.isCountry === 'true');
    }

    if (params.category) {
      this.selectCategory(+params.category);
    }

    if (params.tags) {
      this.selectTags(JSON.parse(params.tags));
    }

    if (params.vendors) {
      this.selectVendors(JSON.parse(params.vendors));
    }
  }

  public updateFiltersState(state: any) {
    if (state.locations != null) this.locations = state.locations;
    if (state.categories != null) this.categories = state.categories;
    this.categories.forEach((category) => {
      if (category.checked) {
        this.selectedCategory = {...category};
      }
    });
    const selectedTags: Tag[] = [];
    this.tags = state.tags;
    this.tags.forEach((tag) => {
      if (tag.checked) {
        selectedTags.push(tag);
      }
    });
    this.selectedTags = [...selectedTags];
    if (state.vendors != null) this.vendors = state.vendors;

    this.selectFilters(this.params);
  }

  public handleLocationSelect() {
    let state;
    if (this.selectedCategory?.id === 0) {
      state = {
        locationId: this.selectedLocation.id,
        isCountry: this.selectedLocation.country,
        main: 'location',
      };
    } else {
      state = {
        locationId: this.selectedLocation.id,
        isCountry: this.selectedLocation.country,
        categories: [this.selectedCategory],
        main: 'location',
      };
    }
    this.filterService.updateFilters(state).subscribe((data) => {
      this.updateFiltersState(data);
      this.filtersChanged.emit();
    });
  }

  public handleCategorySelect() {
    if (this.selectedCategory.id === 0) {
      return;
    }
    let state;
    if (this.selectedLocation !== undefined) {
      state = {
        locationId: this.selectedLocation.id,
        isCountry: this.selectedLocation.country,
        categories: [this.selectedCategory.id],
        main: 'categories',
      };
    } else {
      state = {
        categories: [this.selectedCategory.id],
        main: 'categories',
      };
    }
    this.filterService.updateFilters(state).subscribe((data) => {
      this.updateFiltersState(data);
      this.filtersChanged.emit();
    });
  }

  public get filtersState(): any {
    const state = {};

    if (this.selectedLocation?.id !== undefined) {
      // @ts-ignore
      state.locationId = this.selectedLocation.id;
      // @ts-ignore
      state.city = !this.selectedLocation.country;
    }

    if (this.selectedCategory?.id !== undefined) {
      // @ts-ignore
      state.categoriesIdSet = [this.selectedCategory.id];
    }

    if (this.selectedTags !== undefined && this.selectedTags.length > 0) {
      const tagsId = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const tag of this.selectedTags) {
        tagsId.push(tag.id);
      }
      // @ts-ignore
      state.tagsIdSet = [...tagsId];
    }

    if (this.selectedVendors !== undefined && this.selectedVendors.length > 0) {
      const vendorsId = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const vendor of this.selectedVendors) {
        vendorsId.push(vendor.id);
      }
      // @ts-ignore
      state.vendorsIdSet = [...vendorsId];
    }

    return state;
  }

  public selectLocation(id: number, isCountry: boolean): void {
    this.locations.forEach((loc) => {
      if (loc.id === id && loc.country === isCountry) {
        this.selectedLocation = loc;
      }
    });
  }

  public selectCategory(id: number): void {
    this.categories.forEach((category) => {
      if (category.id === id) {
        this.selectedCategory = category;
      }
    });
  }

  public selectTags(tags: number[]): void {
    const selectedTags: Tag[] = [];
    tags.forEach((tagId) => {
      this.tags.forEach((tag) => {
        if (tag.id === tagId) {
          selectedTags.push(tag);
        }
      });
    });
    if (selectedTags.length > 0) this.selectedTags = [...selectedTags];
  }

  public selectVendors(vendors: number[]): void {
    const selectedVendors: Vendor[] = [];
    vendors.forEach((vendorId) => {
      this.vendors.forEach((vendor) => {
        if (vendor.id === vendorId) {
          selectedVendors.push(vendor);
        }
      });
    });
    if (selectedVendors.length > 0) this.selectedVendors = [...selectedVendors];
  }
}
