import { Dispatch, SetStateAction } from "react";
import { HotelType } from "../types/HotelType";

export const fetchHotels = async (
    searchParamsIataCode: any,
    setHotels: Dispatch<SetStateAction<HotelType[]>>,
    filters: string[]
) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            amenities: filters
        })
    }

    const response = await fetch(`/api/hotels/${searchParamsIataCode.city}`, requestOptions);
    const fetchedData = await response.json()
    fetchedData.data && setHotels(fetchedData.data)
}