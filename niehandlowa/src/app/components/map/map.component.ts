import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Niehandlowa.net';
  lat: number = 51;
  lng: number = 7;

  constructor() { }

  ngOnInit() {

  }
}
