"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react"
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

import { fetchHotel } from "../../../../utils/fetchHotel";
import { HotelType } from "../../../../types/HotelType";
import Image from "next/image";
import InsideOfHotel from "../../../../public/images/insideOfHotel.jpg"
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] })
const HotelPage: React.FC = () => {

    // Get hotel's ID from URL params, and city's IATA code
    const hotel = useParams<{ city: string, hotel: string }>()

    const [hotelData, setHotelData] = useState<HotelType>({} as HotelType)

    // Fetch hotel's data every time hotelID changes in URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHotel(hotel.hotel, hotel.city)
                setHotelData(data)
            } catch (error) {
                console.log("Error occured while setting hotel: " + error)
            }

        }
        fetchData()
    }, [hotel])

    return (
        <>
            <Header />
            <main className={`mt-[8.5rem] min-h-[calc(100vh-8.5rem)]
                bg-white w-[80vw] mx-auto mb-20 grid ${nunito.className}`}>
                <div className="w-full bg-yellow-200 h-full flex flex-col
                gap-10">
                    {/* Image and name of hotel */}
                    <div className="flex justify-center gap-40 items-center
                    py-20">
                        <div>
                            <Image alt="" src={InsideOfHotel}
                                width={200} height={200}
                                className="w-[22rem] aspect-square rounded-lg shadow-md" />
                        </div>
                        <h3 className="font-bold text-2xl">
                            {hotelData.name}
                        </h3>
                    </div>
                    {/* Container for hotel's ratings */}
                    <div className="grid grid-cols-[30%_70%] h-full bg-blue-500">
                        <div className="grid place-items-center">
                            <span>
                                Ratigns
                            </span>
                        </div>
                        <div className="grid place-items-center">
                            <span>
                                Other ratings
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default HotelPage;
