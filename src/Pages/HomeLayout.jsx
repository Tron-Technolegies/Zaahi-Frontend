import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { handleChatClick } from "../services/whatsapp";

const HomeLayout = () => {
  const data = useLoaderData();
  const { setExchange, setShippingRate } = useContext(UserContext);

  useEffect(() => {
    if (data.data) {
      setExchange(data.data);
    }
    if (data.data2) {
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
          <img src="/whatsapp_logo.webp" className="w-14" />
        </button>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default HomeLayout;
