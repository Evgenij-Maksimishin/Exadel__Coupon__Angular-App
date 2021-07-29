import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  addDealToFavorites(id: number): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/api/users/addEvent/toFavorites?eventId=${id}`,
      id,
      httpOptions,
    );
  }

  removeDealFromFavorites(id: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.apiUrl}/api/users/removeEvent/fromFavorites?eventId=${id}`,
    );
  }

  getFavoriteDealIds(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/users/allEvents/fromFavorites`).pipe(
      map((data: any) => {
        const dealIds: number[] = [];
        const {elements} = data;
        elements.forEach((element: any) => dealIds.push(element.id));
        return dealIds;
      }),
    );
  }

  getFavoriteDeals(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/users/allEvents/fromFavorites`);
  }
}
