import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { handleChatClick } from "../services/whatsapp";
import ReactPixel from "../services/pixel";

const HomeLayout = () => {
  const data = useLoaderData();
  const { setExchange, setShippingRate } = useContext(UserContext);

  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);

  useEffect(() => {
    if (data?.data) {
      setExchange(data.data);
    }
    if (data?.data2) {
      setShippingRate(data.data2);
    }
  }, [data]);
  return (
    <>
      <Header />
      <div className="w-full">
        <button
          className="w-fit z-50 fixed bottom-4 right-4"
          onClick={handleChatClick}
        >
          <img
            src="/whatsapp_logo.webp"
            alt="WhatsApp Support Chat"
            loading="lazy"
            className="w-14"
          />
        </button>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default HomeLayout;
