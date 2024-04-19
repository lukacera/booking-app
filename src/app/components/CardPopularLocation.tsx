import React from "react"
import Image from "next/image";
import { Kalam } from "next/font/google";


const kalam = Kalam({ subsets: ["latin"], weight: "400" })

const CardPopularLocation: React.FC<{ location: any }> = ({ location }) => {
    return (
        <div className="flex relative
    w-[30rem] h-[20rem]">
            <Image src={location.image} alt=""
                width={400} height={400}
                className="w-full h-full opacity-95 rounded-xl" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
      from-transparent to-black rounded-lg"></div>

            <div className="absolute bottom-5 right-5 flex 
      items-center gap-3">
                <Image src={location.flag} alt=""
                    height={200} width={200} className="w-[3.5rem] aspect-square
          rounded-full"
                />
                <span className={`text-white ${kalam.className}
        text-xl font-bold`}>
                    {location.place}
                </span>
            </div>
        </div>
    )
};

export default CardPopularLocation;
