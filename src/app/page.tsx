import mainPageHotelPicture from "../../public/mainPageHotelPicture.jpg"
import Image from "next/image";
import Header from "./Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header div */}
      <Header />
      {/* */}
      <main>
        <Image src={mainPageHotelPicture} alt=""
          className="w-full h-[80vh]" />
        {/* Cards container */}
        <section>
          <div className="bg-white w-20 aspect-square">
            <p>
              dfgdfgdf
            </p>
          </div>
        </section>
      </main>

    </div >
  );
}
