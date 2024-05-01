import { NextRequest, NextResponse } from 'next/server';
import { HotelType } from '../../../../../types/HotelType';

export const GET = async (req: NextRequest, { params }: { params: { hotel: string } }) => {
    console.log("Initializing fetch of single hotel...")

    try {
        // Get token from header which is set by middleware 
        const token = req.headers.get("x-access-token");
        const hotelID = params.hotel;

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };

        const apiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels?hotelIds=${hotelID}`
        const ratingURL = `https://test.api.amadeus.com/v2/e-reputation/hotel-sentiments?hotelIds=${hotelID}`

        // Fetch data from the first API
        const responseHotel = await fetch(apiUrl, requestOptions);
        if (!responseHotel.ok) {
            throw new Error("Failed to fetch hotel data!");
        }
        const dataHotel = await responseHotel.json();
        const hotel: HotelType = dataHotel.data;

        // Fetch data from the second API
        const responseRatings = await fetch(ratingURL, requestOptions);
        if (!responseRatings.ok) {
            // Handle error for ratings API
            throw new Error("Failed to fetch ratings data!");
        }
        const dataRatings = await responseRatings.json();

        // If ratings exist for this hotel, return them along with hotel data to the client side
        if (dataRatings.data) {
            return NextResponse.json({
                hotel: hotel,
                ratings: dataRatings.data
            });
        }

        // Return just hotel data to the client side, in case ratings do not exist for this hotel
        return NextResponse.json({
            hotel: hotel
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "An error occurred" });
    }
};
