import {Component, Input, OnInit} from '@angular/core';
import {CardInfo} from '../../interfaces';

@Component({
  selector: 'sel-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  // variables from master component
  @Input() cardinfo: CardInfo;

  // determine the functions that need to be performed in the parent component
  // @Output() onRefreshChildGrid = new EventEmitter<number>();

  // define variables - link to view objects
  // @ViewChild('jqxgridComponent') jqxgridComponent: JqxgridComponent;

  // other variables


  constructor() { }

  ngOnInit() {
  }

}
