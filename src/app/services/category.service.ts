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
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/category?pageSize=1000`);
  }

  addCategory(product: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/category`, product, httpOptions);
  }

  updateCategory(product: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/category/`, product, httpOptions);
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/category/${id}`);
  }

  deleteTag(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/tags/${id}`);
  }
}
