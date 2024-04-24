import { NextApiRequest, NextApiResponse } from 'next';

/*
    Returns list of hotels in a city, by IATA code
*/
interface CustomRequest extends NextApiRequest {
    token: string
}

export const GET = async (req: CustomRequest, { params }: { params: { city: string } },
    res: NextApiResponse) => {
    try {
        const token = req.token
        console.log(req)
        console.log(`Token: ${token}`)
        const city = params.city
        console.log(city)
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },

        }
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}`, requestOptions);

        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return res.json({
            message: "Luka je prijavljen!",
            data: data
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(404).json({ message: "Error occured" });
    }
}
