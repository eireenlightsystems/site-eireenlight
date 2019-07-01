import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[selButtonTextdarkDirective]'
})
export class ButtonTextdarkDirectiveDirective implements OnInit {
  @Input() hoverTextColor;
  @Input() defaultTextColor;

  @HostBinding('style.color') textColor: string;
  @HostBinding('style.backgroundColor') background: string;

  hoverDarkTextColor = '#000000';
  defaultDarkTextColor = '#212121';

  hoverDarkColor = '#9E9E9E';
  defaultDarkColor = '#efefef';
  // hoverDarkColor = '#FF9800';
  // defaultDarkColor = '#FFCC80';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultDarkTextColor;
    this.background = this.defaultDarkColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverDarkTextColor;
    this.background = this.hoverDarkColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultDarkTextColor;
    this.background = this.defaultDarkColor;
  }

}
