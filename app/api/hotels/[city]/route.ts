import { NextRequest, NextResponse } from 'next/server';
import { HotelType } from '../../../../types/HotelType';
/*
    Returns list of hotels in a city, by IATA code
*/
interface ExtendedRequestBody {
    amenities: string[]; // Assuming amenities is an array of strings
}
export const POST = async (req: NextRequest & { body: ExtendedRequestBody }, { params }: { params: { city: string } }) => {
    try {
        // Get token from header which is set by middleware 
        const token = req.headers.get("x-access-token");
        // Get city from route params
        const city = params.city;
        // Get amenities from request body
        const bodyText = await req.text();
        const requestBody = JSON.parse(bodyText);
        // Get filters from parsed request body
        const amenities: string[] = requestBody.amenities;
        const joinedAmenities = amenities.join(",")
        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };

        let apiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}
        &amenities=WIFI,AIR_CONDITIONING,RESTAURANT,PARKING,PETS_ALLOWED,AIRPORT_SHUTTLE,BUSINESS_CENTER,MEETING_ROOMS,NO_KID_ALLOWED,TENNIS,GOLF,KITCHEN,BEACH,CASINO,JACUZZI,SOLARIUM,MASSAGE,MINIBAR,TELEVISION,ROOM_SERVICE`;

        // Append amenities to API URL if there are any

        if (amenities.length > 0) {
            apiUrl += `&amenities=${joinedAmenities}`;
        }

        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }
        interface DataType {
            data: HotelType[]
        }
        const data: DataType = await response.json();
        // Filter hotels based on amenities
        const filteredHotels = data.data.filter(hotel => {
            // Check if the hotel has all specified amenities
            if (amenities.length > 0) {
                return amenities.every(amenity => hotel.amenities?.includes(amenity));
            }
            return true
        });
        // Return data
        return NextResponse.json({
            data: filteredHotels
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "An error occurred" });
    }
};