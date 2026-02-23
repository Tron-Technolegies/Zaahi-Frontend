import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../Collections/Card";

const YouMayLike = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 mb-40">
      <div className="flex justify-between">
        <h1 className="font-[Bastoni] text-3xl">You May Also Like</h1>
        <button className="font-[Inter] flex items-center text-xs">
          View All &nbsp;
          <FiArrowRight />
        </button>
      </div>
      <div className="flex gap-5 mt-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default YouMayLike;
