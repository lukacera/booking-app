import React, { useCallback, useEffect, useState } from "react";
import Logo from "./headerComponents/Logo";
import { FaLocationDot } from "react-icons/fa6";
import { debounce } from "lodash";
import { fetchIataCodes } from "../utils/fetchDataHeader";
import { CityType } from "../types/CityType"
import DropdownSearchCities from "./headerComponents/DropdownSearchCities";
import Link from "next/link";

const Header: React.FC = () => {

    const [citiesHeader, setCitiesHeader] = useState<CityType[]>([])

    const [searchQuery, setSearchQuery] = useState<string>("")

    const [isFetching, setIsFetching] = useState<boolean>(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFetch = useCallback(
        debounce(async (searchQueryInput: string) => {
            setSearchQuery(searchQueryInput)
        }, 300),
        []
    );

    // Fetch data every time SearchQuery changes ( debouncing )
    useEffect(() => {
        if (searchQuery.length < 3) {
            return setCitiesHeader([])
        }
        const fetchData = async () => {
            setIsFetching(true)
            const fetchedData = await fetchIataCodes(searchQuery);
            fetchedData ? setCitiesHeader(fetchedData) : setCitiesHeader([])
            setIsFetching(false)
        }
        fetchData()
    }, [searchQuery])

    // Function to handle input change
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Get the value from the input field
        const searchQueryInput = event.target.value;

        // Call the debounced function with the searchQuery
        debounceFetch(searchQueryInput);
    }

    return (
        <header className="relative">
            <div className="fixed top-0 right-0 w-full bg-brown_1 
            z-10 h-[8.5rem] grid place-items-center
            md:px-20">
                <div className="flex justify-start md:absolute top-7 left-20">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>

                <div className="flex items-center gap-4 bg-white
                rounded-lg relative py-4 max-w-[calc(100%-4rem)] px-2">
                    <FaLocationDot className="text-black text-[1.2rem]" />
                    <input
                        type="text"
                        className="bg-transparent outline-none text-black 
                        placeholder:text-black  w-full
                        sm:placeholder:text-base"
                        spellCheck={false}
                        placeholder="Where do you want to go?"
                        onChange={handleChange} // Attach the debounced function to the onChange event
                    />

                    {/* 
                        Dropdown will render his elements based on variables 
                        (show cities, loading, no results found) 
                    */}
                    < DropdownSearchCities
                        citiesHeader={citiesHeader}
                        isFetching={isFetching}
                        searchQuery={searchQuery} />
                </div>
            </div>
        </header>
    );
};

export default Header;
