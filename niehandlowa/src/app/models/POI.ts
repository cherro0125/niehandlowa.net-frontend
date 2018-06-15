import { OpeningHour } from "./OpeningHour";

export default class POI {
  id: number;
  name: string;
  owner: string;
  address: string;
  latitude: number;
  longitude: number;
  type: number;
  openingHours: OpeningHour[];
  likesCount: number;
  dislikesCount: number;
  description: string;
  image: object;
}