import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {DatePipe} from '@angular/common';
import * as fileSaver from 'file-saver';
import {MessageService} from 'primeng/api';
import {StatisticsService} from '../../../services/statistics.service';

interface DealStatisticsInterface {
  name: string;
  value: number;
}

@Component({
  selector: 'app-admin-statistics-page',
  templateUrl: './admin-statistics-page.component.html',
  styleUrls: ['./admin-statistics-page.component.scss'],
  providers: [MessageService],
})
export class AdminStatisticsPageComponent implements OnInit {
  public rangeDates: Date[];

  private dateBegin: Date;

  private dateEnd: Date;

  public dealPageViews: DealStatisticsInterface[] = [];

  public dealCouponOrders: DealStatisticsInterface[] = [];

  public dealsAddedToFavorites: DealStatisticsInterface[] = [];

  public todayDate = new Date();

  public colorSchemeOne = {
    domain: ['#006837', '#31a354', '#78c679', '#c2e699', '#ffffcc'],
  };

  public colorSchemeTwo = {
    domain: ['#a50f15', '#de2d26', '#fb6a4a', '#fcae91', '#fee5d9'],
  };

  public colorSchemeThree = {
    domain: ['#54278f', '#756bb1', '#9e9ac8', '#cbc9e2', '#f2f0f7'],
  };

  public deals: string;

  public views: string;

  public buys: string;

  public favorites: string;

  public legendPosition: any = 'below';

  private fileName: string;

  @ViewChild('calendar') private calendar: any;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private datePipe: DatePipe,
    private statisticsService: StatisticsService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.deals = this.translation.translate('admin.statistics.deals');
    this.views = this.translation.translate('admin.statistics.views');
    this.buys = this.translation.translate('admin.statistics.buys');
    this.favorites = this.translation.translate('admin.statistics.favorites');
    const dateEnd = new Date();
    const dateBegin = new Date();
    dateBegin.setDate(dateEnd.getDate() - 30);
    this.rangeDates = [dateBegin, dateEnd];
    const dateBeginTransformed = this.datePipe.transform(dateBegin, 'yyyy-MM-dd');
    const dateEndTransformed = this.datePipe.transform(dateEnd, 'yyyy-MM-dd');
    this.loadViewedDealsStatistics(dateBeginTransformed, dateEndTransformed);
    this.loadOrderedDealsStatistics(dateBeginTransformed, dateEndTransformed);
    this.loadFavoredDealsStatistics(dateBeginTransformed, dateEndTransformed);
  }

  public onSelect() {
    if (this.rangeDates[1]) {
      this.calendar.overlayVisible = false;
    }
  }

  public handleDatesSelect() {
    [this.dateBegin, this.dateEnd] = this.rangeDates;
    if (!this.rangeDates[1]) {
      this.messageService.add({
        severity: 'error',
        detail: this.translation.translate('admin.statistics.errorDetailOne'),
      });
      return;
    }
    const dateBeginTransformed = this.datePipe.transform(this.dateBegin, 'yyyy-MM-dd');
    const dateEndTransformed = this.datePipe.transform(this.dateEnd, 'yyyy-MM-dd');
    if (dateEndTransformed === dateBeginTransformed) {
      this.messageService.add({
        severity: 'error',
        detail: this.translation.translate('admin.statistics.errorDetailTwo'),
      });
      return;
    }
    this.loadViewedDealsStatistics(dateBeginTransformed, dateEndTransformed);
    this.loadOrderedDealsStatistics(dateBeginTransformed, dateEndTransformed);
    this.loadFavoredDealsStatistics(dateBeginTransformed, dateEndTransformed);
    this.messageService.add({
      severity: 'success',
      detail: this.translation.translate('admin.statistics.successDetail'),
    });
  }

  private loadViewedDealsStatistics(dateBegin: any, dateEnd: any) {
    this.statisticsService.getViewedDeals(dateBegin, dateEnd).subscribe((deals: any[]) => {
      this.dealPageViews.length = 0;
      deals.forEach((deal) => {
        const chartItem = {
          name: `${deal.eventDescription} (${deal.vendorName})`,
          value: deal.count,
        };
        this.dealPageViews.push(chartItem);
      });
      this.dealPageViews = [...this.dealPageViews];
    });
  }

  private loadOrderedDealsStatistics(dateBegin: any, dateEnd: any) {
    this.statisticsService.getOrderedDeals(dateBegin, dateEnd).subscribe((deals: any[]) => {
      this.dealCouponOrders.length = 0;
      deals.forEach((deal) => {
        const chartItem = {
          name: `${deal.eventDescription} (${deal.vendorName})`,
          value: deal.count,
        };
        this.dealCouponOrders.push(chartItem);
      });
      this.dealCouponOrders = [...this.dealCouponOrders];
    });
  }

  private loadFavoredDealsStatistics(dateBegin: any, dateEnd: any) {
    this.statisticsService.getFavoredDeals(dateBegin, dateEnd).subscribe((deals: any[]) => {
      this.dealsAddedToFavorites.length = 0;
      deals.forEach((deal) => {
        const chartItem = {
          name: `${deal.eventDescription} (${deal.vendorName})`,
          value: deal.count,
        };
        this.dealsAddedToFavorites.push(chartItem);
      });
      this.dealsAddedToFavorites = [...this.dealsAddedToFavorites];
    });
  }

  public download() {
    const dateBeginTransformed = this.datePipe.transform(this.rangeDates[0], 'yyyy-MM-dd');
    const dateEndTransformed = this.datePipe.transform(this.rangeDates[1], 'yyyy-MM-dd');
    this.fileName = `Statistics from ${dateBeginTransformed} to ${dateEndTransformed}`;
    this.statisticsService
      .downloadFile(dateBeginTransformed, dateEndTransformed)
      .subscribe((response: any) => {
        const blob: any = new Blob([response], {
          type: 'application/vnd.ms-excel; charset=utf-8',
        });
        fileSaver.saveAs(blob, this.fileName);
      });
  }
}
