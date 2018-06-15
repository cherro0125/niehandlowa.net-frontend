import { Injectable } from '@angular/core';
import POI from '../models/POI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  //private _poi: POI = new POI;
  constructor(private _http: HttpClient) { }
}
