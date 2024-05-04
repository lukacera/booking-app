import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { RatingType } from "../../types/RatingType";
import SingleRating from "./SingleRating";

type SentimentsKeys = keyof RatingType["sentiments"];

const Ratings: React.FC<{
    ratings: RatingType
}> = ({ ratings }) => {
    return (
        <div className="grid sm:grid-cols-[30%_70%] 
                    py-10 w-[calc(100%-5px)] mx-auto">
            {/* Container for main overall rating */}
            <div className="flex flex-col items-center 
                        justify-center gap-5 border-r-2 
                        bg-brown_1 text-white
                        rounded-xl w-full">
                <span className="font-bold text-2xl">
                    Overall rating
                </span>
                {ratings.overallRating && (
                    <CircularProgressbar value={ratings.overallRating / 10} />
                )}
                {!ratings.overallRating && (
                    <div className="w-40">
                        <CircularProgressbar
                            value={100}
                            minValue={0}
                            maxValue={100}
                            text={"?"}
                            styles={buildStyles({
                                pathColor: "white",
                                trailColor: "#ebc417",
                                textColor: "white",
                                textSize: "2.8rem"
                            })}
                        />
                    </div>
                )}
            </div>
            {/* Other ratings */}
            <div className="grid grid-cols-3 gap-10">
                {ratings.sentiments ? (
                    Object.keys(ratings.sentiments).map((ratingType) => (
                        <SingleRating key={ratingType}
                            ratings={ratings}
                            ratingType={ratingType as SentimentsKeys}
                            ratingName={ratingType} />
                    ))
                ) : (
                    ["Catering", "Facilities", "Internet", "Location", "Staff", "ValueForMoney"]
                        .map((name, index) => (
                            <SingleRating key={index}
                                ratings={ratings}
                                ratingType="?"
                                ratingName={name} />
                        ))
                )}
            </div>
        </div>)
};

export default Ratings;
