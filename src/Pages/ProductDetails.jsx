import React from "react";
import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import Description from "../Components/Productdetails/Description";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <DetailPage />
      <Description />
      <YouMayLike />
      <Footer />
    </div>
  );
};

export default ProductDetails;
