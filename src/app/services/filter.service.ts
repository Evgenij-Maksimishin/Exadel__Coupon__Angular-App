import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private http: HttpClient) {}

  getFilters() {
    return this.http.get<any>('assets/filters.json');
  }

  updateFilters(filters: any) {
    return this.http.post<any>(`${environment.apiUrl}/api/filtering`, filters);
  }
}
