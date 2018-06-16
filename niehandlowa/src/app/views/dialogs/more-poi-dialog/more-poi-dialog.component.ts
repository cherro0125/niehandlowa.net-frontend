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

  private iterator: number = 1;

  private _days: string[] =
    [{ number: 1, name: 'Poniedziałek' },
    { number: 2, name: 'Wtorek' },
    { number: 3, name: 'Środa' },
    { number: 4, name: 'Czwartek' },
    { number: 5, name: 'Piątek' },
    { number: 6, name: 'Sobota' },
    { id: 7, name: 'Sobota' },
    { id: 8, name: 'Niedziela' },
    { id: 9, name: 'Niedziela (niehandlowa)' }];

  ngOnInit() {
    this.poi = this.data.poi;


    let j = 1;
    for (let i = 0; i < 8; i++) {
      if (this.poi.openingHours[i] === undefined) {
        this.poi.openingHours[i] = { dayOfWeek: j, openingTime: undefined, closingTime: undefined };
        // this.poi.openingHours[i].dayOfWeek = j;
        // this.poi.openingHours[i].openingTime = undefined;
        // this.poi.openingHours[i].closingTime = undefined;
        j++;

      } else {
        j = this.poi.openingHours[i].dayOfWeek + 1;
      }

    }
    this.poi.openingHours.sort((a, b) => {
      return a.dayOfWeek < b.dayOfWeek ? a.dayOfWeek : b.dayOfWeek;
    }).reverse();
    console.log(this.poi.openingHours);

  }
  closeDialog() {
    this.dialogRef.close();

  }
}
