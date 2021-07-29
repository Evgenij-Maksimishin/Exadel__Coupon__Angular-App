import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getViewedDeals(dateBegin: Date, dateEnd: Date): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/api/statistics/byViewed?dateBegin=${dateBegin}&dateEnd=${dateEnd}`,
    );
  }

  getOrderedDeals(dateBegin: Date, dateEnd: Date): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/api/statistics/byOrders?dateBegin=${dateBegin}&dateEnd=${dateEnd}`,
    );
  }

  getFavoredDeals(dateBegin: Date, dateEnd: Date): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/api/statistics/byFavorites?dateBegin=${dateBegin}&dateEnd=${dateEnd}`,
    );
  }

  downloadFile(dateBegin: any, dateEnd: any): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/api/statistics/downloadTemplate?dateBegin=${dateBegin}&dateEnd=${dateEnd}`,
      {
        responseType: 'blob',
      },
    );
  }
}
