import { Component, OnInit } from '@angular/core';
import { POI } from '../../models/POI';
import { MatDialog } from '@angular/material/dialog';
import { AddPoiDialogComponent } from '../dialogs/add-poi-dialog/add-poi-dialog.component';
import { PoiService } from '../../services/poi.service';
import { MapService } from '../../services/map.service';
import { MorePoiDialogComponent } from '../dialogs/more-poi-dialog/more-poi-dialog.component';
import { ToastrService } from 'ngx-toastr';

const lat = 50.900218;
const lng = 20.586800;

@Component({
    selector: 'app-poi-list',
    templateUrl: './poi-list.component.html',
    styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {
    public poiList: POI[];
    public poiListDataSource: POI[];

    public newPoi: POI;

    public _search: string;
    public _show: boolean = false;

    displayedColumns = ['name', 'address', 'description', 'type', 'other', 'like', 'dislike', 'bilans'];

    constructor(
        public dialog: MatDialog,
        public _poiService: PoiService,
        public _mapService: MapService,
        public _toastrService: ToastrService) {
        this.newPoi = new POI();
    }

    ngOnInit() {
        this._poiService.getListSortedByDistance(lat, lng).subscribe(data => {
            this.poiList = data;
            this.poiListDataSource = this.poiList;
        });
    }

    addPoiOnClick() {
        const dialogRef = this.dialog.open(AddPoiDialogComponent, {
            data: { poi: this.newPoi }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this._poiService.getListSortedByDistance(lat, lng).subscribe(data => {
                    this.poiListDataSource = data;
                });
            }
        });
    }

    public searchButtonOnClick() {
        if (this._show) {
            this._mapService.getCoordsByAdress(this._search).subscribe(data => {
                this._poiService.getListSortedByDistance(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
                    .subscribe(result => {
                        this.poiList = result;
                    });
            });
        } else {

            this.poiListDataSource = this.poiList.filter(poi => poi.name != undefined && poi.name.toLowerCase().startsWith(this._search.toLowerCase()));
        }
    }

    public advancedButtonOnClick() {
        this._show = !this._show;
    }

    morePoiOnClick(selectpoi: POI) {
        const dialogRef = this.dialog.open(MorePoiDialogComponent, {
            data: { poi: selectpoi },
            height: '60vh'
        });

    }
}
