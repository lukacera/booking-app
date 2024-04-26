import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { substring: string } }) => {

    try {
        // Get substring that user inputed from params
        const keyword = params.substring

        const token = req.headers.get("x-access-token")

        // Request options to pass into fetch options
        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },

        }
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${keyword}&max=8`, requestOptions)

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
        return NextResponse.json({ message: "Error occured while fetching IATA code" });
    }
}