import React from "react"
import { FaLocationDot } from "react-icons/fa6";

const EmptyComponent: React.FC<{
    lat: number;
    lng: number;
}> = ({ lat, lng }) => {
    return (
        <div>
            <FaLocationDot className="text-[2.5rem] text-red-600" />
        </div>
    )
};

export default EmptyComponent;
