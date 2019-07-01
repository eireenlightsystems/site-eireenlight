import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../../../classes/material.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'sel-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.css']
})
export class ProductLayoutComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    MaterialService.initSliderPicture();
  }

}
