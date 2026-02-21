import React from "react";
import { PiHeartLight } from "react-icons/pi";
import Picture from "./Picture";

const DetailPage = () => {
  return (
    <div className="mt-20 px-30">
      <div className="flex gap-3 text-sm">
        <button className="text-[#848484]">Home </button>
        <button className="text-[#848484]">Collections </button>
        <button>Raw Silk Dupatta</button>
      </div>

      <div className="flex mt-10 gap-20 ">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col gap-5">
            <Picture />
            <Picture />
            <Picture />
            <Picture />
          </div>
          <div className="border border-[#D9D9D9] relative p-10">
            <button className="absolute top-5 right-5 text-[#D77C84]">
              <PiHeartLight className="text-3xl" />
            </button>
            <img src="/Featured/Lehanga.png" alt="" className="mx-auto h-[370px] object-contain" />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <button className="bg-[#F42727] text-white text-xs px-2 py-.5 mb-7">SALE</button>
            <p>Raw Silk with Net Dupatta</p>
            <p className="text-[#848484]">***** 4.9 (127 reviews)</p>
            <p className="text-xl font-semibold">$12,500 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
