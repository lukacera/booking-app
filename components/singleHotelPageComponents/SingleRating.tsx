import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { RatingType } from "../../types/RatingType";

type SentimentsKeys = keyof RatingType["sentiments"];

const SingleRating: React.FC<{
    ratings: RatingType,
    ratingType: SentimentsKeys | "?"
    ratingName?: string
}> = ({ ratings, ratingType, ratingName }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <span className="font-bold text-2xl">
                {ratingName || ratingType}
            </span>
            {ratingType !== "?" && ratings.sentiments?.[ratingType] !== undefined
                ? (
                    <CircularProgressbar
                        value={ratings.sentiments[ratingType] / 10}
                    />
                ) : (
                    <div className="w-24 sm:w-28">
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
    );
};

export default SingleRating;
