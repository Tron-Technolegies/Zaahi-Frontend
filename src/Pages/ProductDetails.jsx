import Header from "../Components/Header";
import DetailPage from "../Components/Productdetails/DetailPage";
import Description from "../Components/Productdetails/Description";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import Footer from "../Components/Footer";
import AssuranceSection from "../Components/Homepage/Assurance";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <DetailPage />
      <Description />
      <div className="max-w-6xl mx-auto">
        <p className="text-[#848484] pt-5">
          Stunning bridal lehenga set featuring heavy zardozi and resham embroidery. Includes
          lehenga, choli, and dupatta. Crafted with love for your special day.
        </p>
      </div>
      <YouMayLike />
      <AssuranceSection />
      <Footer />
    </div>
  );
};

export default ProductDetails;
