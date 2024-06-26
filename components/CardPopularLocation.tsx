"use client"
import React, { useContext, useRef } from "react"
import Image from "next/image";
import { Kalam } from "next/font/google";
import Link from "next/link";
import { SelectedCityContext } from "../contexts/SelectedCityHook";

const kalam = Kalam({ subsets: ["latin"], weight: "400" })

const CardPopularLocation: React.FC<{ location: any }> = ({ location }) => {
    const imageRef = useRef<HTMLImageElement>(null)

    const handleHover = () => {
        if (imageRef.current) {
            imageRef.current.classList.add("scale-125", "overflow-hidden")
        }
    }
    const handleMouseLeave = () => {
        if (imageRef.current) {
            imageRef.current.classList.remove('scale-125', 'overflow-hidden');
        }
    };

    const { setSelectedCity } = useContext(SelectedCityContext)
    return (
        <Link href={`/allhotels/${location.IATA}`}>
            <div className="flex relative w-[calc(100%-3rem)] mx-auto aspect-square
                md:w-[30rem] md:h-[20rem] overflow-hidden"
                onClick={() => setSelectedCity(location.city)}>
                <Image src={location.image} alt=""
                    width={400} height={400}
                    className="w-full h-full opacity-95 rounded-xl
                duration-500" ref={imageRef} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b 
                    from-transparent to-black rounded-lg cursor-pointer"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}></div>

                <div className="absolute bottom-5 right-5 flex 
                    items-center gap-3">
                    <Image src={location.flag} alt=""
                        height={200} width={200} className="w-[3.5rem] aspect-square
                        rounded-full"  />
                    <span className={`text-white ${kalam.className}
                                    text-xl font-bold`}>
                        {location.country}, {location.city}
                    </span>
                </div>
            </div>

        </Link>
    )
};

export default CardPopularLocation;
