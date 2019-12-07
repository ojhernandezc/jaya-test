import { HourlyData } from './hourly-data.model';

export interface Hourly {
    summary: string;
    icon: string;
    data: HourlyData[];
}
