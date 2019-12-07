import { PlaceResponse } from './../../models/response/place/place-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient
  ) { }

getPlaces(city: string) {
  return this.http.get<PlaceResponse>(`http://127.0.0.1:3000/place?city=${city}`);
  }

}
