import React, { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";
import { debounce } from "lodash";
import { fetchIataCodes } from "../utils/fetchDataHeader";
import { CityType } from "../types/CityType"
import DropdownSearchCities from "./allHotelsPageComponents/DropdownSearchCities";

const Header: React.FC = () => {

    const [citiesHeader, setCitiesHeader] = useState<CityType[]>([])

    const [searchQuery, setSearchQuery] = useState<string>("")

    const [isFetching, setIsFetching] = useState<boolean>(true)

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
            px-20 z-10 h-[8.5rem] grid place-items-center">
                <div className="flex justify-start absolute top-7 left-20">
                    <Logo />
                </div>
                <div className="flex items-center gap-4 bg-white py-4 px-3 
                rounded-lg relative">
                    <FaLocationDot className="text-black text-[1.2rem]" />
                    <input
                        type="text"
                        className="bg-transparent outline-none text-black 
                        placeholder:text-black"
                        spellCheck={false}
                        placeholder="Where do you want to go?"
                        onChange={handleChange} // Attach the debounced function to the onChange event
                    />

                    {!isFetching && citiesHeader.length > 0 && (
                        < DropdownSearchCities
                            citiesHeader={citiesHeader} />
                    )}

                    {!isFetching && citiesHeader.length === 0 && searchQuery.length > 2 && (
                        <div className="absolute top-16 left-0 bg-white z-10
                                w-full py-3 text-center rounded-sm">
                            <span className="font-bold">
                                No results found!
                            </span>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
};

export default Header;
