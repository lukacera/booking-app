import { NextResponse, NextRequest } from 'next/server'
import queryString from 'query-string';

interface CustomRequest extends NextRequest {
    context: {
        token: string;
    }
}
export async function middleware(req: CustomRequest) {

    // Pass required credentials into request body 
    const requestBody = queryString.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.AMADEUS_KEY,
        client_secret: process.env.AMADEUS_SECRET
    });

    // Request options for fetching
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody
    };

    try {
        // Make the POST request to the Amadeus API
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', requestOptions);

        // Check if the request was successful
        if (response.ok) {
            console.log("Response is ok!")
            // Parse the response JSON
            const data = await response.json();

            const requestHeaders = new Headers(req.headers)
            requestHeaders.set('x-access-token', data.access_token)

            // You can also set request headers in NextResponse.rewrite
            const res = NextResponse.next({
                request: {
                    // New request headers
                    headers: requestHeaders
                },
            })

            return res;
        } else {
            throw new Error(`Failed to fetch access token: ${response.statusText}`);
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching access token:', error);

        return NextResponse.json({ message: "Authentication failed!" })
    }
}