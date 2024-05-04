import React, { useContext } from "react"
import Image from "next/image";
import { v4 as uuidv4 } from "uuid"
import { CityType } from "../../types/CityType";
import { Grid } from "react-loader-spinner"
import { SelectedCityContext } from "../../contexts/SelectedCityHook";
import Link from "next/link";

const DropdownSearchCities: React.FC<{
    citiesHeader: CityType[],
    isFetching: boolean,
    searchQuery: string
}> = ({ citiesHeader, isFetching, searchQuery }) => {

    const { setSelectedCity } = useContext(SelectedCityContext)

    // Function that handles click on the city
    const handleClick = (city: CityType) => {
        setSelectedCity(city.name)
    }

    citiesHeader = citiesHeader.filter(city => city.iataCode !== undefined)
    if (isFetching) {
        return (
            <div className="absolute top-16 left-0 bg-white z-10
                    w-full py-12 rounded-sm
                    grid place-items-center
                    shadow-[20px_35px_30px_-15px_rgba(0,0,0,0.3)]">
                <Grid width={50} height={50} color="#ebc417" />
            </div>
        )
    }

    else if (!isFetching && citiesHeader.length > 0) {
        return (
            <div className="absolute top-16 left-0 bg-white z-10
            flex flex-col gap-3 w-full rounded-t-md 
            py-5 rounded-b-sm
            shadow-[20px_35px_30px_-15px_rgba(0,0,0,0.3)]">
                {citiesHeader.map(city => (
                    <Link
                        href={`/allhotels/${city.iataCode}`}
                        key={uuidv4()} >
                        <div className="flex 
                    items-center px-5 gap-5"
                            onClick={() => handleClick(city)}>
                            <Image src={`https://countryflagsapi.netlify.app/flag/${city.address.countryCode.toLowerCase()}.svg`}
                                alt="" width={200} height={200}
                                className="w-10 rounded-sm" />
                            <span>
                                {city.name}, {city.address.countryCode}
                            </span>
                        </div>

                    </Link>
                ))}
            </div>
        )
    }

    else if (!isFetching && citiesHeader.length === 0 && searchQuery.length > 2) {
        return (
            <div className="absolute top-16 left-0 bg-white z-10
            w-full py-3 text-center rounded-b-sm shadow-[20px_35px_30px_-15px_rgba(0,0,0,0.3)]">
                <span className="font-bold">
                    No results found!
                </span>
            </div>
        )
    }

};

export default DropdownSearchCities;
