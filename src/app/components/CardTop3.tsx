"use client"

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { IoArrowUpOutline } from "react-icons/io5";
import { GiPodium } from "react-icons/gi";

const outfit = Outfit({ subsets: ["latin"] });

const CardTop3: React.FC<{ hotel: any, index: number }> = ({ hotel, index }) => {
    const descRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);

    const handleArrowHover = () => {
        if (descRef.current) {
            descRef.current.style.height = expanded ? "20%" : "100%";
            setExpanded(!expanded);
        }
    };

    return (
        <div className="grid place-items-center gap-5">
            <div className="text-white w-[20rem] h-[22rem] rounded-xl relative overflow-hidden">

                {/* Place image to be absolute */}
                <Image src={hotel.image} alt="" width={400} height={400} className="w-full h-full absolute top-0" />
                {/* Text part of hotel's card */}
                <div ref={descRef}
                    className={`w-full bg-black transition-height duration-300 ease-out
                    flex flex-col  items-center absolute bottom-0 left-0 
                    px-4 pb-4 text-center ${outfit.className}
                    justify-end ${expanded ? "h-full" : "h-[20%]"}`}
                    onMouseEnter={handleArrowHover}
                    onMouseLeave={handleArrowHover}
                >
                    {expanded && (
                        <div className="flex flex-col justify-between h-full
                            pb-20">
                            <h3 className="pt-3 text-2xl text-orange_1">
                                {hotel.name.length > 20 ? <>{hotel.name.slice(0, 20)}...</> : <>{hotel.name} </>}
                            </h3>
                            {hotel.description.length > 200 ? (
                                <p className="px-5 text-sm">{hotel.description.slice(0, 200)}...</p>
                            ) : (
                                <p className="px-5">{hotel.description}</p>
                            )}
                            <span className="p-1 underline">Click for more info</span>
                        </div>
                    )}
                    {/* Arrow */}
                    {!expanded && <IoArrowUpOutline size={25} />}
                </div>
            </div>
            <div className={`flex items-center gap-3
                  ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-600"
                    : index === 2 ? "text-yellow-700" : null
                }`}>
                <GiPodium size={35} />
                <span className="text-[1.6rem] pt-2">
                    #{index + 1}
                </span>
            </div>
        </div>
    );
};

export default CardTop3;
