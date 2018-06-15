import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POIResponse } from '../models/POIResponse';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private _http: HttpClient) { }

  public getCoordsByAdress(adress: string): Observable<POIResponse> {
    adress = adress.replace(" ", "+");
    return this._http.get<POIResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyDKTZ15_EjqEOLG4e72RR4R3XrCfykOXb8`);
  }
}
