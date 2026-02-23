import React from "react";
import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";
import Reviews from "../Components/Product Reviews/Reviews";

const ProductReviews = () => {
  return (
    <div>
      <Header />
      <DetailPage />
      <Reviews />
      <YouMayLike />
      <Footer />
    </div>
  );
};

export default ProductReviews;
