"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { CityType } from "../types/CityType"

interface SelectedCityType {
    selectedCity: CityType,
    setSelectedCity: Dispatch<SetStateAction<CityType>>
}
export const SelectedCityContext = createContext<SelectedCityType>({} as SelectedCityType)

export const SelectedCityProvider: React.FC<{
    children: ReactNode
}> = ({ children }) => {

    const [selectedCity, setSelectedCity] = useState<CityType>({} as CityType);


    return (
        <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </SelectedCityContext.Provider>
    );
};