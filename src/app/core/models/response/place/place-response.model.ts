import { Feature } from './feature.model';

export interface PlaceResponse {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}
