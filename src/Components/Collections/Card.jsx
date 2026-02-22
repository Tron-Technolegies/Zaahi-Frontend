import React from "react";
import { PiHeartLight } from "react-icons/pi";
import { RiShoppingBag3Line } from "react-icons/ri";

const Card = () => {
  return (
    <div>
      <div className="border border-[#7B7B7B66] p-8 relative group">
        <button className="absolute top-5 right-5 text-[#D77C84]">
          <PiHeartLight className="text-2xl" />
        </button>

        <img src="/Featured/Lehanga.png" alt="" className="mx-auto h-[340px] object-contain" />

        <div className="mt-6 flex justify-center gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale">
          <button className="w-[200px] bg-[#D77C84] font-[Inter] text-white text-xs py-2">
            BUY NOW
          </button>
          <button className="w-9 h-9 border border-[#E6E6E6] bg-[#EAEAEA] text-xs flex items-center justify-center">
            <RiShoppingBag3Line className="text-lg text-gray-700" />
          </button>
        </div>
      </div>
      <p className="mt-5 text-center text-sm font-[Be Vietnam Pro]">Raw Silk with Net Dupatta</p>
      <p className="mt-1 text-center text-[#777777] text-sm font-semibold font-[Be Vietnam Pro]">
        $12,500
      </p>
    </div>
  );
};

export default Card;
