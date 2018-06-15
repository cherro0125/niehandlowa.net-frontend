export default class POI {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public owner: string,
    public longitude: number,
    public latitude: number,
    public description: string,
    public openDate: Date,
    public closeDate: Date) {}



}
