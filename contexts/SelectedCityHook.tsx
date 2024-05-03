"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface SelectedCityType {
    selectedCity: string,
    setSelectedCity: Dispatch<SetStateAction<string>>
}

export const SelectedCityContext = createContext<SelectedCityType>({} as SelectedCityType);

export const SelectedCityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState<string>('');

    useEffect(() => {
        // Check if localStorage is available
        if (typeof window !== 'undefined') {
            const storedCity = localStorage.getItem('selectedCity');
            if (storedCity) {
                try {
                    setSelectedCity(JSON.parse(storedCity));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    // Handle the error or return a default value as necessary
                }
            }
        }
    }, []);

    useEffect(() => {
        // Save selected city to local storage whenever it changes
        localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
    }, [selectedCity]);

    return (
        <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </SelectedCityContext.Provider>
    );
};
