import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: 500,
  overflowY: "scroll",
  p: 4,
};

export default function SmallScreenFilter({
  open,
  handleClose,
  isFeatured,
  newArrivals,
  categories,
  category,
  min,
  max,
  setSearch,
  setCurrent,
  setIsFeatured,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setMin,
  setMax,
  setNewArrivals,
  setSortBy,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Write a review
        </Typography>
        <aside className=" border-r  border-[#E6E6E6] w-87.5">
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
      </Box>
    </Modal>
  );
}
