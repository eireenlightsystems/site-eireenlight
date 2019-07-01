import {Component, OnInit} from '@angular/core';
import {CardInfo} from '../../shared/interfaces';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'sel-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {

  }

}
