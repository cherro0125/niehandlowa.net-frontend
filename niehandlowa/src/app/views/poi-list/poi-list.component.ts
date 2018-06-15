import { Component, OnInit } from '@angular/core';
import { POI } from '../../models/POI';
import { MatDialog } from '@angular/material/dialog';
import { AddPoiDialogComponent } from '../dialogs/add-poi-dialog/add-poi-dialog.component';
import { PoiService } from '../../services/poi.service';

@Component({
    selector: 'app-poi-list',
    templateUrl: './poi-list.component.html',
    styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {
    public poiList: POI[];
    public searchPoiName: string;
    public newPoi: POI;
  displayedColumns = [ 'name', 'address', 'owner', 'description', 'openHours', 'other'];

  ngOnInit() {
    this.poiList = [
      // // tslint:disable-next-line:max-line-length
      // {  id: 1 , name: 'Biedronka' , address: 'Żelazna 2' , owner: 'Janusz Nosacz'  , description: 'Wincyj bimbru' },
      // {  id: 1 , name: 'Biedronka' , address: 'Żelazna 2' , owner: 'Janusz Nosacz'  , description: 'Wincyj bimbru' }
    ];
  }

    constructor(
        public dialog: MatDialog,
        private _poiService: PoiService) {
        this.newPoi = new POI();
    }

    ngOnInit() {
        this._poiService.getAll().subscribe(data => {
            this.poiList = data;
        });
    }

    addPoiOnClick() {
        let dialogRef = this.dialog.open(AddPoiDialogComponent, {
            data: { poi: this.newPoi }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this._poiService.getAll().subscribe(data => {
                    this.poiList = data;
                })
            }
        });
    }

    public searchButtonOnClick() {

    }
}
