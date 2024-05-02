import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { RatingType } from "../../types/RatingType";

const Ratings: React.FC<{
    ratings: RatingType
}> = ({ ratings }) => {
    return (
        <div className="grid grid-cols-[30%_70%] 
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
                <div className="flex flex-col items-center justify-center gap-5">
                    <span className="font-bold text-2xl">
                        Catering
                    </span>
                    {ratings.sentiments?.catering && (
                        <CircularProgressbar value={ratings.sentiments.catering / 10} />
                    )}
                    {!ratings.sentiments?.catering && (
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"

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
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"
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
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"
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
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"
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
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"
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
                        <div className="w-28">
                            <CircularProgressbar
                                value={100}
                                minValue={0}
                                maxValue={100}
                                text={"?"}
                                styles={buildStyles({
                                    pathColor: "#5A3825",
                                    trailColor: "white",
                                    textSize: "2rem"
                                })}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>)
};

export default Ratings;
