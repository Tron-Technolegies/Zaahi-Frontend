import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "../Collections/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const YouMayLike = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["you-may-like"],
    queryFn: async () => {
      // Recommend products, standard list for now
      const response = await axios.get("http://localhost:3000/api/v1/product");
      return response.data.products;
    },
  });

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
        {isLoading ? (
          <p className="col-span-3 text-center text-gray-400">Loading recommendations...</p>
        ) : products && products.length > 0 ? (
          products.slice(0, 3).map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-400">No recommendations found.</p>
        )}
      </div>
    </div>
  );
};

export default YouMayLike;
