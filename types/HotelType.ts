export type HotelType = {
    chainCode: string;
    iataCode: string;
    dupeId: number;
    name: string;
    hotelId: string;
    geoCode: {
        latitude: number;
        longitude: number;
    };
    address: {
        countryCode: string;
    };
    amenities?: string[];
    rating?: number;
    lastUpdate?: string;
};