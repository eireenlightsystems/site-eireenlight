import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sel-footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.css']
})
export class FooterLayoutComponent implements OnInit {

  private stackoverflowUrl = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  private linkedinUrl = 'https://www.linkedin.com/in/mohammadfaysal/';
  private fiverrUrl = 'https://www.fiverr.com/faisalmuhammad_';
  private facebookUrl = 'https://www.facebook.com/phaysall';
  private twitterUrl = 'https://twitter.com/faisssallll';
  private githubUrl = 'https://github.com/faisalmuhammad';
  private googleUrl = 'https://plus.google.com/+MuhammadFaisal04';

  constructor() {
  }

  ngOnInit() {
  }

}
