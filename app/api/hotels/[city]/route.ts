import { NextApiRequest, NextApiResponse } from 'next';

/*
    Returns list of hotels in a city, by IATA code
*/
export const GET = async (req: NextApiRequest, { params }: { params: { city: string } },
    res: NextApiResponse) => {
    try {
        const city = params.city
        console.log(city)
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}`);

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
