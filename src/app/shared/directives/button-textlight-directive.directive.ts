import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[selButtonTextlightDirective]'
})
export class ButtonTextlightDirectiveDirective implements OnInit {
  @Input() hoverTextColor;
  @Input() defaultTextColor;

  @HostBinding('style.color') textColor: string;
  @HostBinding('style.backgroundColor') background: string;

  hoverLightTextColor = 'white';
  defaultLightTextColor = 'rgba(255,255,255,.5)';

  hoverLightColor = '#757575';
  defaultLightColor = '#424242';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
    this.background = this.defaultLightColor;
   }

  @HostListener('mouseenter') mouseEnter() {
    this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverLightTextColor;
    this.background = this.hoverLightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
    this.background = this.defaultLightColor;
  }

}
