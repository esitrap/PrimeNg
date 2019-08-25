import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'api/customers'

  constructor(private http: HttpClient) { }

  getcustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  };

  addcustomer(customer: Customer): Observable<any> {
    return this.http.post(this.customerUrl, customer);
  };
}

