import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import POI from '../../../models/POI';
import { ToastrService } from 'ngx-toastr';
import { PoiService } from '../../../services/poi.service';

@Component({
  selector: 'app-poi-dialog',
  templateUrl: './poi-dialog.component.html',
  styleUrls: ['./poi-dialog.component.css']
})
export class AddPoiDialogComponent {
  public newPoi: POI;

  constructor(public dialogRef: MatDialogRef<AddPoiDialogComponent>,
    private _toastrService: ToastrService, private _poiService: PoiService) {
    this.newPoi = new POI();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addPoiOnClick() {
    this._poiService.addPoi(this.newPoi).subscribe(data => {
      setTimeout(() => this._toastrService.info(`Dodano lokalizacje ${this.newPoi.name}`, 'Sukces!'));
      this.closeDialog();
    });
  }
}
