import React from "react"
import Image from "next/image";
import { v4 as uuidv4 } from "uuid"
import { CityType } from "../../types/CityType";

const DropdownSearchCities: React.FC<{
    citiesHeader: CityType[]
}> = ({ citiesHeader }) => {
    return (
        <div className="absolute top-16 left-0 bg-white z-10
        flex flex-col gap-3 w-full rounded-t-md 
        py-5 rounded-b-sm
        shadow-[20px_35px_30px_-15px_rgba(0,0,0,0.3)]">
            {citiesHeader.map(city => (
                <div key={uuidv4()} className="flex 
            items-center px-5 gap-5">
                    <Image src={`https://countryflagsapi.netlify.app/flag/${city.address.countryCode.toLowerCase()}.svg`}
                        alt="" width={200} height={200}
                        className="w-10 rounded-sm" />
                    <span>
                        {city.name}, {city.address.countryCode}
                    </span>
                </div>
            ))}
        </div>
    )
};

export default DropdownSearchCities;
