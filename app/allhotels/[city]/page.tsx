"use client"
import React, { useContext, useEffect, useState, useTransition } from "react"
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { FaWifi, FaParking, FaBus, FaUmbrellaBeach, FaHotTub, FaSquare } from "react-icons/fa";
import { TbAirConditioning, TbMassage } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import {
    MdPets, MdBusinessCenter, MdMeetingRoom, MdSportsTennis, MdGolfCourse,
    MdKitchen, MdCasino, MdTableBar, MdRoomService
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { BsUniversalAccess } from "react-icons/bs";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FilterType } from "../../../types/FilterType"

import { v4 as uuidv4 } from "uuid"

import SingleHotel from "../../../components/allHotelsPageComponents/SingleHotel";
import { HotelType } from "../../../types/HotelType";
import { useParams } from "next/navigation";
import { fetchHotels } from "../../../utils/fetchHotelsCity";
import { SelectedCityContext } from "../../../contexts/SelectedCityHook";
import { Audio } from "react-loader-spinner"

const AllHotels = () => {

    const allFilters: FilterType[] = [
        {
            icon: <FaWifi />,
            name: "Wifi",
            amenity: "WIFI"
        },
        {
            icon: <TbAirConditioning />,
            name: "Air Conditioning",
            amenity: "AIR_CONDITIONING"
        },
        {
            icon: <IoMdRestaurant />,
            name: "Restaurant",
            amenity: "RESTAURANT"
        },
        {
            icon: <FaParking />,
            name: "Parking",
            amenity: "PARKING"
        },
        {
            icon: <MdPets />,
            name: "Pets allowed",
            amenity: "PETS_ALLOWED"
        },
        {
            icon: <FaBus />,
            name: "Airport Shuttle",
            amenity: "AIRPORT_SHUTTLE"
        },
        {
            icon: <MdBusinessCenter />,
            name: "Business center",
            amenity: "BUSINESS_CENTER"
        },
        {
            icon: <MdMeetingRoom />,
            name: "Meeting Rooms",
            amenity: "MEETING_ROOMS"
        },
        {
            icon: <LuBaby />,
            name: "No kids allowed",
            amenity: "NO_KID_ALLOWED"
        },
        {
            icon: <MdSportsTennis />,
            name: "Tennis",
            amenity: "TENNIS"
        },
        {
            icon: <MdGolfCourse />,
            name: "Golf",
            amenity: "GOLF"
        },
        {
            icon: <MdKitchen />,
            name: "Kitchen",
            amenity: "KITCHEN"
        },
        {
            icon: <FaUmbrellaBeach />,
            name: "Beach",
            amenity: "BEACH"
        },
        {
            icon: <MdCasino />,
            name: "Casino",
            amenity: "CASINO"
        },
        {
            icon: <FaHotTub />,
            name: "Jacuzzi",
            amenity: "JACUZZI"
        },
        {
            icon: <BsUniversalAccess />,
            name: "Solarium",
            amenity: "SOLARIUM"
        },
        {
            icon: <TbMassage />,
            name: "Massage",
            amenity: "MASSAGE"
        },
        {
            icon: <MdTableBar />,
            name: "Bar",
            amenity: "MINIBAR"
        },
        {
            icon: <PiTelevisionSimpleFill />,
            name: "TV",
            amenity: "TELEVISION"
        },
        {
            icon: <MdRoomService />,
            name: "Room Service",
            amenity: "ROOM_SERVICE"
        }
    ];
    const [hotels, setHotels] = useState<HotelType[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { selectedCity } = useContext(SelectedCityContext)

    // Get IATA code for selected city from params
    const searchParamsIataCode = useParams()

    // SelectedFilters will be an array of amenities, so it's string array
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    // Fetch hotels by IATA code that is found in URL
    useEffect(() => {
        fetchHotels(searchParamsIataCode, setHotels, selectedFilters)
        // Show data after 1.2s
        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
    }, [searchParamsIataCode, selectedFilters])


    const handleApplyFilters = () => {
        fetchHotels(searchParamsIataCode, setHotels, selectedFilters)
        console.log("Applying filters!")
    }
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
                        <div className="w-full flex flex-col items-center pt-32">
                            <h4 className="font-bold text-xl mb-10">
                                All filters
                            </h4>

                            {/* Map through all filters and display */}
                            <div className="gap-3 my-6 grid place-items-center px-2">
                                {allFilters.map(filter => (
                                    <div key={uuidv4()} className="w-full grid 
                                    items-center grid-cols-[10%_75%_15%] gap-2">
                                        {filter.icon}
                                        <span>
                                            {filter.name}
                                        </span>
                                        <FaSquare className="text-white border-2
                                        border-black cursor-pointer"
                                            onClick={() => setSelectedFilters(prevFilters => (
                                                [...prevFilters, filter.amenity]
                                            ))} />
                                    </div>
                                ))}
                            </div>

                            <span className="px-2 py-4 rounded-xl border-2
                            bg-brown_1 text-white"
                                onClick={() => handleApplyFilters()}>
                                Apply filters
                            </span>
                        </div>
                        {/* Main part of page / all hotels */}
                        <div className="grid grid-rows-[10rem,auto]">
                            <div className="grid place-items-center">
                                <h2 className="font-bold text-2xl flex items-center gap-2">
                                    Hotels in
                                    <span className="text-brown_1 italic">
                                        {selectedCity.name}
                                    </span>
                                </h2>
                            </div>
                            <div className="w-[90%] mx-auto mb-20 flex flex-col gap-10">
                                {hotels.length > 0 && hotels.map(hotel => (
                                    <SingleHotel hotel={hotel} key={uuidv4()} />
                                ))}
                                {hotels.length === 0 && (
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
