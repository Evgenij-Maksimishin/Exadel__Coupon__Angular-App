import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  addDealToOrders(id: number): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/users/addEvent/toOrder?eventId=${id}`,
      httpOptions,
    );
  }

  getOrderedDeals(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/api/users/allEvents/fromUserOrder?pageSize=100`,
    );
  }
}
