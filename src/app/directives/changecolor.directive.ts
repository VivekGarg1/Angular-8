import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements AfterViewInit {

  constructor(private elref: ElementRef) {
   }
  ngAfterViewInit() {
    this.elref.nativeElement.style.color = 'red';
  }

  changeColor(changedColor: string) {
    this.elref.nativeElement.style.color=changedColor;
  }

}
