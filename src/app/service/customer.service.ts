import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/book';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  CUSTOMERS: Customer[]=[

    {id:1,name:'Vivek Garg',gender:'Male',age:23},
    {id:2,name:'Prabhat',gender:'Male',age:24},
    {id:3,name:'Shubham',gender:'Male',age:25},
    {id:4,name:'Paras',gender:'Male',age:24}
  ];

  getCustomers(): Observable<Customer[]>{
    return of(this.CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer>{
    return this.getCustomers()
    .pipe(
      map(customers => customers.find(customer =>customer.id==id)));
  }
  
}

