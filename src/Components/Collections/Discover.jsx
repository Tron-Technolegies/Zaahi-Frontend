import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerFill } from "react-icons/ri";
import { useDiscover } from "../../hooks/collections/useDiscover.js";
import Card from "./Card";
import { useGetProducts } from "../../hooks/products/useGetProducts.js";
import Loading from "../Loading.jsx";
import { useGetCategories } from "../../hooks/categories/useCategory.js";
import PaginationComponent from "../PaginationComponent.jsx";
import SmallScreenFilter from "./SmallScreenFilter.jsx";
import { UserContext } from "../../UserContext.jsx";

const Discover = () => {
  const { category, setCategory } = useContext(UserContext);
  const [openSmall, setOpenSmall] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrent] = useState(1);
  const [isFeatured, setIsFeatured] = useState(false);
  const [newArrivals, setNewArrivals] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [debounced, setDebounced] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const { isLoading: categoryLoading, data: categories } = useGetCategories();
  const { isLoading, isError, error, data } = useGetProducts({
    search: debounced,
    sortBy,
    currentPage,
    isFeatured,
    newArrivals,
    minPrice,
    maxPrice,
    category,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(search);
    }, 700);

    return () => clearTimeout(handler);
  }, [search]);
  return (
    <>
      <div className=" flex flex-col md:mt-10 items-center justify-center">
        <p className="uppercase font-[Inter] text-[18px]">discover</p>
        <p className="font-[Bastoni] text-[45px] front-medium pt-3">
          Our Collection
        </p>
        <p className="font-[Inter] text-center text-[#848484] text-[20px] pt-4">
          Explore exquisite pieces curated for the discerning collector
        </p>
      </div>

      <div className="border-t border-[#E6E6E6] mt-10">
        <div className="max-w-7xl mx-auto flex gap-7">
          <aside className=" border-r hidden md:block border-[#E6E6E6] w-87.5">
            <div className="flex items-center justify-between px-6 py-6">
              <h2 className="text-xl font-[Inter] text-[#181817]  tracking-wide font-medium">
                FILTERS
              </h2>
              <button
                onClick={() => {
                  setSearch("");
                  setCurrent(1);
                  setIsFeatured(false);
                  setCategory("ALL");
                  setMinPrice(0);
                  setMaxPrice(null);
                  setMin(0);
                  setMax(0);
                  setNewArrivals(false);
                  setSortBy("");
                }}
                className="text-sm font-[Inter] text-[#777777] hover:underline cursor-pointer"
              >
                Reset
              </button>
            </div>

            <div className="border-t border-[#E6E6E6]">
              <div className="px-6 py-6">
                <h3 className="text-xl font-[Inter] text-[#181817]  font-medium mb-4">
                  COLLECTIONS
                </h3>
                <div className="flex flex-wrap gap-2 font-[Inter] text-[#181817] text-sm">
                  <button
                    onClick={() => setNewArrivals(!newArrivals)}
                    className={`px-3 py-1 ${newArrivals ? "bg-gray-400" : "bg-[#E8E8E8]"} `}
                  >
                    New Arrivals
                  </button>
                  <button
                    onClick={() => setIsFeatured(!isFeatured)}
                    className={`px-3 py-1 ${isFeatured ? "bg-gray-400" : "bg-[#E8E8E8]"} `}
                  >
                    Featured
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-[Inter] text-[#181817] font-medium mb-4">
                Categories
              </h3>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 outline-none border border-[#D9D9D9] w-full"
              >
                <option value={"ALL"}>ALL</option>
                {categories?.map((item) => (
                  <option key={item._id} value={item.categoryName}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-t border-[#E6E6E6]">
              <div className="px-6 py-6">
                <h3 className="text-xl font-[Inter] text-[#181817] font-medium mb-4">
                  PRICE
                </h3>
                <div className="flex flex-col gap-2 text-sm mt-2">
                  <label>Min Price</label>
                  <input
                    type="number"
                    placeholder="min. price"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    className="p-2 shadow-md outline-none"
                  />
                  <label>Max Price</label>
                  <input
                    type="number"
                    placeholder="max. price"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    className="p-2 shadow-md outline-none"
                  />
                  <button
                    onClick={() => {
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                    className="bg-[#D47784] p-2 text-white mt-2"
                  >
                    Apply{" "}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <section className="w-full px-10">
            {category !== "ALL" && (
              <p className="mt-5 font-[Bastoni]">
                Showing our {category} Collections
              </p>
            )}
            <div className="flex justify-end items-center md:gap-3 gap-1 mt-6 text-sm">
              <div className="flex items-center gap-2 border border-[#E6E6E6] md:px-3 px-1 py-1.5">
                <span className="text-[#777777]">
                  <CiSearch />
                </span>
                <input
                  type="search"
                  className="outline-none placeholder:text-[#9A9A9A]"
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#E6E6E6] md:px-3 px-1 py-1.5 text-[#9A9A9A]"
              >
                <option value={""}>Default</option>
                <option value={"ascending"}>Low to High</option>
                <option value={"descending"}>High to Low</option>
              </select>
              <button className="md:hidden" onClick={() => setOpenSmall(true)}>
                <RiEqualizerFill className="text-[#777777]" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-10">
              {isLoading ? (
                <Loading />
              ) : data.products?.length > 0 ? (
                data.products?.map((product) => (
                  <Card key={product._id} product={product} />
                ))
              ) : (
                <p className="col-span-2 text-center text-gray-400">
                  No products found.
                </p>
              )}
            </div>
            {data?.totalPages > 1 && (
              <PaginationComponent
                totalPage={data?.totalPages}
                page={currentPage}
                pageChange={(e, v) => setCurrent(v)}
              />
            )}
          </section>
        </div>
      </div>
      <SmallScreenFilter
        open={openSmall}
        handleClose={() => setOpenSmall(false)}
        isFeatured={isFeatured}
        newArrivals={newArrivals}
        categories={categories}
        category={category}
        min={min}
        max={max}
        setSearch={setSearch}
        setCurrent={setCurrent}
        setIsFeatured={setIsFeatured}
        setCategory={setCategory}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setMin={setMin}
        setMax={setMax}
        setNewArrivals={setNewArrivals}
        setSortBy={setSortBy}
      />
    </>
  );
};

export default Discover;
