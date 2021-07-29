import {Component, OnInit, Inject} from '@angular/core';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';
import {Deal} from '../../models/deal.model';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.scss'],
})
export class OrderHistoryPageComponent implements OnInit {
  public deals: Deal[];

  cols: any[];

  noMobile: boolean = true;

  pages: number;

  public sortByOrderDateClick: boolean;

  public sortByEndDateClick: boolean;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private ordersService: OrdersService,
  ) {}

  ngOnInit(): void {
    /* if (window.screen.width <= 640) {
      this.noMobile = false;
    } */

    this.pages = 1;

    this.ordersService.getOrderedDeals().subscribe((data) => {
      this.deals = data;
    });

    /* this.deals.sort((b, a) => new Date(b.startDate!).getTime() - new Date(a.startDate!).getTime()); */
  }

  sortByOrderDate() {
    if (!this.sortByOrderDateClick) {
      this.deals.sort(
        (b, a) => new Date(b.gettingDate!).getTime() - new Date(a.gettingDate!).getTime(),
      );
      this.sortByOrderDateClick = true;
    } else {
      this.deals.sort(
        (b, a) => new Date(a.gettingDate!).getTime() - new Date(b.gettingDate!).getTime(),
      );
      this.sortByOrderDateClick = false;
    }
  }

  sortByEndDate() {
    if (!this.sortByEndDateClick) {
      this.deals.sort((b, a) => new Date(b.dateEnd!).getTime() - new Date(a.dateEnd!).getTime());
      this.sortByEndDateClick = true;
    } else {
      this.deals.sort((b, a) => new Date(a.dateEnd!).getTime() - new Date(b.dateEnd!).getTime());
      this.sortByEndDateClick = false;
    }
  }
}
