import { WeatherResponse } from './../../models/response/weather/weather-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(longitude: string, latitude: string) {
    return this.http.get<WeatherResponse>(`http://127.0.0.1:3000/weather?longitude=${longitude}&latitude=${latitude}`);
  }

}
