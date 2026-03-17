import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import Description from "../Components/Productdetails/Description";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";
import AssuranceSection from "../Components/Homepage/Assurance";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../hooks/productdetail/useDetailPage";

const ProductDetails = () => {
  const { id } = useParams();
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
      <Description />
      <div className="max-w-6xl mx-auto">
        <p className="text-[#848484] pt-5">
          Stunning bridal lehenga set featuring heavy zardozi and resham
          embroidery. Includes lehenga, choli, and dupatta. Crafted with love
          for your special day.
        </p>
      </div>
      <YouMayLike />
      <AssuranceSection />
    </div>
  );
};

export default ProductDetails;
