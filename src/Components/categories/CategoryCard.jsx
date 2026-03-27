import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { setCategory } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setCategory(category?.categoryName);
        navigate("/collections");
      }}
      className="flex items-center justify-center py-6 px-4 bg-[#F8F8F8] border border-[#E6E6E6] hover:shadow-lg hover:bg-[#D47784] hover:text-white transition-all duration-300 cursor-pointer group"
    >
      <p className="font-[Bastoni] tracking-wide text-lg font-medium ">
        {category?.categoryName}
      </p>
    </div>
  );
};

export default CategoryCard;
