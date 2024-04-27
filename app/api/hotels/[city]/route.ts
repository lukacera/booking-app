import { NextRequest, NextResponse } from 'next/server'

/*
    Returns list of hotels in a city, by IATA code
*/


export const GET = async (req: NextRequest, { params }: { params: { city: string } }) => {

    try {
        // Get token from header which is set by middleware 
        const token = req.headers.get("x-access-token")

        // Get city from route params
        const city = params.city

        console.log("Fetching...")
        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },

        }
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}`, requestOptions);

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
