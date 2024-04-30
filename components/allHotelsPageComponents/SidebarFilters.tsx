import React, { Dispatch, SetStateAction } from "react"
import { v4 as uuidv4 } from "uuid"
import { allFilters } from "../../helpers/filtersSidebar";
import Filter from "./Filter";

const SidebarFilters: React.FC<{
    setSelectedFilters: Dispatch<SetStateAction<string[]>>,
    selectedFilters: string[]
}> = ({ setSelectedFilters, selectedFilters }) => {

    console.log("Refresh...")
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
                        selectedFilters={selectedFilters}
                    />
                ))}
            </div>
        </div>
    )
};

export default SidebarFilters;
