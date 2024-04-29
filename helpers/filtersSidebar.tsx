import { FaWifi, FaParking, FaBus, FaUmbrellaBeach, FaHotTub } from "react-icons/fa";
import { TbAirConditioning, TbMassage } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import {
    MdPets, MdBusinessCenter, MdMeetingRoom, MdSportsTennis, MdGolfCourse,
    MdKitchen, MdCasino, MdTableBar, MdRoomService
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { BsUniversalAccess } from "react-icons/bs";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FilterType } from "../types/FilterType"

export const allFilters: FilterType[] = [
    {
        icon: <FaWifi />,
        name: "Wifi",
        amenity: "WIFI"
    },
    {
        icon: <TbAirConditioning />,
        name: "Air Conditioning",
        amenity: "AIR_CONDITIONING"
    },
    {
        icon: <IoMdRestaurant />,
        name: "Restaurant",
        amenity: "RESTAURANT"
    },
    {
        icon: <FaParking />,
        name: "Parking",
        amenity: "PARKING"
    },
    {
        icon: <MdPets />,
        name: "Pets allowed",
        amenity: "PETS_ALLOWED"
    },
    {
        icon: <FaBus />,
        name: "Airport Shuttle",
        amenity: "AIRPORT_SHUTTLE"
    },
    {
        icon: <MdBusinessCenter />,
        name: "Business center",
        amenity: "BUSINESS_CENTER"
    },
    {
        icon: <MdMeetingRoom />,
        name: "Meeting Rooms",
        amenity: "MEETING_ROOMS"
    },
    {
        icon: <LuBaby />,
        name: "No kids allowed",
        amenity: "NO_KID_ALLOWED"
    },
    {
        icon: <MdSportsTennis />,
        name: "Tennis",
        amenity: "TENNIS"
    },
    {
        icon: <MdGolfCourse />,
        name: "Golf",
        amenity: "GOLF"
    },
    {
        icon: <MdKitchen />,
        name: "Kitchen",
        amenity: "KITCHEN"
    },
    {
        icon: <FaUmbrellaBeach />,
        name: "Beach",
        amenity: "BEACH"
    },
    {
        icon: <MdCasino />,
        name: "Casino",
        amenity: "CASINO"
    },
    {
        icon: <FaHotTub />,
        name: "Jacuzzi",
        amenity: "JACUZZI"
    },
    {
        icon: <BsUniversalAccess />,
        name: "Solarium",
        amenity: "SOLARIUM"
    },
    {
        icon: <TbMassage />,
        name: "Massage",
        amenity: "MASSAGE"
    },
    {
        icon: <MdTableBar />,
        name: "Bar",
        amenity: "MINIBAR"
    },
    {
        icon: <PiTelevisionSimpleFill />,
        name: "TV",
        amenity: "TELEVISION"
    },
    {
        icon: <MdRoomService />,
        name: "Room Service",
        amenity: "ROOM_SERVICE"
    }
];
