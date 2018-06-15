import { Component, OnInit } from '@angular/core';
import POI from '../../models/POI';

@Component({
  selector: 'app-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {
  public poiList: POI[];
  public poiName: string;
  displayedColumns = [ 'name', 'address', 'owner', 'description'];
  constructor() { }

  ngOnInit() {
    this.poiList = [
      // tslint:disable-next-line:max-line-length
      {  id: 1 , name: 'Biedronka' , address: 'Żelazna 2' , owner: 'Janusz Nosacz'  , description: 'Wincyj bimbru' },
      {  id: 1 , name: 'Biedronka' , address: 'Żelazna 2' , owner: 'Janusz Nosacz'  , description: 'Wincyj bimbru' }
    ];
  }

  addPoiOnClick() {
    let dialog = dialog.open(poi)
  }

  public searchButtonOnClick() {

  }
}
