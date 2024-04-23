"use client"
import React, { useState } from "react"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
import { FilterType } from "../../types/FilterType"

import { v4 as uuidv4 } from "uuid"
const AllHotels = () => {
    const [allFilters, setAllFilters] = useState<FilterType[]>([
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
    ])

    return (
        <>
            <Header />
            {/* Set mt to 8.5 and calculate height based on height of header */}
            <main className="grid grid-cols-[15%_85%] mt-[8.5rem] min-h-[calc(100vh-8.5rem)]
            bg-white">
                {/* Sidebar with all filters */}
                <div className="w-full flex flex-col items-center
                py-16 border-r-2 border-black">
                    <h4 className="font-bold text-xl">
                        All filters
                    </h4>
                    <div className="grid place-items-center gap-3 my-6">
                        {allFilters.map(filter => (
                            <div key={uuidv4()} className="w-full grid items-center 
                            grid-cols-[10%_80%_10%] gap-2">
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

                <div className="w-full">
                    gdfgdf
                </div>
            </main>
            <Footer />
        </>
    )
};

export default AllHotels;
