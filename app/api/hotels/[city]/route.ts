import { NextRequest, NextResponse } from 'next/server'

/*
    Returns list of hotels in a city, by IATA code
*/

interface ExtendedRequestBody {
    amenities: string[]; // Assuming amenities is an array of strings
}

export const POST = async (req: NextRequest & { body: ExtendedRequestBody }, { params }: { params: { city: string } }) => {

    try {
        console.log("Req.body is equal to:")
        console.log(req.body)
        // Get token from header which is set by middleware 
        const token = req.headers.get("x-access-token")

        // Get city from route params
        const city = params.city

        // Get filters from request body
        const bodyText = await req.text();
        const requestBody = JSON.parse(bodyText);

        // Get filters from parsed request body
        const amenities = requestBody.amenities;

        const joinedAmenities = amenities.join(",")
        console.log("Joined amenities are equal:")
        console.log(typeof (joinedAmenities))

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }

        let response;
        if (amenities.length > 0) {
            response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}&amenities=${joinedAmenities}`, requestOptions);
        } else {
            response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}`, requestOptions);
        }

        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();

        // Return data
        return NextResponse.json({
            data: data
        })
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Error occured" });
    }
}
