import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import Description from "../Components/Productdetails/Description";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";
import AssuranceSection from "../Components/Homepage/Assurance";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../hooks/productdetail/useDetailPage";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState("description");
  const { data: product, isLoading, isError } = useGetSingleProduct(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-x">Failed to load product details.</p>
      </div>
    );
  }

  return (
    <div>
      <DetailPage product={product} />
      <Description current={current} setCurrent={setCurrent} />
      {current === "description" && (
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#848484] pt-5">{product.description}</p>
        </div>
      )}
      {current === "specs" && (
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#848484] pt-5">{"specs"}</p>
        </div>
      )}{" "}
      {current === "review" && (
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#848484] pt-5">{"Reviews"}</p>
        </div>
      )}
      <YouMayLike />
      <AssuranceSection />
    </div>
  );
};

export default ProductDetails;
