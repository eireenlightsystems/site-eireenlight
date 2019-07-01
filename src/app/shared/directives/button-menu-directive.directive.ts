import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[selButtonMenuDirective]'
})
export class ButtonMenuDirectiveDirective implements OnInit {
  @Input() theme = 'dark';
  @Input() hoverTextColor;
  @Input() defaultTextColor;

  @HostBinding('style.color') textColor: string;

  hoverLightTextColor = 'white';
  defaultLightTextColor = 'rgba(255,255,255,.5)';
  hoverDarkTextColor = '#000000';
  defaultDarkTextColor = '#424242';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    switch (this.theme) {
      case 'dark':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
      case 'light':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultDarkTextColor;
        break;
      default:
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
    }
  }

  @HostListener('mouseenter') mouseEnter() {
    switch (this.theme) {
      case 'dark':
        this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverLightTextColor;
        break;
      case 'light':
        this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverDarkTextColor;
        break;
      default:
        this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverLightTextColor;
        break;
    }
  }

  @HostListener('mouseleave') mouseLeave() {
    switch (this.theme) {
      case 'dark':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
      case 'light':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultDarkTextColor;
        break;
      default:
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
    }
  }
}
