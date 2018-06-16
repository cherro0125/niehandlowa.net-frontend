import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { POI } from '../../../models/POI';
import { ToastrService } from 'ngx-toastr';
import { PoiService } from '../../../services/poi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpeningHour } from '../../../models/OpeningHour';

@Component({
  selector: 'app-poi-dialog',
  templateUrl: './add-poi-dialog.component.html',
  styleUrls: ['./add-poi-dialog.component.css']
})
export class AddPoiDialogComponent {
  public newPoi: POI = new POI();

  public types: { value: number, name: string }[] =
    [{
      value: 1, name: 'Sklep',
    }, {
      value: 2, name: 'Galeria handlowa'
    },
    { value: 3, name: 'Stacja benzynowa' }];

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  public _opens: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  public _closes: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  constructor(
    public dialogRef: MatDialogRef<AddPoiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _toastrService: ToastrService,
    public _poiService: PoiService,
    public _formBuilder: FormBuilder) {

    data.poi.openingHours = [];

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addPoiOnClick() {
    for (let i: number; i < this._opens.length; i++) {
      if (this._opens[i] !== 0) {
        let hour: OpeningHour = new OpeningHour();
        hour.openingTime = new Date(0, 0, 0, this._opens[i]);
        hour.closingTime = new Date(0, 0, 0, this._closes[i]);
        hour.dayOfWeek = i;
        this.data.poi.openingHours.push(hour);
      }
    }

    this._poiService.addPoi(this.data.poi).subscribe(data => {
      setTimeout(() => this._toastrService.info(`Dodano lokalizacje ${this.data.poi.name}`, 'Sukces!'));
      this.closeDialog();
    });
  }
}
