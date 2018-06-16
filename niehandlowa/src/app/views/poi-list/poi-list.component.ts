import { Component, OnInit } from '@angular/core';
import { POI } from '../../models/POI';
import { MatDialog } from '@angular/material/dialog';
import { AddPoiDialogComponent } from '../dialogs/add-poi-dialog/add-poi-dialog.component';
import { PoiService } from '../../services/poi.service';
import { MapService } from '../../services/map.service';
import { MorePoiDialogComponent } from '../dialogs/more-poi-dialog/more-poi-dialog.component';

@Component({
    selector: 'app-poi-list',
    templateUrl: './poi-list.component.html',
    styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {
    public poiList: POI[];
    public newPoi: POI;

    private _search: string;
    private _show: boolean;

    displayedColumns = ['name', 'address', 'description', 'other'];

    constructor(
        public dialog: MatDialog,
        private _poiService: PoiService,
        private _mapService: MapService) {
        this.newPoi = new POI();
    }

    ngOnInit() {
        this._poiService.getAll().subscribe(data => {
            this.poiList = data;
        });
    }

    addPoiOnClick() {
        const dialogRef = this.dialog.open(AddPoiDialogComponent, {
            data: { poi: this.newPoi }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this._poiService.getAll().subscribe(data => {
                    this.poiList = data;
                });
            }
        });
    }

    public searchButtonOnClick() {
        this._mapService.getCoordsByAdress(this._search).subscribe(data => {
            this._poiService.getListSortedByDistance(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
                .subscribe(result => {
                    this.poiList = result;
                });
        });
    }

    public advancedButtonOnClick() {
        this._show = !this._show;
    }

    morePoiOnClick(selectpoi: POI) {
      const dialogRef = this.dialog.open(MorePoiDialogComponent, {
          data: { poi: selectpoi }
      });

  }
}
