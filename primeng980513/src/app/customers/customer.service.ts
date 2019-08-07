import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private customerUrl :'api/customer'

  constructor() { }
}
