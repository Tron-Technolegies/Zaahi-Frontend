import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex items-center justify-center py-6 px-4 bg-[#F8F8F8] border border-[#E6E6E6] hover:shadow-lg hover:border-black transition-all duration-300 cursor-pointer group">
      <p className="font-[Inter] text-lg font-medium text-gray-800 group-hover:text-black transition-colors">
        {category?.categoryName}
      </p>
    </div>
  );
};

export default CategoryCard;
