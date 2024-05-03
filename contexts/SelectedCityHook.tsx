"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface SelectedCityType {
    selectedCity: string,
    setSelectedCity: Dispatch<SetStateAction<string>>
}
export const SelectedCityContext = createContext<SelectedCityType>({} as SelectedCityType)

const getInitialState = () => {
    const storedCity = localStorage.getItem('selectedCity')
    console.log("Stored city:")
    console.log(storedCity)
    if (storedCity) {
        try {
            return JSON.parse(storedCity);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            // Handle the error or return a default value as necessary
        }
    }
    return {};
}

export const SelectedCityProvider: React.FC<{
    children: ReactNode
}> = ({ children }) => {

    const [selectedCity, setSelectedCity] = useState<string>(getInitialState());

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