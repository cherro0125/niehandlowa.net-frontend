import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  public adress: string;

  private _lat: number;
  private _lng: number;
  private _name: string;

  constructor(private _mapService: MapService,
    private _toastr: ToastrService) {
  }

  ngOnInit() {
  }

  searchButtonOnClick() {
    this._mapService.getCoordsByAdress(this.adress)
      .subscribe(data => {
      if (data !== undefined) {
        data.results.forEach(element => {
          alert(element.geometry.location.lat);
          alert(element.geometry.location.lng);
      });
      if (data.results[0] !== undefined) {
        this._lat = data.results[0].geometry.location.lat;
        this._lng = data.results[0].geometry.location.lng;
        this._name = data.results[0].formatted_address;
      } else {
        setTimeout(() => this._toastr.error('Nie odnaleziono lokalizacji', 'Błąd!'));
      }
      }
      });
  }
}
