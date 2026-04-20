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
    <section className="w-full flex justify-center md:py-16 py-3 max-w-[1100px] place-content-center mx-auto">
      <div className="w-full max-w-7xl px-3 lg:px-12 flex flex-col gap-2 ">
        <div className="flex md:flex-row flex-col justify-between items-start mb-12">
          <div className=" flex flex-col gap-2 items-center mx-auto">
            <p className="text-[14px] text-[#181817] font-sans">
              CURATED SELECTION
            </p>

            <h2 className="font-[Bastoni] text-4xl mt-2">Featured Pieces</h2>

            <p className="text-[15px] max-w-xl text-[#848484] text-center font-sans mt-3">
              Handcrafted ethnic wear that celebrates the art of Indian
              textiles. Each piece tells a story of tradition and craftsmanship.
            </p>
          </div>
        </div>
        <Link
          to="/collections?filter=featured"
          className="ms-auto self-end text-sm cursor-pointer hover:underline text-[#D77C84]"
        >
          View All →
        </Link>
        {isLoading ? (
          <Loading />
        ) : data?.products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-2 gap-1 items-start lg:max-h-screen">
            {/* Left Column */}
            <div className="flex flex-col gap-1 md:gap-2 w-full">
              {/* Top Left - Tall */}
              {data.products[0] && (
                <div className="w-full aspect-2/3  overflow-hidden  bg-white  shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[0]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[0].image?.url}
                      alt={data.products[0].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {/* <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[0].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p> */}
                    <Link
                      to={`/product-details/${data.products[0]?._id}`}
                      className="text-white px-4 py-2 bg-[#d77c84] instrument-font text-sm absolute bottom-7 duration-500 z-10"
                    >
                      Shop Now
                    </Link>
                    <div className="absolute inset-0 bg-linear-to-t from-[#d77c8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
                  </Link>
                </div>
              )}

              {/* Bottom Left - Short */}
              {data.products[2] && (
                <div className="w-full aspect-square overflow-hidden bg-white shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[2]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[2].image.url}
                      alt={data.products[2].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    {/* <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[2].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p> */}
                    <Link
                      to={`/product-details/${data.products[2]?._id}`}
                      className="text-white px-4 py-2 bg-[#d77c84] instrument-font text-sm absolute bottom-7 duration-500 z-10"
                    >
                      Shop Now
                    </Link>
                    <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-1 md:gap-2 w-full">
              {/* Top Right - Short */}
              {data.products[1] && (
                <div className="w-full aspect-square overflow-hidden bg-white shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[1]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[1].image.url}
                      alt={data.products[1].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    {/* <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[1].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p> */}
                    <Link
                      to={`/product-details/${data.products[1]?._id}`}
                      className="text-white px-4 py-2 bg-[#d77c84] instrument-font text-sm absolute bottom-7 duration-500 z-10"
                    >
                      Shop Now
                    </Link>
                    <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
                  </Link>
                </div>
              )}

              {/* Bottom Right - Tall */}
              {data.products[3] && (
                <div className="w-full aspect-2/3  overflow-hidden bg-white shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[3]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[3].image.url}
                      alt={data.products[3].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {/* <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[3].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p> */}
                    <Link
                      to={`/product-details/${data.products[3]?._id}`}
                      className="text-white px-4 py-2 bg-[#d77c84] instrument-font text-sm absolute bottom-7 duration-500 z-10"
                    >
                      Shop Now
                    </Link>
                    <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
                  </Link>
                </div>
              )}
            </div>

            {/* Third Column */}
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col gap-1 md:gap-2 w-full">
              {/* Top Third - Tall */}
              {data.products[4] && (
                <div className="w-full aspect-2/3  overflow-hidden bg-white shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[4]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[4].image.url}
                      alt={data.products[4].productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {/* <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[4].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p> */}
                    <Link
                      to={`/product-details/${data.products[4]?._id}`}
                      className="text-white px-4 py-2 bg-[#d77c84] instrument-font text-sm absolute bottom-7 duration-500 z-10"
                    >
                      Shop Now
                    </Link>
                    <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
                  </Link>
                </div>
              )}

              {/* Bottom Third - Short */}
              {data.products[5] && (
                <div className="w-full aspect-square overflow-hidden bg-white shadow-sm group">
                  <Link
                    to={`/product-details/${data.products[5]._id}`}
                    className="relative block w-full h-full overflow-hidden"
                  >
                    <img
                      src={data.products[5].image.url}
                      alt={data.products[5].productName}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <p className="text-white px-2 instrument-font md:text-xl text-sm absolute bottom-7 duration-500 z-10">
                      {data.products[5].productName
                        ?.slice(0, 20)
                        ?.toUpperCase()}
                    </p>
                    <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
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
