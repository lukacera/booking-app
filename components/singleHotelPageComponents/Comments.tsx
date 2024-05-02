import React from "react"
import helperComments from "../../helpers/helperComments.json"
import Image from "next/image";

const Comments = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="flex items-center gap-10 border-2 border-brown_1 
    px-5 py-10 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">
            {helperComments[0].name}
          </span>
          <Image alt="" width={200} height={200}
            src={"https://avatar.iran.liara.run/public/boy"} />
        </div>
        <span className="text-[1.1rem]">
          {helperComments[0].comment}
        </span>
      </div>
    </div>

  )
};

export default Comments;
