import { Dispatch, SetStateAction } from "react";
import { FilterType } from "../types/FilterType"

// Add new filter in selected filters
export const addFilter = (
    filter: FilterType,
    setSelectedFilters: Dispatch<SetStateAction<FilterType[]>>,
    setAllFilters: Dispatch<SetStateAction<FilterType[]>>,
    allFilters: FilterType[]) => {

    setSelectedFilters(prevFilters => (
        [...prevFilters, filter]
    ))

    const index = allFilters.findIndex(fil => fil.name === filter.name);
    if (index !== -1) {
        const newFilters = [...allFilters];
        newFilters.splice(index, 1);
        setAllFilters(newFilters);
    }
}
// Remove filter from selectedFilters array
export const removeFilter = (
    filter: FilterType,
    setSelectedFilters: Dispatch<SetStateAction<FilterType[]>>,
    selectedFilters: FilterType[],
    setAllFilters: Dispatch<SetStateAction<FilterType[]>>) => {

    const index = selectedFilters.findIndex(currFilter => currFilter.name === filter.name);
    if (index !== -1) {
        const newFilters = [...selectedFilters];
        newFilters.splice(index, 1);
        setSelectedFilters(newFilters);
    }

    setAllFilters(prevFilters => [...prevFilters, filter])
};