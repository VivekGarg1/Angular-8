import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[];
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
     this.customerService.getCustomers()
     .subscribe(customers =>this.customers=customers);
  }

  close(){
    this.router.navigate([{outlets:{customerdata:null}}]);
  }
  

}
