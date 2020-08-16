import { Component, OnInit, Inject } from '@angular/core';
import { MyService } from '../../../service/myservice.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  title = 'Vivek Garg';
  empFirstName='Vivek';
  empLastName='Garg';
  isvalid:boolean=true;
  chooseValue: any;
  colSize:number=3;
  borderSize:number=3;
  tblHeight:number=200;
  tblWidth:number=300;
  testAlign:string='center';
  data:string="Vivek Garg";
  dataValue:string="Hello Vivek";
  name:string="Vivek Garg";
  position:string='Software Engineer';
  work:string='software development';
  todayDate=new Date();
  myNumber:number=0.12345;

  //constructor(private myservice:MyService){  or 
    constructor(@Inject(MyService)myservice){
    console.log(myservice);
    console.log("This is component");
  }

/*@HostListener('click',['event'])
   onHostClick(event:Event){
  alert("Hello Vivek Garg!!!");
}*/

employees:any[]=[
  {
  code:'emp001',name:'Vivek Garg',salary:'10000',gender:'Male',dob:new Date(1986,8,2)
  },
  {
  code:'emp002',name:'Vandana',salary:'11000',gender:'Female',dob:new Date(1987,8,2)
},
{
  code:'emp003',name:'Paras',salary:'12000',gender:'Male',dob:new Date(1988,8,2)
},
{
  code:'emp004',name:'Amrita',salary:'13000',gender:'Female', dob:new Date(1989,8,2)
}
];

btnClick(){
  alert("You clicked me!!!");
}

changeValue(item:boolean){
  this.isvalid=item;
}

setSwitchValue(event:any){
this.chooseValue=event.target.value;
}

clickbutton(){
   console.log("Hello World!!!")
}

show(){
  alert("Thank You!!!");
}

ngOnInit() {
  }

}
