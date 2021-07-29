import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Vendor} from '../models/vendor.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  getVendors(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/vendors`);
  }

  getAllVendors(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/vendors/all?pageSize=100`);
  }

  getVendor(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/vendors/${id}`);
  }

  getAllVendorsForDeals(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/vendors?pageSize=1000`);
  }

  updateVendor(vendor: any, id: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/vendors?vendorId=${id}`, vendor, httpOptions);
  }

  addVendor(vendor: any): Observable<any> {
    return this.http.post<Vendor>(`${environment.apiUrl}/api/vendors`, vendor, httpOptions);
  }

  deleteVendor(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/vendors/${id}`);
  }
}
