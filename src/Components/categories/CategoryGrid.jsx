import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const categories = [
  { id: 1, name: "Dupatta", image: "/categories/duppatta.jpg" },
  { id: 2, name: "Ethnic", image: "/categories/ethnic.jpg" },
  { id: 3, name: "Gown", image: "/categories/gown.jpg" },
  { id: 4, name: "Kurti", image: "/categories/kurti.jpg" },
  { id: 5, name: "Lehenga", image: "/categories/lahenga.jpg" },
  { id: 6, name: "Salwar", image: "/categories/salwar.jpg" },
  { id: 7, name: "Sarees", image: "/categories/sarees.jpg" },
];

export default function CategoryGrid() {
  const { setCategory } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6 items-start mb-5">
      {/* Left Column */}
      <div className="flex flex-col gap-3 md:gap-6 w-full">
        {categories.map((category, index) => {
          if (index % 2 !== 0) return null;
          const isTall = index % 4 === 0;
          return (
            <div
              key={category.id}
              className={`w-full ${
                isTall ? "aspect-[2/3]" : "aspect-square"
              } rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group`}
            >
              <div
                onClick={() => {
                  setCategory(category?.name);
                  navigate("/collections");
                }}
                className="relative block w-full h-full overflow-hidden rounded-xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                  <p className="text-white font-[Bastoni] text-xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {category.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3 md:gap-6 w-full">
        {categories.map((category, index) => {
          if (index % 2 !== 1) return null;
          const isTall = index % 4 === 3;
          return (
            <div
              key={category.id}
              className={`w-full ${
                isTall ? "aspect-[2/3]" : "aspect-square"
              } rounded-xl overflow-hidden border border-[#D77C84] bg-white p-1 shadow-sm group`}
            >
              <div
                onClick={() => {
                  setCategory(category?.name);
                  navigate("/collections");
                }}
                className="relative block w-full h-full overflow-hidden rounded-xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#D77C84] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5">
                  <p className="text-white font-[Bastoni] text-xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {category.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
