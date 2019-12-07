import { Currently } from './currently.model';
import { Hourly } from './hourly.model';
import { Daily } from './daily.model';
import { Flags } from './flags.model';
import { Minutely } from './minutely.model';

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    timezone: string;
    currently: Currently;
    minutely: Minutely;
    hourly: Hourly;
    daily: Daily;
    flags: Flags;
    offset: number;
}
