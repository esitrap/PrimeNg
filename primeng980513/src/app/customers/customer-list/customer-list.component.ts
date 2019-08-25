import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getcustomers()
      .subscribe(cust => {
        this.customers = cust;
      });
  }

  add (event: string) {
    if (!event) { return; }
    this.customerService.addcustomer({
      mobileNo: '',
      name: event,
      id: '25c694c3-4d0e-4445-908d-cf5009905738'
    }).subscribe(
      cust => {
        debugger; this.customers.push(cust); }
    );
  }
}
