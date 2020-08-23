import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  count:number=0;
  message:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  increaseByOne(){
    this.count=this.count+1;
    this.message="Counter: "+this.count;
  }
  decreaseByOne(){
    this.count=this.count-1;
    this.message="Counter: "+this.count;
  }

}
