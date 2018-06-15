import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { POIResponse } from '../models/POIResponse';
import AbstractService from './abstract.service';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MapService extends AbstractService {
  constructor(private _http: HttpClient) {
    super();
   }

  public getCoordsByAdress(adress: string): Observable<POIResponse> {
    adress = adress.replace(' ', '+');
    return this._http.
    get<POIResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyDKTZ15_EjqEOLG4e72RR4R3XrCfykOXb8`)
    .pipe(
      catchError(this.handleError<POIResponse>('jebut'))
  );
  }
}
