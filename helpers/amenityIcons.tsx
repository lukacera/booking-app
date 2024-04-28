import { FaWifi, FaParking, FaBus, FaUmbrellaBeach, FaHotTub, FaSquare, FaStar } from "react-icons/fa";
import { TbAirConditioning, TbMassage } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import {
    MdPets, MdBusinessCenter, MdMeetingRoom, MdSportsTennis, MdGolfCourse,
    MdKitchen, MdCasino, MdTableBar, MdRoomService
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { BsUniversalAccess } from "react-icons/bs";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { ReactElement } from "react"

export const amenityIcons: { [key: string]: ReactElement } = {
    "AIR_CONDITIONING": <TbAirConditioning />,
    "RESTAURANT": <IoMdRestaurant />,
    "PARKING": <FaParking />,
    "PETS_ALLOWED": <MdPets />,
    "AIRPORT_SHUTTLE": <FaBus />,
    "BUSINESS_CENTER": <MdBusinessCenter />,
    "WIFI": <FaWifi />,
    "MEETING_ROOMS": <MdMeetingRoom />,
    "NO_KID_ALLOWED": <LuBaby />,
    "TENNIS": <MdSportsTennis />,
    "GOLF": <MdGolfCourse />,
    "KITCHEN": <MdKitchen />,
    "BEACH": <FaUmbrellaBeach />,
    "CASINO": <MdCasino />,
    "JACUZZI": <FaHotTub />,
    "SOLARIUM": <BsUniversalAccess />,
    "MASSAGE": <TbMassage />,
    "MINIBAR": <MdTableBar />,
    "TELEVISION": <PiTelevisionSimpleFill />,
    "ROOM_SERVICE": <MdRoomService />,
};
