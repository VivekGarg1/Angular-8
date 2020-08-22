import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  customer: Customer;
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private location: Location) { }

  ngOnInit(): void {

    //Using snapshot param
    console.log(this.route.snapshot.params.id);
    this.customerService.getCustomer(parseInt(this.route.snapshot.params.id)).subscribe(result => this.customer=result);

    // //Using snapshot paramMap
    // console.log(this.route.snapshot.paramMap.get('id'));
    // this.customerService.getCustomer(parseInt(this.route.snapshot.params.id)).subscribe(result => this.customer=result);

    // //Using subscribe paramMap
    // this.route.paramMap.subscribe(param => {
    //   console.log(param.get('id'));
    //   this.customerService.getCustomer(parseInt(param.get('id'))).subscribe(result => this.customer = result);
    // });

    // //Using subscribe paramMap
    // this.route.params.subscribe(param => {
    //   console.log(param.id);
    //   this.customerService.getCustomer(parseInt(param.id)).subscribe(result => this.customer = result);
    // });

  }

  goBack() {
    this.location.back();
  }

}
