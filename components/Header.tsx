import React, { useCallback, useState } from "react";
import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";
import { debounce } from "lodash";
import { fetchIataCodes } from "../utils/fetchDataHeader";

import { CityType } from "../types/CityType"

const Header: React.FC = () => {

    const [citiesHeader, setCitiesHeader] = useState<CityType[]>([])
    // Create a debounced function using useCallback
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFetch = useCallback(
        debounce((searchQuery: string) => {
            fetchIataCodes(searchQuery);
        }, 500),
        []
    );

    // Function to handle input change
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Get the value from the input field
        const searchQuery = event.target.value;
        // Call the debounced function with the searchQuery
        debounceFetch(searchQuery);
    }

    return (
        <header className="relative">
            <div className="fixed top-0 right-0 w-full bg-brown_1 px-20 z-10 h-[8.5rem] grid place-items-center">
                <div className="flex justify-start absolute top-7 left-20">
                    <Logo />
                </div>
                <div className="flex items-center gap-4 bg-white py-4 px-3 rounded-lg">
                    <FaLocationDot className="text-black text-[1.2rem]" />
                    <input
                        type="text"
                        className="bg-transparent outline-none text-black placeholder:text-black"
                        spellCheck={false}
                        placeholder="Where do you want to go?"
                        onChange={handleChange} // Attach the debounced function to the onChange event
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
