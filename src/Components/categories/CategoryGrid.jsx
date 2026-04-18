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

  const renderCard = (category, isTall) => (
    <div
      key={category.id}
      className={`w-full ${
        isTall ? "aspect-[2/3]" : "aspect-square"
      }  overflow-hidden  shadow-sm group`}
    >
      <div
        onClick={() => {
          setCategory(category?.name);
          navigate("/collections");
        }}
        className="relative block w-full h-full cursor-pointer overflow-hidden"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <p className="text-white instrument-font text-xl md:text-3xl absolute bottom-7 px-2 z-7 duration-500">
          {category.name?.toUpperCase()}
        </p>
        <div className="absolute inset-0 bg-linear-to-t from-[#D77C8476] via-[#D77C84]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start p-5"></div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Grid (2 Columns) */}
      <div className="md:hidden grid grid-cols-2 gap-1 items-start mb-5">
        <div className="flex flex-col gap-1 w-full">
          {categories
            .filter((_, i) => i % 2 === 0)
            .map((c, i) => renderCard(c, i % 2 === 0))}
        </div>
        <div className="flex flex-col gap-1 w-full">
          {categories
            .filter((_, i) => i % 2 === 1)
            .map((c, i) => renderCard(c, i % 2 === 1))}
        </div>
      </div>

      {/* Desktop Grid (3 Columns) */}
      <div className="hidden md:grid grid-cols-3 gap-2 items-start mb-5 max-w-[1150px] mx-auto">
        <div className="flex flex-col gap-2 w-full">
          {categories
            .filter((_, i) => i % 3 === 0)
            .map((c, i) => renderCard(c, i % 2 === 0))}
        </div>
        <div className="flex flex-col gap-2 w-full">
          {categories
            .filter((_, i) => i % 3 === 1)
            .map((c, i) => renderCard(c, i % 2 === 1))}
        </div>
        <div className="flex flex-col gap-2 w-full">
          {categories
            .filter((_, i) => i % 3 === 2)
            .map((c, i) => renderCard(c, i % 2 === 0))}
        </div>
      </div>
    </>
  );
}
