import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { POI } from '../../../models/POI';
import { ToastrService } from 'ngx-toastr';
import { PoiService } from '../../../services/poi.service';

@Component({
  selector: 'app-poi-dialog',
  templateUrl: './add-poi-dialog.component.html',
  styleUrls: ['./add-poi-dialog.component.css']
})
export class AddPoiDialogComponent {
  public newPoi: POI = new POI();

  public _types: { value: number, name: string }[] = [{
    value: 1, name: "Sklep",
  }, {
    value: 2, name: "Galeria handlowa"
  }]

  constructor(
    public dialogRef: MatDialogRef<AddPoiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toastrService: ToastrService,
    private _poiService: PoiService) {
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
