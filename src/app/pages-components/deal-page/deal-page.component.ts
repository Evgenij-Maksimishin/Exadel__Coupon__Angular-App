import {Component, OnInit, Inject} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {Vendor} from '../../models/vendor.model';
import {Deal} from '../../models/deal.model';
import {DealService} from '../../services/deal.service';
import {VendorService} from '../../services/vendor.service';
import {OrdersService} from '../../services/orders.service';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-deal-page',
  templateUrl: './deal-page.component.html',
  styleUrls: ['./deal-page.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class DealPageComponent implements OnInit {
  public id: number;

  public deal: Deal;

  public locations: any;

  public tags: Array<any>;

  public vendor: Vendor;

  public addedToFavorites: boolean;

  public addedToOrders: boolean;

  public options: any;

  public overlays: any[];

  public summaryLabel: string;

  public addedToFavoritesLabel: string;

  public removedFromFavoritesLabel: string;

  public addedToOrdersLabel: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dealService: DealService,
    private vendorService: VendorService,
    private favoritesService: FavoritesService,
    private ordersService: OrdersService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.translation.onChange().subscribe(() => {
      this.summaryLabel = this.translation.translate('deal.messageService.summary');
      this.addedToFavoritesLabel = this.translation.translate(
        'deal.messageService.addedToFavorites',
      );
      this.removedFromFavoritesLabel = this.translation.translate(
        'deal.messageService.removedFromFavorites',
      );
      this.addedToOrdersLabel = this.translation.translate('deal.messageService.addedToOrders');
    });

    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.dealService.getDeal(this.id).subscribe((data: Deal) => {
      this.deal = data;
      this.locations = this.deal.locations;
      this.tags = this.deal.tags;

      this.vendorService.getVendor(this.deal.vendorId).subscribe((response: Vendor) => {
        this.vendor = response;
      });

      this.favoritesService.getFavoriteDealIds().subscribe((answer: Array<any>) => {
        if (answer.includes(this.deal.id)) {
          this.addedToFavorites = true;
        }
      });

      this.ordersService.getOrderedDeals().subscribe((answer: Array<any>) => {
        answer.forEach((item: any) => {
          if (item.id === this.deal.id) {
            this.addedToOrders = true;
          }
        });
      });

      const overlays: any[] = [];
      // @ts-ignore
      this.locations.forEach((location) => {
        overlays.push(
          // @ts-ignore
          new google.maps.Marker({
            position: {lat: location.latitude, lng: location.longitude},
            title: `${location.street}, ${location.number}`,
          }),
        );
      });
      this.overlays = [...overlays];

      this.options = {
        center: {lat: this.locations[0].latitude, lng: this.locations[0].longitude},
        zoom: 15,
      };
    });
  }

  public addToFavorites(): void {
    if (this.addedToFavorites) {
      this.favoritesService.removeDealFromFavorites(this.deal.id).subscribe((response) => {
        return response;
      });
      this.addedToFavorites = false;
      this.messageService.add({
        severity: 'success',
        summary: this.summaryLabel,
        detail: this.removedFromFavoritesLabel,
        life: 3000,
      });
    } else {
      this.favoritesService.addDealToFavorites(this.deal.id).subscribe((response) => {
        return response;
      });
      this.addedToFavorites = true;
      this.messageService.add({
        severity: 'success',
        summary: this.summaryLabel,
        detail: this.addedToFavoritesLabel,
        life: 3000,
      });
    }
  }

  public addToOrders(id: number): void {
    this.ordersService.addDealToOrders(id).subscribe((response) => {
      return response;
    });
    this.addedToOrders = true;
    this.messageService.add({
      severity: 'success',
      summary: this.summaryLabel,
      detail: this.addedToOrdersLabel,
      life: 3000,
    });
  }
}
