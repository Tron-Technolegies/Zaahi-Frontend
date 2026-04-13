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
      <div className="w-full max-w-7xl px-3 lg:px-12">
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

        {isLoading ? (
          <Loading />
        ) : data?.products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-3 md:gap-6 w-full">
              {/* Top Left - Tall */}
              {data.products[0] && (
                <div className="w-full aspect-2/3 rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[0]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[0].image.url}
                      alt={data.products[0].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[0].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}

              {/* Bottom Left - Short */}
              {data.products[2] && (
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[2]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[2].image.url}
                      alt={data.products[2].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[2].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 md:gap-6 w-full">
              {/* Top Right - Short */}
              {data.products[1] && (
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[1]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[1].image.url}
                      alt={data.products[1].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[1].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}

              {/* Bottom Right - Tall */}
              {data.products[3] && (
                <div className="w-full aspect-2/3 rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[3]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[3].image.url}
                      alt={data.products[3].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[3].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Third Column */}
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-6 w-full">
              {/* Top Third - Tall */}
              {data.products[4] && (
                <div className="w-full aspect-2/3 rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[4]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[4].image.url}
                      alt={data.products[4].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[4].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}

              {/* Bottom Third - Short */}
              {data.products[5] && (
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[5]._id}`}
                    className="relative block w-full h-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={data.products[5].image.url}
                      alt={data.products[5].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                      <p className="text-white font-[Bastoni] md:text-xl text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {data.products[5].productName}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">No featured pieces found.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
