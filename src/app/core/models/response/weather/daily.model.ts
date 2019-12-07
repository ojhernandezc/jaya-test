import { DailyData } from './daily-data.model';

export interface Daily {
    summary: string;
    icon: string;
    data: DailyData[];
}
