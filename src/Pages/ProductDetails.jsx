import SEO from "../Components/SEO";
import DetailPage from "../Components/Productdetails/DetailPage";
import Description from "../Components/Productdetails/Description";

import Footer from "../Components/Footer";
import AssuranceSection from "../Components/Homepage/Assurance";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../hooks/productdetail/useDetailPage";
import { useEffect, useState } from "react";
import ProductSpecs from "../Components/Productdetails/ProductSpecs";
import ReviewSection from "../Components/Productdetails/ReviewSection";
import ExtraProducts from "../Components/Productdetails/ExtraProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState("description");
  const { data: product, isLoading, isError } = useGetSingleProduct(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.productName,
    "image": product.image?.url || "",
    "description": product.description || "",
    "category": product.category || "",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.basePrice || 0,
      "availability": "https://schema.org/InStock",
      "url": window.location.href
    }
  };

  return (
    <div className="mt-24">
      <SEO 
        title={product.productName}
        description={product.description ? product.description.slice(0, 160) : `Buy ${product.productName} at Zaahi Designs. Explore our latest styles.`}
        canonical={`${window.location.origin}/product-details/${product._id}`}
        schema={productSchema}
      />
      <DetailPage product={product} />
      <Description current={current} setCurrent={setCurrent} />
      {current === "description" && (
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#848484] pt-5">{product.description}</p>
        </div>
      )}
      {current === "specs" && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-[#848484] pt-5">
            <ProductSpecs specs={product.specification} />
          </div>
        </div>
      )}{" "}
      {current === "review" && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-[#848484] pt-5">
            <ReviewSection product={product} />
          </div>
        </div>
      )}
      <ExtraProducts />
      <AssuranceSection />
    </div>
  );
};

export default ProductDetails;
