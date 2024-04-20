import React from "react"
import Logo from "./Logo";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full min-h-[10rem] h-auto bg-brown_1 text-white
        grid grid-cols-3 relative">
            <div className="grid place-items-center">
                <Logo />
            </div>
            {/* Details about us */}
            <div className="grid place-items-center gap-10 my-5">
                <h3 className="text-xl">
                    Something about us
                </h3>
                <p className="text-[0.9rem]">
                    Discover a world of convenience and comfort with our hotel
                    booking service. We specialize in providing seamless
                    experiences for travelers, offering a curated selection
                    of accommodations tailored to suit every need and preference.
                    Whether you are planning a city escape or a serene getaway,
                    our platform makes it easy to explore, compare, and book your
                    ideal stay. With our intuitive interface and comprehensive
                    options, planning your next adventure has never been easier.
                    Embrace worry-free travel and embark on unforgettable journeys
                    with us. Experience the ease and reliability of our booking
                    service, and let us help you create memories that last a
                    lifetime.
                </p>
            </div>
            <div className="flex flex-col items-center my-5 gap-20 text-xl">
                <span>
                    Links to our social media
                </span>
                <div className="flex items-center gap-5">
                    <div className="p-3 bg-gold_1 rounded-full cursor-pointer">
                        <IoLogoInstagram color="black" size={30} />
                    </div>
                    <div className="p-3 bg-gold_1 rounded-full cursor-pointer">
                        <FaLinkedin color="black" size={30} />
                    </div>
                    <div className="p-3 bg-gold_1 rounded-full cursor-pointer">
                        <FaYoutube color="black" size={30} />
                    </div>
                </div>
            </div>
            <span className="absolute bottom-5 right-4 text-black">
                &copy; {new Date().getFullYear()} StayQuest All Rights Reserved.
            </span>
        </footer>
    )
};

export default Footer;
