import { Coordinate } from '../../models/response/place/coordinate.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() { }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        const coord: Coordinate = {
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString()
        };
        resolve(coord);
      }, err => {
        reject(err);
      });
    });
  }

}
