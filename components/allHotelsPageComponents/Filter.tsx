import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { FilterType } from "../../types/FilterType";
import { FaSquare } from "react-icons/fa";

const Filter: React.FC<{
    filter: FilterType,
    setSelectedFilters: Dispatch<SetStateAction<string[]>>
}> = ({ filter, setSelectedFilters }) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    /* Use isChecked for O(1) instead of O(n) */
    const handleClickOfFilter = (filter: FilterType, isChecked: boolean) => {
        if (isChecked) {
            setSelectedFilters(prevFilters => (
                prevFilters.filter(prevFil => prevFil !== filter.amenity)
            ))
        } else {
            setSelectedFilters(prevFilters => (
                [...prevFilters, filter.amenity]
            ))
        }
    }

    const handleClick = () => {
        setIsChecked(!isChecked);
        handleClickOfFilter(filter, isChecked)
    }

    return (
        <div className="w-full grid 
            items-center grid-cols-[10%_75%_15%] gap-2">
            {filter.icon}
            <span>
                {filter.name}
            </span>
            <FaSquare className={`border-2 border-black cursor-pointer 
            bg-black  ${isChecked ? "text-black" : "text-white"}`}
                onClick={() => handleClick()} />
        </div>
    )
};

export default Filter;
