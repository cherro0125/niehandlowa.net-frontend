import { Injectable } from '@angular/core';
import POI from '../models/POI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private _http: HttpClient) { }
}
