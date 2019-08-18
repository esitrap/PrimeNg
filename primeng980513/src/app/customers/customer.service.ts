import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  [x: string]: any;
  private customerUrl = 'api/customers'
  httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getcustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  };
  
  addcustomers(customer:Customer[]): Observable<Customer[]> {
    return this.http.post<Customer>(this.customerUrl,customer,this.httpOptions)
      };
   
  }   

