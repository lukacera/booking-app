import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


/*
This function returns access token which will be passed to
other GET functions for handling API calls
*/
export async function middleware(request: NextRequest) {

    // Pass required credentials into request body 
    const requestBody = {
        grant_type: 'client_credentials',
        client_id: process.env.AMADEUS_KEY,
        client_secret: process.env.AMADEUS_SECRET
    };

    // Request options for fetching
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(requestBody),
    };

    try {
        // Make the POST request to the Amadeus API
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', requestOptions);

        // Check if the request was successful
        if (response.ok) {
            // Parse the response JSON
            const data = await response.json();

            // Pass access token to next function
            return NextResponse.json(data.access_token);
        } else {
            throw new Error(`Failed to fetch access token: ${response.statusText}`);
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching access token:', error);

        return NextResponse.json({ message: "Authentication failed!" })
    }
}

// Match paths in which middleware will take place/effect
export const config = {
    matcher: '/app/api/hotels/:path', // Set up wildcard, so every file under hotels will call this middleware 
}
