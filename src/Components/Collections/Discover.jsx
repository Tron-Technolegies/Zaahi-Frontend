import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerFill } from "react-icons/ri";

import Card from "./Card";

const Discover = () => {
  return (
    <>
      <div className=" flex flex-col mt-20 items-center justify-center">
        <p className="uppercase font-[Inter] text-[18px]">discover</p>
        <p className="font-[Bastoni] text-[45px] front-medium pt-3">Our Collection</p>
        <p className="font-[Inter] text-[#848484] text-[20px] pt-4">
          12 exquisite pieces curated for the discerning collector
        </p>
      </div>

      <div className="border-t border-[#E6E6E6] mt-30">
        <div className="max-w-7xl mx-auto grid grid-cols-12">
          <aside className="col-span-3 border-r border-[#E6E6E6]">
            <div className="flex items-center justify-between px-6 py-6">
              <h2 className="text-xl font-[Inter] text-[#181817]  tracking-wide font-medium">
                FILTERS
              </h2>
              <button className="text-sm font-[Inter] text-[#777777]">Reset</button>
            </div>

            <div className="border-t border-[#E6E6E6]">
              <div className="px-6 py-6">
                <h3 className="text-xl font-[Inter] text-[#181817]  font-medium mb-4">
                  COLLECTIONS
                </h3>
                <div className="flex flex-wrap gap-2 font-[Inter] text-[#181817] text-sm">
                  <button className="px-3 py-1 bg-[#E8E8E8]">Best Sellers</button>
                  <button className="px-3 py-1 bg-[#E8E8E8]">New Arrivals</button>
                  <button className="px-3 py-1 bg-[#E8E8E8]">Featured</button>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E6E6E6]">
              <div className="px-6 py-6">
                <h3 className="text-xl font-[Inter] text-[#181817] font-medium mb-4">PRICE</h3>
                <input type="range" className="w-full accent-[#D47784]" />
                <div className="flex justify-between text-md mt-2">
                  <span className="font-[Inter] text-[#919191]">Low</span>
                  <span className="font-[Inter] text-[#383838]">High</span>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-[#E6E6E6]">
              <div className="px-6 py-6">
                <h3 className="text-xl font-medium mb-4 text-[#181817]">AVAILABILITY</h3>
                <button className="px-3 py-1 text-sm font-[Inter] bg-[#E8E8E8] ">
                  Include Out of Stock
                </button>
              </div>
            </div>
          </aside>

          <section className="col-span-9 px-10">
            <div className="border-b border-[#E6E6E6]  text-[#777777] text-sm font-[Inter] py-5 flex items-center gap-3 ">
              <button className="px-4 py-1.5 hover:bg-[#D77C84] hover:text-white hover:border-0 border border-[#E6E6E6] hover:scale duration-500 ease-in-out">
                All Collections
              </button>
              <button className="px-4 py-1.5 hover:bg-[#D77C84] hover:text-white hover:border-0 border border-[#E6E6E6] hover:scale-105 duration-800 ease-in-out">
                New Arrivals
              </button>
              <button className="px-4 py-1.5 hover:bg-[#D77C84] hover:text-white hover:border-0 border border-[#E6E6E6] hover:scale-105 duration-800 ease-in-out">
                Trending
              </button>
              <button className="px-4 py-1.5 hover:bg-[#D77C84] hover:text-white hover:border-0 border border-[#E6E6E6] hover:scale-105 duration-800 ease-in-out">
                More
              </button>
            </div>

            <div className="flex justify-end items-center gap-3 mt-6 text-sm">
              <div className="flex items-center gap-2 border border-[#E6E6E6] px-3 py-1.5">
                <span className="text-[#777777]">
                  <CiSearch />
                </span>
                <input
                  className="outline-none placeholder:text-[#9A9A9A]"
                  placeholder="Search here"
                />
              </div>
              <select className="border border-[#E6E6E6] px-3 py-1.5 text-[#9A9A9A]">
                <option>Sort by</option>
              </select>
              <RiEqualizerFill className="text-[#777777]" />
            </div>

            <div className="grid grid-cols-2 gap-12 mt-10">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </div>
        <div className="flex justify-center mt-20 mb-20">
          <button className=" bg-[#D77C84] text-xs text-white px-5 py-3 hover:scale transition">
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Discover;
