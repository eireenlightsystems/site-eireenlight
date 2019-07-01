import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterialService} from '../../../classes/material.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'sel-company-layout',
  templateUrl: './company-layout.component.html',
  styleUrls: ['./company-layout.component.css']
})
export class CompanyLayoutComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              public translate: TranslateService) {
  }

  ngOnInit() {
    MaterialService.initSliderPicture();
  }

  ngAfterViewInit() {

  }

}
