import React, { useEffect, useState } from "react"
import helperComments from "../../helpers/helperComments.json"
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Comments = () => {

  const [currentCom, setCurrentCom] = useState<number>(0)

  const handleIncrement = () => {
    currentCom === helperComments.length - 1 ? setCurrentCom(0) : setCurrentCom(prevCom => ++prevCom)
  }

  const handleDecrement = () => {
    currentCom === 0 ? setCurrentCom(helperComments.length - 1) : setCurrentCom(prevCom => --prevCom)
  }


  return (

    <div className="flex items-center gap-10 border-2 border-brown_1 
        px-20 py-10 xl:max-h-[10rem] rounded-lg relative w-[calc(100%-5rem)] mx-auto
        sm:w-full flex-col sm:flex-row">

      <MdArrowBackIosNew className="p-2 bg-brown_1 text-gold_1 rounded-lg
        text-[3rem] absolute top-[40%] left-5 cursor-pointer"
        onClick={() => handleDecrement()} />
      <MdArrowForwardIos className="p-2 bg-brown_1 text-gold_1 rounded-lg
        text-[3rem] absolute top-[40%] right-5 cursor-pointer"
        onClick={() => handleIncrement()} />
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">
          {helperComments[currentCom].name}
        </span>
        <Image alt="" width={200} height={200} className="w-20 max-w-20 aspect-square"
          src={"https://avatar.iran.liara.run/public/boy"} />
      </div>

      <span className="text-[1.1rem]">
        {helperComments[currentCom].comment}
      </span>

    </div>


  )
};

export default Comments;
