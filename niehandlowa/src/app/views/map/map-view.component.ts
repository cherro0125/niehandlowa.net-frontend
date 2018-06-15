import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  public adress: string;

  constructor(private _mapService: MapService) {
  }

  ngOnInit() {
  }

  searchButtonOnClick() {
    alert(this.adress)
    // this._mapService.getCoordsByAdress(this.adress)
    //   .subscribe(data => alert(JSON.stringify(data)));
  }
}
