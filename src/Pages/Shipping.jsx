import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeCheckout from "../Components/shipping/HomeCheckout";
import ShippingInfo from "../Components/shipping/ShippingInfo";

const Shipping = () => {
  return (
    <div>
      <Header />
      <HomeCheckout />
      <ShippingInfo />
      <Footer />
    </div>
  );
};

export default Shipping;
