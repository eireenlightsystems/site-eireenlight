import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MaterialService} from '../../../classes/material.service';

@Component({
  selector: 'sel-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    MaterialService.initSliderPicture();
  }

  ngAfterViewInit() {
  }

}
