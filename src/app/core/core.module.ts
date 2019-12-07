import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionService } from './services/position/position.service';
import { WeatherService } from './services/weather/weather.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PositionService,
    WeatherService
  ]
})
export class CoreModule { }
