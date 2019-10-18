import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MaterialService} from '../../../classes/material.service';

@Component({
  selector: 'sel-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {

  heightToFooter = 100;
  screenHeight = 0;
  screenWidth = 0;

  constructor(private ngZone: NgZone,
              public translate: TranslateService) {

    // screen change
    window.onresize = (e) => {
      ngZone.run(() => {
        // console.log(window.innerWidth);
        // console.log(window.innerHeight);
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenHeight < 1300) {

        }
      });
    };
  }

  ngOnInit() {
    MaterialService.initSliderPicture();
  }

  ngAfterViewInit() {
  }

}
