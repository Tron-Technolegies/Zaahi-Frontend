import React from "react";
import { useYouMayLikeProducts } from "../../hooks/productdetail/useYouMayLike";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Card from "../Collections/Card";

export default function ExtraProducts() {
  const { data, isLoading } = useYouMayLikeProducts();
  const products = data || [];

  return (
    <div className="max-w-6xl mx-auto mt-40 px-4 sm:px-6 lg:px-0">
      <div className="flex justify-between items-center">
        <h1 className="font-[Bastoni] text-3xl">You May Also Like</h1>
        <Link
          to={"/collections"}
          className="font-[Inter] flex items-center text-sm cursor-pointer"
        >
          View All &nbsp;
          <FiArrowRight />
        </Link>
      </div>

      <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p className="col-span-3 text-center text-gray-400">
            Loading recommendations...
          </p>
        ) : products && products.length > 0 ? (
          products
            .slice(0, 3)
            .map((product) => <Card key={product._id} product={product} />)
        ) : (
          <p className="col-span-3 text-center text-gray-400">
            No recommendations found.
          </p>
        )}
      </div>
    </div>
  );
}
