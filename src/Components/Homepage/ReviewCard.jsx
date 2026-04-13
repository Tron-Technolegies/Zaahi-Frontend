import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ img, review, rating, user }) {
  return (
    <div className="p-4 rounded-2xl my-3 shadow-lg hover:shadow-[#D47784]/40 transition-all duration-300 mx-3 flex flex-col gap-4 md:max-w-162.5 md:h-150 h-100">
      {/* Image Container */}
      <div className="flex-1 overflow-hidden rounded-xl relative group">
        <img
          src={img}
          alt={review}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Title and Button */}
      <div className="flex flex-col gap-3 items-center w-full">
        <p className="text-xl text-amber-300 flex gap-3 items-center">
          {rating} <FaStar />
        </p>
        <h4 className=" text-sm text-gray-400 italic font-semibold tracking-wide leading-tight flex-1">
          {review.slice(0, 50)}.....
        </h4>
        <p className="text-sm self-end text-gray-600">-{user}</p>

        {/* Buttons */}
      </div>
    </div>
  );
}
