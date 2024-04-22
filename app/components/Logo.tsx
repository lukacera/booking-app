import React from "react"
import { Abril_Fatface } from "next/font/google"

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] })

const Logo = () => {
    return (
        <div className="flex flex-col gap-2 text-center">
            <h1 className={`text-gold_1 text-4xl tracking-wider 
                ${abril.className}`}>
                StayQuest
            </h1>
            <span className="text-[#FFF8DC] text-[0.9rem]">
                For comfortable stays
            </span>
        </div>
    )
};

export default Logo;
