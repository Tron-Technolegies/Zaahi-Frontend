import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewGraphElt({
  clr,
  no,
  percent,
  bg = "bg-[#FFB800]",
}) {
  return (
    <div className="flex items-center gap-2">
      <p>{no}</p>
      <p className={` ${clr} text-[#FFB800]`}>
        <FaStar />
      </p>
      <div className="flex">
        <div
          className={`h-1 w-3.75  ${percent > 0 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 10 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 20 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 30 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 40 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 50 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 60 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 70 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 80 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-1 w-3.75  ${percent > 90 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
}
