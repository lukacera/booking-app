import { Dispatch, SetStateAction } from "react";
import { HotelType } from "../types/HotelType";

export const fetchHotels = async (
    searchParamsIataCode: any,
    setHotels: Dispatch<SetStateAction<HotelType[]>>
) => {
    const response = await fetch(`/api/hotels/${searchParamsIataCode.city}`);
    const fetchedData = await response.json()
    setHotels(fetchedData.data.data)
}