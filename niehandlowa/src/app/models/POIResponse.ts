export class POIResponse {
    public results: {
        formatted_address: string;
        geometry: {
            location: {
                lat: number;
                lng: number;
            },
            location_type: string;
            viewport: {
                northeast: {
                    lat: number;
                    lng: number;
                },
                southwest: {
                    lat: number,
                    lng: number
                }
            }
        },
        place_id: string;
        types: string[]
    };
    public status: string;
}