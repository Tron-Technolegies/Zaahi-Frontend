import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";

const Discover = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const currentSort = searchParams.get("sort") || "";
  const currentSearch = searchParams.get("search") || "";

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/v1/product");
      return response.data.products;
    },
  });

  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    if (filter === "all") {
      params.delete("filter");
      params.delete("sort");
      params.delete("search");
    } else {
      params.set("filter", filter);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const handleSortClick = (sortType) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortType);
    setSearchParams(params);
  };

  let displayProducts = products ? [...products] : [];
  if (currentFilter === "new-arrivals" && displayProducts.length > 0) {
    displayProducts.reverse();
  } else if (currentFilter === "featured" && displayProducts.length > 0) {
    displayProducts.sort((a, b) => a.productName.localeCompare(b.productName));
  }

  if (currentSort === "low") {
    displayProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (currentSort === "high") {
    displayProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  if (currentSearch) {
    displayProducts = displayProducts.filter((product) =>
      product.productName?.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  return (
    <>
      <div className=" flex flex-col mt-20 items-center justify-center">
        <p className="uppercase font-[Inter] text-[18px]">discover</p>
        <p className="font-[Bastoni] text-[45px] front-medium pt-3">Our Collection</p>
        <p className="font-[Inter] text-[#848484] text-[20px] pt-4">
          Explore exquisite pieces curated for the discerning collector
        </p>
      </div>

      <div className="border-t border-[#E6E6E6] mt-30">
        <div className="max-w-7xl mx-auto grid grid-cols-12">
          <aside className="col-span-3 border-r border-[#E6E6E6]">
            <div className="flex items-center justify-between px-6 py-6">
              <h2 className="text-xl font-[Inter] text-[#181817]  tracking-wide font-medium">
                FILTERS
              </h2>
              <button onClick={() => handleFilterClick("all")} className="text-sm font-[Inter] text-[#777777] hover:underline cursor-pointer">Reset</button>
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
                <div className="flex gap-2 text-sm mt-2">
                  <button
                    onClick={() => handleSortClick("low")}
                    className={`px-4 py-1.5 border border-[#E6E6E6] w-full ${currentSort === "low" ? "bg-[#D77C84] text-white" : "hover:bg-[#D77C84] hover:text-white"}`}
                  >
                    Low
                  </button>
                  <button
                    onClick={() => handleSortClick("high")}
                    className={`px-4 py-1.5 border border-[#E6E6E6] w-full ${currentSort === "high" ? "bg-[#D77C84] text-white" : "hover:bg-[#D77C84] hover:text-white"}`}
                  >
                    High
                  </button>
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
              <button
                onClick={() => handleFilterClick("all")}
                className={`px-4 py-1.5 border border-[#E6E6E6] ${currentFilter === "all" ? "bg-[#D77C84] text-white" : "hover:bg-[#D77C84] hover:text-white border-0"}`}
              >
                All Collections
              </button>
              <button
                onClick={() => handleFilterClick("new-arrivals")}
                className={`px-4 py-1.5 border border-[#E6E6E6] ${currentFilter === "new-arrivals" ? "bg-[#D77C84] text-white" : "hover:bg-[#D77C84] hover:text-white border-0"}`}
              >
                New Arrivals
              </button>
              <button
                onClick={() => handleFilterClick("featured")}
                className={`px-4 py-1.5 border border-[#E6E6E6] ${currentFilter === "featured" ? "bg-[#D77C84] text-white" : "hover:bg-[#D77C84] hover:text-white border-0"}`}
              >
                Featured
              </button>
              <button className="px-4 py-1.5 hover:bg-[#D77C84] hover:text-white hover:border-0 border border-[#E6E6E6] ">
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
                  value={currentSearch}
                  onChange={handleSearchChange}
                />
              </div>
              <select className="border border-[#E6E6E6] px-3 py-1.5 text-[#9A9A9A]">
                <option>Sort by</option>
              </select>
              <RiEqualizerFill className="text-[#777777]" />
            </div>

            <div className="grid grid-cols-2 gap-12 mt-10">
              {isLoading ? (
                <p className="col-span-2 text-center text-gray-400">Loading products...</p>
              ) : displayProducts && displayProducts.length > 0 ? (
                displayProducts.map((product) => <Card key={product._id} product={product} />)
              ) : (
                <p className="col-span-2 text-center text-gray-400">No products found.</p>
              )}
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
