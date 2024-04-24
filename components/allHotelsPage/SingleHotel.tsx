"use client"
import React, { ReactElement } from "react"
import defaultHotelImg from "../../public/images/defaultHotelPicture.jpg"
import Image from "next/image";
import { HotelType } from "../../types/HotelType"
import { v4 as uuidv4 } from "uuid"
import { FaWifi, FaParking, FaBus, FaUmbrellaBeach, FaHotTub, FaSquare, FaStar } from "react-icons/fa";
import { TbAirConditioning, TbMassage } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import {
    MdPets, MdBusinessCenter, MdMeetingRoom, MdSportsTennis, MdGolfCourse,
    MdKitchen, MdCasino, MdTableBar, MdRoomService
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { BsUniversalAccess } from "react-icons/bs";
import { PiTelevisionSimpleFill } from "react-icons/pi";

const amenityIcons: { [key: string]: ReactElement } = {
    "AIR_CONDITIONING": <TbAirConditioning />,
    "RESTAURANT": <IoMdRestaurant />,
    "PARKING": <FaParking />,
    "PETS_ALLOWED": <MdPets />,
    "AIRPORT_SHUTTLE": <FaBus />,
    "BUSINESS_CENTER": <MdBusinessCenter />,
    "WIFI": <FaWifi />,
    "MEETING_ROOMS": <MdMeetingRoom />,
    "NO_KID_ALLOWED": <LuBaby />,
    "TENNIS": <MdSportsTennis />,
    "GOLF": <MdGolfCourse />,
    "KITCHEN": <MdKitchen />,
    "BEACH": <FaUmbrellaBeach />,
    "CASINO": <MdCasino />,
    "JACUZZI": <FaHotTub />,
    "SOLARIUM": <BsUniversalAccess />,
    "MASSAGE": <TbMassage />,
    "MINIBAR": <MdTableBar />,
    "TELEVISION": <PiTelevisionSimpleFill />,
    "ROOM_SERVICE": <MdRoomService />,
};


const SingleHotel: React.FC<{ hotel: HotelType }> = ({ hotel }) => {

    // Function that renders number of stars
    const renderStars = () => {
        const stars = [];
        if (hotel.rating) {
            for (let i = 0; i < hotel.rating; i++) {
                stars.push(<FaStar key={i} className="text-gold_1" />);
            }
        }

        return stars;
    }

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/hotels/${hotel.hotelId}`)
            const data = await res.json()

            console.log(data)
        } catch (error) {
            console.log("Error occured: " + error)
        }
    }
    return (
        <div key={uuidv4()} className="flex border-r-2
        border-gray-200"
            onClick={() => fetchData()}>
            <div className="pl-4 pb-4 pt-4 pr-2">
                <Image alt="" src={defaultHotelImg}
                    width={200} height={200}
                    className="w-[15rem] aspect-square rounded-md"
                    title={hotel.name} />
            </div>
            <div className="grid grid-rows-[25%_50%_25%] w-full">
                {/* Container for hotel name and stars*/}
                <div className="grid grid-cols-2 pt-2">
                    <span className="flex justify-start items-center 
                    text-brown_1 font-bold pl-2">
                        {hotel.name}
                    </span>
                    <div className="flex items-center justify-center gap-5">
                        <div className="flex gap-4 text-xl">
                            {renderStars().map(star => (
                                <div key={uuidv4()}>
                                    {star}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <p className="text-sm pl-">
                        Discover a luxurious retreat nestled in the heart
                        of a bustling city. With breathtaking views of
                        the skyline, this hotel offers an unforgettable
                        experience for travelers seeking comfort and style.
                        Guests can indulge in spacious rooms adorned with
                        modern amenities and elegant decor. Whether visiting
                        for business or leisure, the attentive staff is
                        dedicated to ensuring every stay is nothing short
                        of extraordinary. Guests can relax by the rooftop pool...
                    </p>
                </div>
                {/*
                Container for Amenities of hotel
                It will display logo only if it is found in
                amenityIcons map
                */}
                <div className="flex items-end gap-2 px-3
                pb-4">
                    {hotel.amenities?.map(amenity => (
                        amenityIcons[amenity] ? (
                            <div key={uuidv4()} className="text-xl
                            p-2 rounded-2xl bg-brown_1
                            text-white">
                                {amenityIcons[amenity]}
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
};

export default SingleHotel;
