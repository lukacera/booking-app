"use client"
import mainPageHotelPicture from "../public/images/mainPageHotelPicture.jpg"

import helperHotels from "../helpers/helperHotels.json"
import helperLocations from "../helpers/helperLocations.json"
import Image from "next/image";
import Header from "../components/Header";


import { Lobster } from "next/font/google"

import CardTop3 from "../components/CardTop3";
import CardPopularLocation from "../components/CardPopularLocation";
import Footer from "../components/Footer";
import { v4 as uuidv4 } from "uuid"

const lobster = Lobster({ subsets: ["latin"], weight: "400" })

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Header div */}
      <Header />
      {/* Main continaer */}
      <main>
        <div className="relative grid place-items-center">
          <Image src={mainPageHotelPicture} alt=""
            className="w-full h-[70vh]" priority={true} />

          {/* Cards container */}
          <section className="absolute top-[60%] inset-x-auto mx-auto
          flex flex-col gap-5 items-center">
            <h3 className={`text-4xl font-bold text-orange_1 ${lobster.className}`}>
              Our top picks
            </h3>
            <div className="flex gap-3">
              {helperHotels.map((hotel, index) => (
                <div key={uuidv4()}>
                  <CardTop3 hotel={hotel} index={index} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Popular locations container */}
        <div className="my-80 w-[70%] mx-auto grid place-items-center gap-12">
          <span className={`text-3xl ${lobster.className}`}>
            Trending locations
          </span>
          <div className="grid grid-cols-2 gap-5">
            {helperLocations.map(location => (
              <div key={uuidv4()} >
                <CardPopularLocation location={location} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer container */}
      <Footer />

    </div >
  );
}
