import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { POI } from '../../../models/POI';
import { OpeningHour } from '../../../models/OpeningHour';
@Component({
  selector: 'app-more-poi-dialog',
  templateUrl: './more-poi-dialog.component.html',
  styleUrls: ['./more-poi-dialog.component.css']
})
export class MorePoiDialogComponent implements OnInit {
  public poi: POI;
  public testopeningHours: OpeningHour;
  constructor(
    public dialogRef: MatDialogRef<MorePoiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.poi = this.data.poi;
    for (let i = 0; i < 8; i++) {
      if ((this.poi.openingHours[i] !== undefined) && (this.poi.openingHours[i].dayOfWeek !== i + 1)) {
        const iter = this.poi.openingHours[i].dayOfWeek - 1;
        const tmp_o = this.poi.openingHours[i];
        this.poi.openingHours[i] = this.poi.openingHours[iter];
        this.poi.openingHours[iter] = tmp_o;

      }

    }
    let j = 1;
    for (let i = 0; i < 8; i++) {
      if (this.poi.openingHours[i] === undefined) {
        this.poi.openingHours[i] = { dayOfWeek: j, openingTime: undefined, closingTime: undefined };
        j++;
      } else {
        j = this.poi.openingHours[i].dayOfWeek + 1;
      }
    }
  }
  
  closeDialog() {
    this.dialogRef.close();

  }
}
