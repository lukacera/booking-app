import { Dispatch, SetStateAction } from "react";
import { HotelType } from "../types/HotelType";

export const fetchHotels = async (
    searchParamsIataCode: any,
    setHotels: Dispatch<SetStateAction<HotelType[]>>,
    amenities: string[]
) => {
    console.log(amenities)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            amenities: amenities
        })
    }
    console.log(requestOptions)
    console.log(typeof (requestOptions.body))
    const response = await fetch(`/api/hotels/${searchParamsIataCode.city}`, requestOptions);
    const fetchedData = await response.json()
    fetchedData.data?.data && setHotels(fetchedData.data.data)
}