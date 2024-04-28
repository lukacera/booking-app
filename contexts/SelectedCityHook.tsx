"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { CityType } from "../types/CityType"

interface SelectedCityType {
    selectedCity: CityType,
    setSelectedCity: Dispatch<SetStateAction<CityType>>
}
export const SelectedCityContext = createContext<SelectedCityType>({} as SelectedCityType)

const getInitialState = () => {
    const storedCity = localStorage.getItem('selectedCity')
    return storedCity ? JSON.parse(storedCity) : {}
}

export const SelectedCityProvider: React.FC<{
    children: ReactNode
}> = ({ children }) => {

    const [selectedCity, setSelectedCity] = useState<CityType>(getInitialState());

    // Save selected city to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
    }, [selectedCity]);

    return (
        <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </SelectedCityContext.Provider>
    );
};