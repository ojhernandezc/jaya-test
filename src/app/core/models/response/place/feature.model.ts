import { Context } from './context.model';
import { Properties } from './properties.model';
import { Geometry } from './geometry.model';

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text: string;
    place_name: string;
    bbox: number[];
    center: number[];
    geometry: Geometry;
    context: Context[];
}
