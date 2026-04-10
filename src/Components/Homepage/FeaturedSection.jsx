import Card from "../Collections/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../hooks/products/useGetProducts";
import Loading from "../Loading";

const FeaturedSection = () => {
  const { isLoading, data } = useGetProducts({
    search: "",
    sortBy: "",
    currentPage: 1,
    isFeatured: true,
    newArrivals: false,
    minPrice: null,
    maxPrice: null,
    category: "ALL",
  });

  return (
    <section className="w-full flex justify-center md:py-16 py-3">
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <div className="flex md:flex-row flex-col justify-between items-start mb-12">
          <div className="max-w-xl">
            <p className="text-[14px] text-[#181817] font-sans">
              CURATED SELECTION
            </p>

            <h2 className="font-[Bastoni] text-4xl mt-2">Featured Pieces</h2>

            <p className="text-[15px] text-[#848484] font-sans mt-3">
              Handcrafted ethnic wear that celebrates the art of Indian
              textiles. Each piece tells a story of tradition and craftsmanship.
            </p>
          </div>

          <Link
            to="/collections?filter=featured"
            className="mt-6 text-sm cursor-pointer hover:underline text-[#D77C84]"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-2 gap-y-7">
          {isLoading ? (
            <Loading />
          ) : data?.products?.length > 0 ? (
            data.products
              .slice(0, 3)
              .map((product) => <Card key={product._id} product={product} />)
          ) : (
            <p className="col-span-3 text-center text-gray-400">
              No featured pieces found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
