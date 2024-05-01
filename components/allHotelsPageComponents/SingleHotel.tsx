"use client"
import React from "react"
import defaultHotelImg from "../../public/images/defaultHotelPicture.jpg"
import Image from "next/image";
import { HotelType } from "../../types/HotelType"
import { v4 as uuidv4 } from "uuid"
import { amenityIcons } from "../../helpers/amenityIcons";
import Link from "next/link";

const SingleHotel: React.FC<{ hotel: HotelType }> = ({ hotel }) => {
    return (
        <Link href={`/allhotels/${hotel.iataCode}/${hotel.hotelId}`}>
            <div className="flex border-r-2
        border-gray-200">
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

        </Link>
    )
};

export default SingleHotel;
