import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(localStorage.getItem('FirstName'));
    console.log(localStorage.getItem('LastName'));
    console.log(JSON.parse(localStorage.getItem('student')));
    console.log(sessionStorage.getItem('sessionData'));

    if (sessionStorage.length > 0)
      console.log("Data available!!!");
    else
      console.log("Data not available!!!");

    if (window.localStorage)
      console.log("Browser supported!!!");

  }

}
