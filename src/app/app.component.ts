import { DailyData } from './core/models/response/weather/daily-data.model';
import { HourlyData } from './core/models/response/weather/hourly-data.model';
import { WeatherResponse } from './core/models/response/weather/weather-response.model';
import { PlaceResponse } from './core/models/response/place/place-response.model';
import { PlaceService } from './core/services/place/place.service';
import { Coordinate } from './core/models/response/place/coordinate.model';
import { WeatherService } from './core/services/weather/weather.service';
import { PositionService } from './core/services/position/position.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jaya-test';

  constructor(
    private positionService: PositionService,
    private weatherService: WeatherService,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.positionService.getCurrentPosition()
      .then((coordinate: Coordinate) => {
        this.weatherService.getWeatherData(
          coordinate.longitude,
          coordinate.latitude
        ).subscribe((data: WeatherResponse) => {
          data.hourly.data.map((d: HourlyData) => {
            const dateObj = new Date(d.time * 1000);
            console.log(dateObj.toUTCString());
          });
        });
      });

    this.placeService.getPlaces('miami').subscribe((places: PlaceResponse) => {
      places.features.map((place) => console.log(place));
    });
  }

}
