import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

const HomeLayout = () => {
  const data = useLoaderData();
  const { setExchange } = useContext(UserContext);

  useEffect(() => {
    if (data) {
      setExchange(data);
    }
  }, [data]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
