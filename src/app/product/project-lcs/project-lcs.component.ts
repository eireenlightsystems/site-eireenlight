import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MaterialService} from '../../shared/classes/material.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'sel-project-lcs',
  templateUrl: './project-lcs.component.html',
  styleUrls: ['./project-lcs.component.css']
})
export class ProjectLcsComponent implements OnInit {

  safeSrc: SafeResourceUrl;

  constructor(public translate: TranslateService,
              private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yLp-MbFujro');
  }
  ngOnInit() {
    MaterialService.initSliderPicture();
  }

}
