import mainPageHotelPicture from "../../public/images/mainPageHotelPicture.jpg"

import helperHotels from "./helpers/helperHotel.json"
import Image from "next/image";
import Header from "./Header";
import { randomUUID } from "crypto"
import Card from "./Card";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header div */}
      <Header />
      {/* Main continaer */}
      <main className="relative grid place-items-center">
        <Image src={mainPageHotelPicture} alt=""
          className="w-full h-[60vh]" priority={true} />
        {/* Cards container */}
        <section className="absolute top-[70%] inset-x-auto mx-auto
        flex gap-3">

          {helperHotels.map(hotel => (
            <div key={randomUUID()} className="relative">
              <Card hotel={hotel} />
            </div>
          ))}


        </section>
      </main>

    </div >
  );
}
