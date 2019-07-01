import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[selButtonWavesDirective]'
})
export class ButtonWavesDirectiveDirective implements OnInit {
  @Input() theme = 'dark';
  @Input() hoverTextColor;
  @Input() defaultTextColor;

  @HostBinding('style.color') textColor: string;
  // @HostBinding('style.backgroundColor') background: string;

  hoverLightTextColor = 'white';
  defaultLightTextColor = 'rgba(255,255,255,.5)';
  hoverDarkTextColor = '#000000';
  defaultDarkTextColor = '#424242';

  hoverDarkColor = '#9E9E9E';
  defaultDarkColor = '#efefef';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    switch (this.theme) {
      case 'dark':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
      case 'light':
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultDarkTextColor;
        // this.background = this.defaultDarkColor;
        break;
      default:
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
    }

    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'text-align', 'center');
    this.renderer.addClass(nativeElement, 'waves-effect');
    this.renderer.addClass(nativeElement, 'waves-yellow');
  }

  @HostListener('mouseenter') mouseEnter() {
    switch (this.theme) {
      case 'dark':
        this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverLightTextColor;
        break;
      case 'light':
        this.textColor = this.hoverTextColor ? this.hoverTextColor : this.hoverDarkTextColor;
        // this.background = this.hoverDarkColor;
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
        // this.background = this.defaultDarkColor;
        break;
      default:
        this.textColor = this.defaultTextColor ? this.defaultTextColor : this.defaultLightTextColor;
        break;
    }
  }

}
