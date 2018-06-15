import { OpeningHour } from './OpeningHour';
import { POIType } from './POIType';

export class POI {
  id: number;
  name: string;
  owner: string;
  address: string;
  latitude: number;
  longitude: number;
  type: POIType;
  openingHours: OpeningHour[];
  likesCount?: number;
  dislikesCount?: number;
  description: string;
  image?: object;
}
