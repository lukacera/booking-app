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

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { RatingType } from "../../../../types/RatingType";
const nunito = Nunito_Sans({ subsets: ["latin"] })
const HotelPage: React.FC = () => {

    // Get hotel's ID from URL params, and city's IATA code
    const hotel = useParams<{ city: string, hotel: string }>()

    const [hotelData, setHotelData] = useState<HotelType>({} as HotelType)

    const [ratings, setRatings] = useState<RatingType>({} as RatingType)
    // Fetch hotel's data every time hotelID changes in URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHotel(hotel.hotel, hotel.city)
                setHotelData(data.hotel)
                data.ratings && setRatings(data.ratings)
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
                <div className="w-full  h-full flex flex-col
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
                    <div className="grid grid-cols-[30%_70%] h-full 
                     py-10">
                        {/* Container for main overall rating */}
                        <div className="flex flex-col items-center 
                        justify-center gap-5 border-r-2 
                        bg-brown_1 text-white rounded-xl">
                            <span className="font-bold text-2xl">
                                Overall rating
                            </span>
                            {ratings.overallRating && (
                                <CircularProgressbar value={ratings.overallRating / 10} />
                            )}
                            {!ratings.overallRating && (
                                <div className="w-80">
                                    <CircularProgressbar
                                        value={100}
                                        minValue={0}
                                        maxValue={100}
                                        text={"?"}
                                        styles={buildStyles({
                                            pathColor: "white",
                                            trailColor: "#ebc417",
                                            textColor: "white"
                                        })}
                                    />
                                </div>
                            )}
                        </div>
                        {/* Other ratings */}
                        <div className="grid grid-cols-3 gap-10">
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Catering
                                </span>
                                {ratings.sentiments?.catering && (
                                    <CircularProgressbar value={ratings.sentiments.catering / 10} />
                                )}
                                {!ratings.sentiments?.catering && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Facilities
                                </span>
                                {ratings.sentiments?.facilities && (
                                    <CircularProgressbar value={ratings.sentiments.facilities / 10} />
                                )}
                                {!ratings.sentiments?.facilities && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Internet
                                </span>
                                {ratings.sentiments?.internet && (
                                    <CircularProgressbar value={ratings.sentiments.internet / 10} />
                                )}
                                {!ratings.sentiments?.internet && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Location
                                </span>
                                {ratings.sentiments?.location && (
                                    <CircularProgressbar value={ratings.sentiments.location / 10} />
                                )}
                                {!ratings.sentiments?.location && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Staff
                                </span>
                                {ratings.sentiments?.staff && (
                                    <CircularProgressbar value={ratings.sentiments.staff / 10} />
                                )}
                                {!ratings.sentiments?.staff && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <span className="font-bold text-2xl">
                                    Value
                                </span>
                                {ratings.sentiments?.valueForMoney && (
                                    <CircularProgressbar value={ratings.sentiments.valueForMoney / 10} />
                                )}
                                {!ratings.sentiments?.valueForMoney && (
                                    <div className="w-40">
                                        <CircularProgressbar
                                            value={100}
                                            minValue={0}
                                            maxValue={100}
                                            text={"?"}
                                            styles={buildStyles({
                                                pathColor: "#5A3825",
                                                trailColor: "white"
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default HotelPage;
