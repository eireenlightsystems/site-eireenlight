import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[selBackgroundDarkDirective]'
})
export class BackgroundDarkDirectiveDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'background', '#31363c');
    // #202124
    // #2d373c
  }

}
