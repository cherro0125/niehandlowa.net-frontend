import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  public lat: number;

  @Input()
  public lng: number;

  @Input()
  public name: string;

  constructor() { }

  ngOnInit() {

  }
}
