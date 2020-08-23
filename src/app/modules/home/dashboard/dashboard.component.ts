import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { ChangecolorDirective } from 'src/app/directives/changecolor.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  @ViewChild(AdminComponent) adminComponent:AdminComponent;
  @ViewChild(ChangecolorDirective) changecolorDirective:ChangecolorDirective;
  @ViewChild('name') elementNameRef:ElementRef;
  @ViewChild('state') elementStateRef:ElementRef;
  constructor(private eleref:ElementRef,private renderer:Renderer2) { }
  ngAfterViewInit(): void {

    this.elementNameRef.nativeElement.style.backgroundColor='black';
    this.elementNameRef.nativeElement.style.color='white';
    this.elementStateRef.nativeElement.style.backgroundColor='cyan';
    this.elementStateRef.nativeElement.style.color='red';

  }

  ngOnInit(): void {
  }

  increase(){
    this.adminComponent.increaseByOne();
  }

  decrease(){
    this.adminComponent.decreaseByOne();
  }

  changeColor(color:string){
    this.changecolorDirective.changeColor(color);
  }

  @HostListener('click') onClick(){
    alert("clicked!!!");
  }

  @HostListener('mouseover') onCMouseover(){
    console.log("mousehover");
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log("mouseleave");
  }

  // changeBgColor(color:string){
  //   this.renderer.setStyle(this.eleref.nativeElement,'backgroundColor',color);
  // }

  

}
