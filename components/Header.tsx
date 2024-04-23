"use client"
import React from "react";
import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";

const Header: React.FC = () => {
    return (
        <header className="relative">
            <div className="fixed top-0 right-0 w-full bg-brown_1 px-20 z-10
            h-[8.5rem] grid place-items-center">
                <div className="flex justify-start absolute top-7 left-20">
                    <Logo />
                </div>
                <div className="flex items-center gap-4 bg-white py-4 px-3
                rounded-lg">
                    <FaLocationDot className="text-black text-[1.2rem]" />
                    <input type="text" className="bg-transparent
                        outline-none text-black placeholder:text-black"
                        spellCheck={false} placeholder="Where do you want to go?" />
                </div>

            </div>
        </header>
    );
};

export default Header;
