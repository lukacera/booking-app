import React from "react"
import { Abril_Fatface } from "next/font/google"

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] })

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 right-0 w-full 
        bg-headerBg px-20 py-6 opacity-95 z-10">
            <div className={`flex flex-col gap-1 max-w-[10%] text-center`}>
                <h1 className={`text-gold_1 text-4xl tracking-wider ${abril.className}`}>
                    StayQuest
                </h1>
                <span className="text-[#FFF8DC] text-[0.9rem]">
                    For comfortable stays
                </span>
            </div>
        </header>
    )
};

export default Header;
