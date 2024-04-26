export type CityType = {
    address: {
        countryCode: string;
    };
    geoCode?: {
        latitude: number;
        longitude: number;
    };
    iataCode: string;
    name: string;
    type: "location";
    subType: string;

}