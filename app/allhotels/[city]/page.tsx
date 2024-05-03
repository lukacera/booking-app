"use client"
import React, { useContext, useEffect, useState } from "react"
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";


import { v4 as uuidv4 } from "uuid"

import SingleHotel from "../../../components/allHotelsPageComponents/SingleHotel";
import { HotelType } from "../../../types/HotelType";
import { useParams } from "next/navigation";
import { fetchHotels } from "../../../utils/fetchHotelsCity";
import { SelectedCityContext } from "../../../contexts/SelectedCityHook";
import { Audio } from "react-loader-spinner"
import SidebarFilters from "../../../components/allHotelsPageComponents/SidebarFilters";

const AllHotels = () => {

    const [hotels, setHotels] = useState<HotelType[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { selectedCity } = useContext(SelectedCityContext)

    // Get IATA code for selected city from params
    const searchParamsIataCode = useParams()

    // SelectedFilters will be an array of amenities, so it's string array
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    // Fetch hotels on change of both IATA code and filters 
    useEffect(() => {
        setIsLoading(true)
        fetchHotels(searchParamsIataCode, setHotels, selectedFilters)
        // Show data after 1s
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [searchParamsIataCode, selectedFilters])

    return (
        <>
            <Header />
            {/* Set mt to 8.5 and calculate height based on height of header */}
            <div className={`mt-[8.5rem] min-h-[calc(100vh-8.5rem)]
                bg-white w-[80vw] mx-auto mb-32 
                ${isLoading && "grid place-items-center"}`}>
                {isLoading && (
                    <Audio width={150} height={150} color="#ebc417" />
                )}
                {!isLoading && (
                    <main className="grid grid-cols-[25%_75%]">
                        {/* Sidebar with all filters */}
                        <SidebarFilters
                            setSelectedFilters={setSelectedFilters}
                            selectedFilters={selectedFilters} />
                        {/* Main part of page / all hotels */}
                        <div className="grid grid-rows-[10rem,auto]">
                            <div className="grid place-items-center">
                                <h2 className="font-bold text-2xl flex items-center gap-2">
                                    Hotels in
                                    <span className="text-brown_1 italic">
                                        {selectedCity}
                                    </span>
                                </h2>
                            </div>
                            <div className="w-[90%] mx-auto mb-20 flex flex-col gap-10">
                                {hotels?.length > 0 && hotels.map(hotel => (
                                    <SingleHotel hotel={hotel} key={uuidv4()} />
                                ))}
                                {hotels?.length === 0 && (
                                    <div className="flex justify-center items-start pt-32 h-full">
                                        <span className="font-bold text-4xl text-brown_1">
                                            No hotels found!
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                )}
            </div>
            <Footer />
        </>
    )
};

export default AllHotels;
