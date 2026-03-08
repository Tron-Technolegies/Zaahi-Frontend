import React from "react";
import { GoChevronRight } from "react-icons/go";

const OrderCard = ({ item }) => {
  return (
    <div className="relative font-[Inter] tracking-wide py-5 px-6 border border-[#E8E8E8] rounded-2xl">
      <div className="flex items-center gap-2 text-sm mb-3">
        <button className="bg-[#FFF2EA] text-[#E8801D] rounded-2xl px-2">{item?.status || "In Progress"} </button>
        <p>|</p>
        <p> {item?.date || "10 Jan 2026"} </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-sm">
          <img src={item?.image || "/Featured/Lehanga.png"} className="h-18 w-auto" />
          <div className="flex flex-col">
            <p className="font-medium">Order ID: {item?._id ? item._id.substring(18) : "ABC-84521"}</p>
            <p className="text-sm">{item?.productName || "Raw Silk Dupatta"}</p>
            <p className="font-medium">${item?.price || "12,500"}</p>
          </div>
        </div>
        <GoChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-[#777777] cursor-pointer" />
      </div>
    </div>
  );
};

export default OrderCard;
