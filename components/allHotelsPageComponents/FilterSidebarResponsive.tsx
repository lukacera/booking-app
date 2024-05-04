import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { allFilters } from "../../helpers/filtersSidebar";
import Filter from "./Filter";
import { v4 as uuidv4 } from "uuid"
import { IoClose } from "react-icons/io5";
import gsap from "gsap"
const FilterSidebarResponsive: React.FC<{
  setSelectedFilters: Dispatch<SetStateAction<string[]>>,
  selectedFilters: string[],
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
  hotelsNumber: number
}> = ({ setSelectedFilters, selectedFilters, setIsDropdownOpen, hotelsNumber }) => {

  const sidebarRef = useRef(null)

  console.log("Hotels length: " + hotelsNumber)
  // Animate sidebar opening when component mounts
  useEffect(() => {
    gsap.fromTo(sidebarRef.current,
      { left: "-100%", duration: 0.4, ease: "expo.in" },
      { left: 0, duration: 0.5, ease: "power2.out" });
  }, []);

  // Animate sidebar closing when close button is clicked
  const closeSidebar = () => {
    gsap.to(sidebarRef.current,
      { left: "-100%", duration: 0.4, ease: "expo.in", onComplete: () => setIsDropdownOpen(false) });
  };

  return (
    <div className="w-full items-center pt-10
      flex flex-col relative mt-[9rem] bg-white" ref={sidebarRef}>
      <IoClose className="absolute top-2 left-7 text-2xl cursor-pointer"
        onClick={() => closeSidebar()} />
      <div className="flex items-center gap-1 absolute -top-5 inset-x-auto">
        <span>
          Hotels found:
        </span>
        <span className="font-bold">
          {hotelsNumber}
        </span>
      </div>
      <h4 className="font-bold text-xl mb-10">
        All filters
      </h4>
      {/* Map through all filters and display */}
      <div className="grid gap-2">
        {allFilters.map(filter => (
          <Filter key={uuidv4()}
            filter={filter}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
        ))}
      </div>
    </div>
  )
};

export default FilterSidebarResponsive;
