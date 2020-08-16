import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message:string;
  employeeInfo:any[];

  constructor(private router:Router,private myService:MyService) {}

  ngOnInit() {
    this.employeeInfo=this.myService.employees;
    this.message=this.myService.display();
  }

  student(){
    this.router.navigate(['/student']);
  }

}
