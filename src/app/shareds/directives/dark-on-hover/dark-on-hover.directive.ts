import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]',
})
export class DarkOnHoverDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseover')
  darkOn(): void {
    console.log('darkOn');
  }

  @HostListener('mouseleave')
  darkOff(): void {
    console.log('darkOff');
  }
}
