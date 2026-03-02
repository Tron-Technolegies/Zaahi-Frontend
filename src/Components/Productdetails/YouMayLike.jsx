import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../Collections/Card";

const YouMayLike = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 px-4 sm:px-6 lg:px-0">
      <div className="flex justify-between items-center">
        <h1 className="font-[Bastoni] text-3xl">You May Also Like</h1>
        <button className="font-[Inter] flex items-center text-sm cursor-pointer">
          View All &nbsp;
          <FiArrowRight />
        </button>
      </div>

      <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default YouMayLike;
