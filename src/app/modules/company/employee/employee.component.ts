import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any[]=[
    {
      name:'Vivek Garg'
    },
    {
      name:'Paras'
    },
    {
      name:'Prabhat'
    },
    {
      name:'Shubham'
    }
  ];
  employeesInfo:any[];

  constructor() { 
    this.employeesInfo=[
    {
      empId:'1',
      empName:'Vivek Garg',
      gender:'Male',
      age:'23',
      designation:'ASE'
    },
    {
      empId:'2',
      empName:'Anoop',
      gender:'Male',
      age:'30',
      designation:'SSE'
    },
    {
      empId:'3',
      empName:'vandana',
      gender:'Female',
      age:'24',
      designation:'ASE'
    },
    {
      empId:'4',
      empName:'Amrita',
      gender:'Female',
      age:'26',
      designation:'SE'
    },
  ];
  }

  countryDetails:any[]=[
    {
      country:"India",
      people:[
      {
        name:"Vivek Garg"
      },
      {
        name:"Prabhat"
      },
      {
        name:"Paras"
      },
    ],
    },
    {
      country:"Australia",
      people:[
      {
        name:"Rob"
      },
      {
        name:"Louisa"
      },
      {
        name:"charlie"
      },
    ],
    },
    {
      country:"Uk",
      people:[
      {
        name:"Dominic"
      },
      {
        name:"Ricardo"
      },
      {
        name:"Ana"
      },
    ],
    },
  ];

  ngOnInit() {
  }

  getMoreEmployees():void{
    this.employeesInfo=[
      {
        empId:'1',
        empName:'Vivek Garg',
        gender:'Male',
        age:'23',
        designation:'ASE'
      },
      {
        empId:'2',
        empName:'Anoop',
        gender:'Male',
        age:'30',
        designation:'SSE'
      },
      {
        empId:'3',
        empName:'vandana',
        gender:'Female',
        age:'24',
        designation:'ASE'
      },
      {
        empId:'4',
        empName:'Amrita',
        gender:'Female',
        age:'26',
        designation:'SE'
      },
      {
        empId:'5',
        empName:'Raja',
        gender:'Male',
        age:'27',
        designation:'SE'
      },
    ];
  }

  trackByEmployeeId(index:number,employeesInfo:any):string{
    return employeesInfo.empId;
  }

  // getColor(country){
  //   console.log(country);
  //   switch(country){
  //   case'India':
  //   return 'red';
  //   case'Australia':
  //   return 'red';
  //   case '':
  //   return 'yellow';
  //   }
  // }

  users=[
    'Vivek Garg',
    'Prabhat',
    'Paras',
    'Naveen'
];

getCssClass(flag){
  let cssclass;
  if(flag=="mode"){
    cssclass={
      'one':true,
      'two':true,
    }
  }
  else{
      cssclass={
        'three':true,
        'four':true,
      }
    }
    return cssclass;
  }
}

