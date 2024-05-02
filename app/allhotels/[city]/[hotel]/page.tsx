"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react"
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

import { fetchHotel } from "../../../../utils/fetchHotel";
import { HotelType } from "../../../../types/HotelType";
import Image from "next/image";
import InsideOfHotel from "../../../../public/images/insideOfHotel.jpg"
import OutsideHotel from "../../../../public/images/HotelOutside.jpg"
import HotelPic from "../../../../public/images/hotel3.jpg"
import { Nunito_Sans } from "next/font/google";

import { RatingType } from "../../../../types/RatingType";
import Ratings from "../../../../components/singleHotelPageComponents/Ratings";
import Comments from "../../../../components/singleHotelPageComponents/Comments";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const nunito = Nunito_Sans({ subsets: ["latin"] })
const HotelPage: React.FC = () => {

    // Get hotel's ID from URL params, and city's IATA code
    const hotel = useParams<{ city: string, hotel: string }>()

    const [hotelData, setHotelData] = useState<HotelType>({} as HotelType)

    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const [ratings, setRatings] = useState<RatingType>({} as RatingType)
    // Fetch hotel's data every time hotelID changes in URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHotel(hotel.hotel, hotel.city)
                setHotelData(data.hotel)
                data.ratings && setRatings(data.ratings)
                setIsLoaded(true)
            } catch (error) {
                console.log("Error occured while setting hotel: " + error)
            }

        }
        fetchData()
    }, [hotel])

    if (isLoaded) {
        return (
            <>
                <Header />
                <main className={`mt-[8.5rem] min-h-[calc(100vh-8.5rem)]
                    bg-white w-[80vw] mx-auto mb-28 grid ${nunito.className}`}>
                    <div className="w-full  h-full flex flex-col
                    gap-10">
                        {/* Image and name of hotel */}
                        <div className="flex items-center justify-center gap-10
                        py-20">

                            <div className="flex justify-center 
                            items-center gap-3">
                                <Image alt="" src={InsideOfHotel}
                                    width={280} height={280}
                                    className="w-80 h-auto rounded-lg shadow-md" />
                                <div className="flex flex-col gap-5">
                                    <Image alt="" src={OutsideHotel}
                                        width={280} height={280}
                                        className="w-80 h-auto aspect-auto rounded-lg shadow-md" />
                                    <Image alt="" src={HotelPic}
                                        width={280} height={280}
                                        className="w-80 h-auto aspect-auto rounded-lg shadow-md" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                <h3 className="font-bold text-4xl">
                                    {hotelData.name}
                                </h3>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-[1.3rem]">
                                            9.5 / 10
                                        </span>
                                        <FaStar className="text-gold_1 text-[1.6rem] pb-1" />
                                    </div>
                                    <span>
                                        Number of reviews: 52
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-[1.2rem]">
                                    <FaLocationDot className="text-red-500" />
                                    <span>
                                        Sunset Avenue, 123
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Comments />
                        {/* Container for hotel's ratings */}
                        <Ratings ratings={ratings} />
                    </div>
                </main>
                <Footer />
            </>
        )

    }
};

export default HotelPage;
