import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 51;
  lng: number = 7;

  AgmInfoWindow

  constructor() { }

  ngOnInit() {

  }
}
