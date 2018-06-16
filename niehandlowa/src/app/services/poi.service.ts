import { Injectable } from '@angular/core';
import AbstractService from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { POI } from '../models/POI';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoiService extends AbstractService {
  constructor(private _http: HttpClient) {
    super();
  }

  public getByTypes(types: number[]): Observable<POI[]> {
    let typesToGet: string;
    for (var i: number; i < types.length; i++) {
      if (i == types.length - 1) {
        typesToGet += `${types[i]}`;
      }
      typesToGet += `${types[i]},`;
    }
    return this._http.get<POI[]>(`${environment.apiUrl}/poi/getbytypes/`);
  }

  public getById(id: number): Observable<POI> {
    return this._http.get<POI>(`${environment.apiUrl}/poi/get/${id}`)
  }

  public getAll(): Observable<POI[]> {
    return this._http.get<POI[]>(`http://${environment.apiUrl}/poi/getall`)
  }

  public addPoi(poiToAdd: POI): Observable<POI> {
    return this._http.post<POI>(`${environment.apiUrl}/poi/create`, poiToAdd);
  }
}
