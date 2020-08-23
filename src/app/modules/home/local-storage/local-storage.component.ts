import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let obj={firstName:'Vivek', lastName:'Garg'}
    localStorage.setItem('FirstName','Vivek');
    localStorage.setItem('LastName','Garg');
    localStorage.setItem('student',JSON.stringify(obj));
    sessionStorage.setItem('sessionData','Session-Vivek Garg');

    //localStorage.removeItem('localData');
    //localStorage.clear();
    sessionStorage.clear();
    console.log(localStorage.getItem('FirstName'));
    console.log(localStorage.getItem('LastName'));
    console.log(JSON.parse(localStorage.getItem('student')));
    console.log(sessionStorage.getItem('sessionData'));
  }

}
