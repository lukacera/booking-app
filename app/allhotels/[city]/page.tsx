"use client"
import React, { useContext, useEffect, useState } from "react"
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
import { BiFridge } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FilterType } from "../../../types/FilterType"

import { v4 as uuidv4 } from "uuid"

import SingleHotel from "../../../components/allHotelsPageComponents/SingleHotel";
import { SelectedCityContext } from "../../../contexts/SelectedCityHook";
import { HotelType } from "../../../types/HotelType";
import { useParams } from "next/navigation";

const AllHotels = () => {

    const allFilters: FilterType[] = [
        {
            icon: <FaWifi />,
            name: "Wifi"
        },
        {
            icon: <TbAirConditioning />,
            name: "Air Conditioning"
        },
        {
            icon: <IoMdRestaurant />,
            name: "Restaurant"
        },
        {
            icon: <FaParking />,
            name: "Parking"
        },
        {
            icon: <MdPets />,
            name: "Pets allowed"
        },
        {
            icon: <FaBus />,
            name: "Airport Shuttle"
        },
        {
            icon: <MdBusinessCenter />,
            name: "Business center"
        },
        {
            icon: <MdMeetingRoom />,
            name: "Meeting Rooms"
        },
        {
            icon: <LuBaby />,
            name: "No kids allowed"
        },
        {
            icon: <MdSportsTennis />,
            name: "Tennis"
        },
        {
            icon: <MdGolfCourse />,
            name: "Golf"
        },
        {
            icon: <MdKitchen />,
            name: "Kitchen"
        },
        {
            icon: <FaUmbrellaBeach />,
            name: "Beach"
        },
        {
            icon: <MdCasino />,
            name: "Casino"
        },
        {
            icon: <FaHotTub />,
            name: "Jacuzzi"
        },
        {
            icon: <BsUniversalAccess />,
            name: "Solarium"
        },
        {
            icon: <TbMassage />,
            name: "Massage"
        },
        {
            icon: <MdTableBar />,
            name: "Bar"
        },
        {
            icon: <BiFridge />,
            name: "Minibar"
        },
        {
            icon: <PiTelevisionSimpleFill />,
            name: "TV"
        },
        {
            icon: <MdRoomService />,
            name: "Room Service"
        }
    ]

    const { selectedCity } = useContext(SelectedCityContext)

    const [hotels, setHotels] = useState<HotelType[]>([])

    const searchParamsIataCode = useParams()

    useEffect(() => {
        const fetchHotels = async () => {
            console.log(searchParamsIataCode.city)
            const response = await fetch(`/api/hotels/${searchParamsIataCode.city}`);
            const fetchedData = await response.json()
            console.log(fetchedData.data.data)
            setHotels(fetchedData.data.data)
        }

        console.log("Fetching selected city...")
        fetchHotels()
    }, [searchParamsIataCode])

    return (
        <>
            <Header />
            {/* Set mt to 8.5 and calculate height based on height of header */}
            <main className="grid grid-cols-[25%_75%] mt-[8.5rem] min-h-[calc(100vh-8.5rem)]
            bg-white w-[80vw] mx-auto">
                {/* Sidebar with all filters */}
                <div className="w-full flex flex-col items-center pt-32 sticky top-[8.5rem]">
                    <h4 className="font-bold text-xl mb-10">
                        All filters
                    </h4>
                    <div className="gap-3 my-6 grid place-items-center px-2">
                        {allFilters.map(filter => (
                            <div key={uuidv4()} className="w-full grid items-center
                                grid-cols-[10%_75%_15%] gap-2">
                                {filter.icon}
                                <span>
                                    {filter.name}
                                </span>
                                <FaSquare className="text-white border-2
                                    border-black cursor-pointer" />
                            </div>
                        ))}
                    </div>
                    <span className="px-2 py-4 rounded-xl border-2
                        bg-brown_1 text-white">
                        Apply filters
                    </span>
                </div>

                {/* Main part of page / all hotels */}

                <div className="grid grid-rows-[10rem,auto]">
                    <div className="grid place-items-center">
                        <h2 className="font-bold text-2xl">
                            Hotels in { }
                        </h2>
                    </div>
                    <div className="w-[90%] mx-auto mb-20 flex flex-col gap-10">
                        {hotels.length > 0 && hotels.map(hotel => (
                            <SingleHotel hotel={hotel} key={uuidv4()} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default AllHotels;
