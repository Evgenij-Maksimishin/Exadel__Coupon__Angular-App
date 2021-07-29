import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  getVendors(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user/subscription/vendor`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user/subscription/category`);
  }

  getTags(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user/subscription/tag`);
  }

  updateSubscription(subscription: any) {
    return this.http.post<any>(`${environment.apiUrl}/api/user/subscription`, subscription);
  }

  publishEvent(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user/subscription/publish/${id}`);
  }
}
