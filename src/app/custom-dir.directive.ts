import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColor : string = "pink";

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = "black";
  }

  @HostListener('mouseleave') mouseleave() {
    this.bgColor = "pink";
  }
  constructor() { }

}
