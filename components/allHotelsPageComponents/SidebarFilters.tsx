import React, { Dispatch, SetStateAction, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { allFilters } from "../../helpers/filtersSidebar";
import Filter from "./Filter";

const SidebarFilters: React.FC<{
    setSelectedFilters: Dispatch<SetStateAction<string[]>>,
    handleApplyFilters: () => void,
    selectedFilters: string[]
}> = ({ setSelectedFilters, handleApplyFilters, selectedFilters }) => {

    useEffect(() => {
        console.log(selectedFilters)
    }, [selectedFilters])
    return (
        <div className="w-full flex flex-col items-center pt-32">
            <h4 className="font-bold text-xl mb-10">
                All filters
            </h4>

            {/* Map through all filters and display */}
            <div className="gap-3 my-6 grid place-items-center px-2">
                {allFilters.map(filter => (
                    <Filter key={uuidv4()}
                        filter={filter}
                        setSelectedFilters={setSelectedFilters}
                    />
                ))}
            </div>

            <span className="px-2 py-4 rounded-xl border-2
                bg-brown_1 text-white"
                onClick={() => handleApplyFilters()}>
                Apply filters
            </span>
        </div>
    )
};

export default SidebarFilters;
