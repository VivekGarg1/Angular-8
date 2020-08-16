import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  employees:any[];

  constructor() { 
     this.employees=[
     {
        empcode:'emp001',name:'Vivek Garg'
     },
     {
      empcode:'emp002',name:'Prabhat'
   }
    ];
  }
  display(){
    return "Hello Angular users!!!"
  }
}
