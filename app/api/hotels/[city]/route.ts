import { NextRequest, NextResponse } from 'next/server';
import { HotelType } from '../../../../types/HotelType';

/*
    Returns list of hotels in a city, by IATA code
*/

interface ExtendedRequestBody {
    amenities: string[]; // Assuming amenities is an array of strings
}

interface DataType {
    data: HotelType[]
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

        const amenitiesList = ["AIR_CONDITIONING", "RESTAURANT", "PARKING", "PETS_ALLOWED", "AIRPORT_SHUTTLE",
            "BUSINESS_CENTER", "WIFI", "MEETING_ROOMS", "NO_KID_ALLOWED", "TENNIS",
            "GOLF", "KITCHEN", "BEACH", "CASINO", "JACUZZI", "SOLARIUM", "MASSAGE",
            "MINIBAR", "TELEVISION", "ROOM_SERVICE"
        ];

        // Function to chunk the array into groups of size chunkSize
        const chunkArray = (arr: string[], chunkSize: number) => {
            const chunkedArray = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                chunkedArray.push(arr.slice(i, i + chunkSize));
            }
            return chunkedArray;
        };

        // Define chunk size
        const chunkSize = 3;

        // Divide amenitiesList into chunks of three
        const chunks = chunkArray(amenitiesList, chunkSize);

        // Array which will be used to store hotels 
        let fetchedHotels: HotelType[] = []
        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };

        // Asynchronous function that is responsible for fetching hotels by chunked amenities
        const fetchHotels = async (chunkedAmenities: string) => {
            const apiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}&amenities=${chunkedAmenities}`;
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Failed to fetch data!");
            }
            const data: DataType = await response.json();
            return data.data;
        };

        const processChunks = async () => {
            for (const chunk of chunks) {
                try {
                    // Convert the chunk into comma-separated string format without quotes
                    const amenities = chunk.join(", ").replace(/"/g, '');

                    // Fetch hotels for the current chunk of amenities
                    const hotels = await fetchHotels(amenities);

                    hotels.forEach(hotel => fetchedHotels.push(hotel))
                } catch (error) {
                    console.error('Error fetching hotels:', error);
                }
            }
        };

        // Call the function to start processing chunks
        await processChunks();

        // Filter hotels based on amenities
        const filteredHotels = fetchedHotels.filter(hotel => {
            // Check if the hotel has all specified amenities
            if (amenities.length > 0) {
                return amenities.every(amenity => hotel.amenities?.includes(amenity));
            }
            return true
        });

        console.log(fetchedHotels.length)
        console.log(filteredHotels.length)
        // Return data
        return NextResponse.json({
            data: filteredHotels
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "An error occurred" });
    }
};
