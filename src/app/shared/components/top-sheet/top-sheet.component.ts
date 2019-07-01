import {Component, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'sel-top-sheet',
  templateUrl: './top-sheet.component.html',
  styleUrls: ['./top-sheet.component.css']
})
export class TopSheetComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
  }

  closeDialog(event: MouseEvent): void {
    // event.preventDefault();
    // this.bottomSheetRef.dismiss();
    // this.bottomSheet.dismiss();
  }

  getSortBy(event) {
    // get selected value
    // console.log('1::::' + JSON.stringify(event));
  }

  getfilterby(event) {
    // get selected value
    // console.log('2:::' + JSON.stringify(event));
  }
}
