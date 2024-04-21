"use client"
import React, { useRef, useEffect, Dispatch, SetStateAction } from "react"
import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";
import { FaWifi, FaParking, FaBus, FaUmbrellaBeach, FaHotTub } from "react-icons/fa";
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
import { RxCross1 } from "react-icons/rx";

const allFilters = [
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

const DropdownAllFilters: React.FC<{
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>
}> = ({ setIsDropdownOpen }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            dropdownRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" }
        );
    }, []);

    const closeDropdown = () => {
        gsap.fromTo(
            dropdownRef.current,
            { opacity: 1, y: 0 },
            {
                opacity: 0, y: -10, duration: 0.3, ease: "expo.out",
                onComplete() {
                    setIsDropdownOpen(false)

                }
            }
        );
    }
    return (
        <div className="absolute top-24 left-0" ref={dropdownRef}>
            <div className="mt-2 py-2 px-5 bg-white w-screen rounded-lg text-black shadow-2xl grid place-items-center gap-4 relative">
                <ul className="flex flex-wrap justify-center gap-5 mt-16">
                    {allFilters.map(filter => (
                        <div
                            key={uuidv4()}
                            className="max-w-[15rem] flex items-center gap-2 border-gold_1 border-2 rounded-lg justify-center py-2 px-5 cursor-pointer hover:bg-gray-300 hover:border-gray-300"
                        >
                            <div className="text-xl">{filter.icon}</div>
                            <span>{filter.name}</span>
                        </div>
                    ))}
                </ul>
                <RxCross1
                    className="absolute text-2xl top-5 right-10 cursor-pointer"
                    onClick={() => closeDropdown()}
                />
                <span className="px-5 py-3 bg-gold_1 rounded-lg opacity-100">
                    Apply filters
                </span>
            </div>
        </div>
    );
};

export default DropdownAllFilters;