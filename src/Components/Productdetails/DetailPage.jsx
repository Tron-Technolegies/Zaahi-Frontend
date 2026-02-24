import React from "react";
import { PiHeartLight } from "react-icons/pi";
import Picture from "./Picture";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";

const DetailPage = () => {
  return (
    <div className="mt-20 max-w-8xl">
      <div className="flex px-50 gap-3 text-sm font-[Inter]">
        <button className="text-[#848484]">Home &gt;</button>
        <button className="text-[#848484]">Collections &gt;</button>
        <button>Raw Silk Dupatta</button>
      </div>

      <div className="flex mt-10 gap-25  justify-center">
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

        <div className="flex flex-col mt-10">
          <button className="w-[70px] bg-[#F42727] text-white px-2 py-1 text-sm mb-7 font-[Inter]">
            SALE
          </button>
          <p className="font-[Be Vietnam Pro]">Raw Silk with Net Dupatta</p>
          <p className="text-sm text-[#777777] mb-4 font-[Inter]">
            ★★★★☆ <span className="ml-2">4.9 (127 reviews)</span>
          </p>
          <div className="flex items-center gap-3 mb-6 font-[Inter]">
            <p className="text-2xl font-semibold">$12,500</p>
            <p className="text-[#9A9A9A] line-through">$15,000</p>
          </div>

          <div className="flex items-center mt-8 gap-5 font-[Inter]">
            <div className="flex items-center  border border-[#7B7B7B66] ">
              <button className="px-3 py-2 ">
                <AiOutlineMinus />
              </button>
              <span className="px-2">1</span>
              <button className="px-3 py-2">
                <AiOutlinePlus />
              </button>
            </div>
            <button className="w-[300px] bg-[#D77C84] font-[Inter] text-white text-xs py-2">
              BUY NOW
            </button>
            <button className="w-9 h-9 border border-[#7B7B7B66] text-xs flex items-center justify-center">
              <RiShoppingBag3Line className="text-lg text-gray-700" />
            </button>
          </div>
          <hr className="my-10  border-px border-[#7B7B7B66]" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
