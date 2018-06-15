import { Injectable } from '@angular/core';
import AbstractService from './abstract.service';
import { HttpClient } from '@angular/common/http';
import POI from '../models/POI';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoiService extends AbstractService {
  constructor(private _http: HttpClient) {
    super();
  }

  public addPoi(poiToAdd: POI): Observable<POI> {
    return this._http.post<POI>(`environment.apiUrl/poi/create`, poiToAdd);
  }
}
