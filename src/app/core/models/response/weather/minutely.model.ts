import { MinutelyData } from './minutely-data.model';
export interface Minutely {
    summary: string;
    icon: string;
    data: MinutelyData[];
}
