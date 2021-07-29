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
export class DealService {
  constructor(private http: HttpClient) {}

  getDeals(filters: any = {}, pageNumber = 0, pageSize = 10): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/api/event/by_filter?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      filters,
    );
  }

  getAdminDeals(page: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/event/events?pageNumber=${page}`);
  }

  searchAdminDeals(searchString: any): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/api/event/by_description_for_admin?search=${searchString}&pageSize=1000`,
    );
  }

  searchDeals(search: string, pageSize: number = 8): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/api/event/by_description?search=${search}&pageSize=${pageSize}`,
      httpOptions,
    );
  }

  getDeal(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/event/${id}`);
  }

  updateDeal(id: number, deal: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/event/${id}`, deal, httpOptions);
  }

  addDeal(deal: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/event/newEvent`, deal, httpOptions);
  }

  deleteDeal(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/event/${id}`);
  }
}
