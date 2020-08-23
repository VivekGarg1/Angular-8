import { Component } from '@angular/core';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';

export class MyProvider1{
constructor(){
  console.log("myProvider1");
}
  myProvider1='myProvider1';
}

export class MyProvider2{
  constructor(){
    
  }
    myProvider2='myProvider2';
    getString(name){
      console.log("myProvider2 "+name);
    }
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[MyProvider1,MyProvider2]
})
export class HomeComponent {

  display: boolean = true;
  bookDetils = [
    {
      id: 1, name: 'Compiler', category: 'CS/IT'
    },
    {
      id: 2, name: 'Thermodynamics', category: 'ME'
    },
    {
      id: 3, name: 'Structural Analysis', category: 'Civil'
    }
  ];

  city:any;

  obj = {
    data: "Hi"
  }

  constructor(private obj1:MyProvider1,public obj2:MyProvider2,private cookie:CookieService) { 
    obj2.getString("Vivek Garg");
    console.log(obj1.myProvider1);
    console.log(obj2.myProvider2);
  }

  ngOnIt() {
    
}

disable(){
$(document).ready(function() {
  $("button").click(function(){
    $("p").hide();
  });
});
}

clickMe(){
  this.cookie.set("UserId",'101');
  this.cookie.set("UserType",'Admin');
  this.cookie.delete("UserType");
}

}