import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-16 mt-30 font-[Inter]">
      <div className="flex gap-10 font-semibold border-b-2 border-[#7B7B7B66] pb-4">
        <button>DESCRIPTION </button>
        <button>SPECIFICATIONS </button>
        <button>REVIEWS </button>
      </div>
      <div className="flex">
        <div className="w-[220px] border-r border-[#848484] text-center">
          <p className="text-5xl font-semibold mt-20">4.0</p>

          <div className="flex justify-center mt-2 text-yellow-400 text-xl">★ ★ ★ ★ ☆</div>

          <p className="text-md text-[#777777] mt-2">35K Ratings</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 pl-10 mt-20">
          {/* Rating Bars (TOP) */}
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3">
              <p className="w-8 text-sm">5.0</p>
              <div className="w-[260px] bg-[#E6E6E6] h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[90%]" />
              </div>
              <p className="text-sm text-[#777777]">14K reviews</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="w-8 text-sm">4.0</p>
              <div className="w-[260px] bg-[#E6E6E6] h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[70%]" />
              </div>
              <p className="text-sm text-[#777777]">6K reviews</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="w-8 text-sm">3.0</p>
              <div className="w-[260px] bg-[#E6E6E6] h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[60%]" />
              </div>
              <p className="text-sm text-[#777777]">4K reviews</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="w-8 text-sm">2.0</p>
              <div className="w-[260px] bg-[#E6E6E6] h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[40%]" />
              </div>
              <p className="text-sm text-[#777777]">800K reviews</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="w-8 text-sm">1.0</p>
              <div className="w-[260px] bg-[#E6E6E6] h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[20%]" />
              </div>
              <p className="text-sm text-[#777777]">9K reviews</p>
            </div>
          </div>

          {/* REVIEWS (BOTTOM) */}
          <div className="space-y-8 mt-30">
            <div className=" pb-">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://i.pravatar.cc/40" alt="" className="w-10 h-10 rounded-full" />
                <p className="font-semibold">Alexander Rity</p>
                <p className="text-xs text-[#777777] ml-2">4 months ago</p>

                <div className="ml-40 flex gap-3 text-yellow-400 text-sm">
                  <span className="text-[#777777]"> 4.0 </span> ★ ★ ★ ★ ☆
                </div>
              </div>

              <p className="text-sm text-[#777777] border-b border-[#E6E6E6] pb-10">
                "My wedding lehenga from Vastra was a dream come true.
                <br /> The embroidery work was even more beautiful in person."
              </p>
            </div>

            <div className="border-b border-[#E6E6E6] ">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://i.pravatar.cc/41" alt="" className="w-10 h-10 rounded-full" />
                <p className="font-semibold">Alexander Rity</p>
                <p className="text-xs text-[#777777] ml-2">4 months ago</p>

                <div className="ml-40 flex gap-3 text-yellow-400 text-sm">
                  <span className="text-[#777777]"> 4.0 </span> ★ ★ ★ ★ ☆
                </div>
              </div>

              <p className="text-sm text-[#777777] mb-10">
                "My wedding lehenga from Vastra was a dream come true.
                <br /> The embroidery work was even more beautiful in person."
              </p>
            </div>

            <button className="text-sm underline">Read more reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
