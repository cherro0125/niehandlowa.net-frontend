import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { POI } from '../../../models/POI';
@Component({
  selector: 'app-more-poi-dialog',
  templateUrl: './more-poi-dialog.component.html',
  styleUrls: ['./more-poi-dialog.component.css']
})
export class MorePoiDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MorePoiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
  }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
