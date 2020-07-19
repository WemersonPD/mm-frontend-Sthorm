import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]',
})
export class DarkOnHoverDirective {
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }
  @HostListener('mouseover')
  darkOn(): void {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(50%)');
  }

  @HostListener('mouseleave')
  darkOff(): void {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
