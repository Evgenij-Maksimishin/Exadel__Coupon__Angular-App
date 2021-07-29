/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

import {Component, isDevMode, OnInit, ViewChild, Inject} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {VendorService} from '../../../services/vendor.service';
import {CountryService} from '../../../services/country.service';

@Component({
  selector: 'app-admin-vendors-page',
  templateUrl: './admin-vendors-page.component.html',
  styleUrls: ['./admin-vendors-page.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdminVendorsPageComponent implements OnInit {
  public vendorDialog: boolean;

  public vendors: Array<any> = [];

  public vendor: any = {};

  public submitted: boolean;

  public countries: Array<any> = [];

  public locations: Array<any> = [];

  public vendorId: number;

  public deleteHeaderLabel: string;

  public deleteConfirmLabel: string;

  public summaryLabel: string;

  public deleteDetailLabel: string;

  public createdDetailLabel: string;

  public updatedDetailLabel: string;

  @ViewChild('dt') dt: any;

  public options: any = {
    types: ['address'],
    componentRestrictions: {country: ['ua', 'pl', 'by', 'us', 'de', 'ru']},
  };

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private countryService: CountryService,
    private vendorService: VendorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.translation.onChange().subscribe(() => {
      this.deleteHeaderLabel = this.translation.translate('admin.vendorPage.dialog.deleteHeader');
      this.deleteConfirmLabel = this.translation.translate('admin.vendorPage.dialog.deleteConfirm');
      this.summaryLabel = this.translation.translate('admin.vendorPage.messageService.summary');
      this.deleteDetailLabel = this.translation.translate(
        'admin.vendorPage.messageService.deleteDetail',
      );
      this.createdDetailLabel = this.translation.translate(
        'admin.vendorPage.messageService.createdDetail',
      );
      this.updatedDetailLabel = this.translation.translate(
        'admin.vendorPage.messageService.updatedDetail',
      );
    });

    this.getVendors();
    this.getCountries();
  }

  public getVendors(): void {
    this.vendorService.getAllVendors().subscribe((data: any) => {
      this.vendors = data.elements;
    });
  }

  public getVendor(id: number): void {
    this.vendorService.getVendor(id).subscribe((data: any) => {
      this.vendor = data;
      this.locations = data.locationResponses;
    });
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  public getCities(item: any): void {
    if (item.country) {
      this.countries.forEach((country) => {
        if (country.name === item.country.name) {
          item.cities = country.cities;
        }
      });
    }
  }

  public addLocation(): void {
    this.locations.push({});
  }

  public deleteLocation(index: number): void {
    this.locations.splice(index, 1);
  }

  public openNew(): void {
    this.vendor = {};
    this.submitted = false;
    this.vendorDialog = true;
    this.locations = [];
  }

  public editVendor($event: any): void {
    this.getVendor($event.currentTarget.id);
    this.vendorDialog = true;
  }

  public deleteVendor(vendor: any): void {
    this.confirmationService.confirm({
      message: `${this.deleteConfirmLabel}`,
      header: this.deleteHeaderLabel,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vendorService.deleteVendor(vendor.id).subscribe((response) => {
          if (isDevMode()) console.log(response);
          this.getVendors();
        });
        this.vendor = {};
        this.messageService.add({
          severity: 'success',
          summary: this.summaryLabel,
          detail: this.deleteDetailLabel,
          life: 3000,
        });
      },
    });
  }

  public hideDialog(): void {
    this.vendorDialog = false;
    this.submitted = false;
  }

  public saveVendor($event: MouseEvent): void {
    this.submitted = true;
    $event.preventDefault();

    if (this.vendor.name.trim()) {
      if (this.vendor.id) {
        this.updateDataForPut();
        this.vendorService
          .updateVendor(JSON.stringify(this.vendor), this.vendorId)
          .subscribe(() => {
            this.vendorService.getAllVendors().subscribe((data) => {
              this.vendors = data.elements;
            });
          });
        this.messageService.add({
          severity: 'success',
          summary: this.summaryLabel,
          detail: this.updatedDetailLabel,
          life: 3000,
        });
      } else {
        this.updateDataForPost();
        this.vendorService.addVendor(JSON.stringify(this.vendor)).subscribe(() => {
          this.vendorService.getAllVendors().subscribe((data) => {
            this.vendors = data.elements;
          });
        });
        this.messageService.add({
          severity: 'success',
          summary: this.summaryLabel,
          detail: this.createdDetailLabel,
          life: 3000,
        });
      }
    }
    this.vendorDialog = false;
    this.vendor = {
      name: '',
      id: '',
      description: '',
      email: '',
      phoneNumber: '',
      locationResponses: [],
    };
  }

  public updateDataForPut(): void {
    this.vendor.locationRequests = this.locations;
    this.vendorId = this.vendor.id;
    delete this.vendor.locationResponses;
    delete this.vendor.id;
    this.vendor.locationRequests.forEach((location: any) => {
      delete location.country;
      delete location.cities;
      location.cityId = location.city.id;
      delete location.city;
    });
  }

  public updateDataForPost(): void {
    this.vendor.locationRequests = this.locations;
    this.vendor.locationRequests.forEach((location: any) => {
      delete location.country;
      delete location.cities;
      location.cityId = location.city.id;
      delete location.city;
    });
  }

  public applyFilterGlobal($event: any, stringVal: string): void {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  public handleAddressChange(address: Address, item: any): void {
    console.log(address);
    const components = address.address_components;

    item.street = components[1].long_name;
    item.number = components[0].long_name;
    // eslint-disable-next-line no-restricted-syntax
    for (const country of this.countries) {
      // eslint-disable-next-line no-restricted-syntax
      for (const city of country.cities) {
        if (city.name === components[components.length - 4].long_name) {
          item.city = {
            id: city.id,
          };
          break;
        }
      }
    }
    item.latitude = address.geometry.location.lat();
    item.longitude = address.geometry.location.lng();

    console.log(item);
  }
}
