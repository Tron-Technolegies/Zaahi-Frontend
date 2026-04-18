import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OurCategories from "../Components/categories/OurCategories";
import CategoryCard from "../Components/categories/CategoryCard";
import { useGetCategories } from "../hooks/categories/useCategory";
import CategoryGrid from "../Components/categories/CategoryGrid";

const Categories = () => {
  const { isError, isLoading, error, data } = useGetCategories();
  return (
    <div className="mt-24">
      <OurCategories />
      <div className="max-w-7xl mx-auto px-4 py-5 mb-20">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          <CategoryGrid categories={data} />
        )}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>{error.message}</p>
          ) : (
            data.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
