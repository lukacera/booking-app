import { NextRequest, NextResponse } from 'next/server'

/*
    Returns list of hotels in a city, by IATA code
*/

interface CustomRequest extends NextRequest {
    context: {
        token: string;
    }
}

export const GET = async (req: CustomRequest, { params }: { params: { city: string } }) => {

    try {
        const token = req.headers.get("x-access-token")
        const city = params.city
        console.log(city)
        console.log(`Token: ${token}`)
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

        return NextResponse.json({
            message: "Success!",
            data: data
        })
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Error occured" });
    }
}
