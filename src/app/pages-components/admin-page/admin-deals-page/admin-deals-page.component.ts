import {Component, OnInit, isDevMode, Inject} from '@angular/core';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import {CategoryService} from 'src/app/services/category.service';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {SubscriptionService} from 'src/app/services/subscription.service';
import {DealService} from '../../../services/deal.service';
import {VendorService} from '../../../services/vendor.service';
// import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-admin-deals-page',
  templateUrl: './admin-deals-page.component.html',
  styleUrls: ['./admin-deals-page.component.scss'],
})
export class AdminDealsPageComponent implements OnInit {
  public log: any;

  public success: string = 'success';

  public danger: string = 'danger';

  public timezone: number;

  public selectedTags: any[];

  public totalRecords: number;

  public dealDialog: boolean;

  public deals: any[];

  public vendors: any[];

  public categories: any[];

  public countries: any[];

  public cities: any[];

  public vendor_address: any[];

  public categoryNames: string[];

  public deal: any;

  public selectedDeals: any[];

  public submitted: boolean;

  public currentCategory: any;

  public currentVendor: any;

  public searchingMode: boolean;

  public deleteHeaderLabel: string;

  public deleteConfirmLabel: string;

  public SummaryLabel: string;

  public deleteDetailLabel: string;

  public createdDetailLabel: string;

  public updatedDetailLabel: string;

  public publishHeaderLabel: string;

  public publishConfirmLabel: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private dealService: DealService,
    private subscriptionService: SubscriptionService,
    private vendorService: VendorService,
    private confirmationService: ConfirmationService,
    private categoryService: CategoryService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.translation.onChange().subscribe(() => {
      this.deleteHeaderLabel = this.translation.translate('admin.dealPage.dialog.deleteHeader');
      this.deleteConfirmLabel = this.translation.translate('admin.dealPage.dialog.deleteConfirm');
      this.publishHeaderLabel = this.translation.translate('admin.dealPage.dialog.publishHeader');
      this.publishConfirmLabel = this.translation.translate('admin.dealPage.dialog.publishConfirm');
      this.SummaryLabel = this.translation.translate('admin.dealPage.messageService.Summary');
      this.deleteDetailLabel = this.translation.translate(
        'admin.dealPage.messageService.deleteDetail',
      );
      this.createdDetailLabel = this.translation.translate(
        'admin.dealPage.messageService.createdDetail',
      );
      this.updatedDetailLabel = this.translation.translate(
        'admin.dealPage.messageService.updatedDetail',
      );
    });
    this.selectedTags = [];
    this.timezone = new Date().getTimezoneOffset() * 60000;
    this.getAllVendors();
    this.getCategories();
    // this.updateDealsList(0);
  }

  getAllVendors() {
    this.vendorService.getAllVendorsForDeals().subscribe((data) => {
      this.vendors = data.elements;
    });
  }

  getVendor(vendorId: any) {
    this.vendorService.getVendor(vendorId).subscribe((data) => {
      this.vendor_address = data.locationResponses;
      this.vendor_address.map((item) => this.deal.locationsId.push(item.id));
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.elements;
    });
  }

  publishDeal(id: number) {
    if (id === 0) {
      this.submitted = true;
      this.deal.status = 'NEW';
      if (this.deal.description.trim() && this.deal.fullDescription.trim()) {
        this.deal.online = true;
        this.deal.tagsId = [];
        delete this.deal.id;
        this.deal.vendorId = this.currentVendor.id;
        this.deal.vendorName = this.currentVendor.name;
        this.deal.categoryId = this.currentCategory.id;
        this.deal.categoryName = this.currentCategory.name;
        this.selectedTags.map((item: any) => this.deal.tagsId.push(item));
        this.deal.dateBegin = new Date(Date.parse(this.deal.dateBegin) - this.timezone);
        this.deal.dateEnd = new Date(Date.parse(this.deal.dateEnd) - this.timezone);
        this.dealService.addDeal(JSON.stringify(this.deal)).subscribe((dataResponse) => {
          this.publishing(dataResponse.id);
        });
      }
    } else {
      this.publishing(id);
    }
  }

  publishing(id: number) {
    this.confirmationService.confirm({
      message: `${this.publishConfirmLabel}?`,
      header: this.publishHeaderLabel,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subscriptionService.publishEvent(id).subscribe((data) => {
          if (isDevMode()) console.log(data);
          this.updateDealsList(0);
          this.dealDialog = false;
        });
      },
    });
  }

  updateDealsList(page: number) {
    this.dealService.getAdminDeals(page).subscribe((data) => {
      this.deals = data.elements;
      this.totalRecords = data.totalElements;
    });
  }

  getSearchedString(searchedString: string) {
    this.dealService.searchAdminDeals(searchedString).subscribe((data) => {
      this.deals = data.elements;
      this.totalRecords = data.totalElements;
    });
  }

  clearDeal() {
    this.deal = {
      id: 0,
      description: '',
      fullDescription: '',
      vendorId: '',
      vendorName: '',
      categoryId: '',
      categoryName: '',
      dateBegin: '',
      dateEnd: '',
      tagsId: [],
      locationsId: [],
    };
  }

  openNew() {
    this.clearDeal();
    this.vendor_address = [];
    this.submitted = false;
    this.dealDialog = true;
  }

  deleteSelectedDeals() {
    this.confirmationService.confirm({
      message: `${this.deleteConfirmLabel}?`,
      header: this.deleteHeaderLabel,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deals = this.deals.filter((val) => !this.selectedDeals.includes(val));
        this.selectedDeals = [];
        this.messageService.add({
          severity: 'success',
          summary: this.SummaryLabel,
          detail: this.deleteDetailLabel,
          life: 3000,
        });
      },
    });
  }

  editDeal(deal: any) {
    this.deal = {...deal};
    this.deal.tagsId = [];
    this.deal.locationsId = [];
    this.deal.vendorName = this.vendors.find((x) => x.id === this.deal.vendorId);
    this.getVendor(this.deal.vendorId);
    this.deal.categoryName = this.categories.find((x) => x.id === this.deal.categoryId);
    this.deal.categoryName.tags.map((item: any) => this.deal.tagsId.push(item));
    this.deal.tags.map((item: any) => this.selectedTags.push(item.id));
    this.deal.dateBegin = new Date(Date.parse(this.deal.dateBegin));
    this.deal.dateEnd = new Date(Date.parse(this.deal.dateEnd));
    this.dealDialog = true;
  }

  deleteDeal(deal: any) {
    this.confirmationService.confirm({
      message: `${this.deleteConfirmLabel}?`,
      header: this.deleteHeaderLabel,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dealService.deleteDeal(deal.id).subscribe({
          next: (data) => {
            this.updateDealsList(0);
            this.log = data;
          },
          error: (error) => {
            this.log = error.message;
          },
        });
        this.deals = this.deals.filter((val) => val.id !== deal.id);
        this.clearDeal();
        this.messageService.add({
          severity: 'success',
          summary: this.SummaryLabel,
          detail: this.deleteDetailLabel,
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.dealDialog = false;
    this.submitted = false;
  }

  saveDeal(status: string) {
    this.submitted = true;
    this.deal.status = status;
    if (this.deal.description.trim() && this.deal.fullDescription.trim()) {
      this.deal.online = true;
      this.deal.tagsId = [];
      if (this.deal.id === 0) {
        delete this.deal.id;
        this.deal.vendorId = this.currentVendor.id;
        this.deal.vendorName = this.currentVendor.name;
        this.deal.categoryId = this.currentCategory.id;
        this.deal.categoryName = this.currentCategory.name;
        this.selectedTags.map((item: any) => this.deal.tagsId.push(item));
        this.deal.dateBegin = new Date(Date.parse(this.deal.dateBegin) - this.timezone);
        this.deal.dateEnd = new Date(Date.parse(this.deal.dateEnd) - this.timezone);
        this.dealService.addDeal(JSON.stringify(this.deal)).subscribe((dataResponse) => {
          if (isDevMode()) console.log(dataResponse);
          this.messageService.add({
            severity: 'success',
            summary: this.SummaryLabel,
            detail: this.createdDetailLabel,
            life: 3000,
          });
          this.updateDealsList(0);
        });
      } else {
        delete this.deal.locations;
        delete this.deal.tags;
        delete this.deal.vendorName;
        this.selectedTags.map((item: any) => this.deal.tagsId.push(item));
        delete this.deal.categoryName;
        this.deal.dateBegin = new Date(Date.parse(this.deal.dateBegin) - this.timezone);
        this.deal.dateEnd = new Date(Date.parse(this.deal.dateEnd) - this.timezone);
        if (isDevMode()) console.log(this.deal);
        this.dealService
          .updateDeal(this.deal.id, JSON.stringify(this.deal))
          .subscribe((dataResponse) => {
            if (isDevMode()) console.log(dataResponse);
            this.messageService.add({
              severity: 'success',
              summary: this.SummaryLabel,
              detail: this.updatedDetailLabel,
              life: 3000,
            });
            this.updateDealsList(0);
          });
      }
      this.selectedTags = [];
      this.dealDialog = false;
      this.clearDeal();
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.deals.length; i += 1) {
      if (this.deals[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  tagChanged(event: any, tag: number) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  categoryChanged(currentCategory: any) {
    this.selectedTags = [];
    this.currentCategory = currentCategory;
    this.deal.categoryId = this.currentCategory.id;
    this.deal.tagsId = currentCategory.tags;
  }

  vendorChanged(currentVendor: any) {
    this.currentVendor = currentVendor;
    this.deal.vendorId = this.currentVendor.id;
    this.deal.locationsId = [];
    this.getVendor(currentVendor.id);
  }

  loadCustomers(event: LazyLoadEvent) {
    this.updateDealsList(event.first! / event.rows!);
  }

  onSearchChange(event: any): void {
    console.log('setNewUserName', event.target.value);
    if (event.target.value !== '') {
      this.searchingMode = true;
      this.getSearchedString(event.target.value);
    } else {
      this.searchingMode = false;
      this.updateDealsList(0);
    }
  }
}
