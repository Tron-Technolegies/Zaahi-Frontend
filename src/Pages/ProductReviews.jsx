import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";
import Reviews from "../Components/Product Reviews/Reviews";
import AssuranceSection from "../Components/Homepage/Assurance";
import { useGetSingleProduct } from "../hooks/productdetail/useDetailPage";
import { useParams } from "react-router-dom";

const ProductReviews = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetSingleProduct(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading product reviews...</p>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl ">Failed to load product reviews.</p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <DetailPage product={product} />
      <Reviews />
      <YouMayLike />
      <AssuranceSection />
      <Footer />
    </div>
  );
};

export default ProductReviews;
