import Header from "../Components/Header";
import Discover from "../Components/Collections/Discover";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-24">
      <Discover />
    </div>
  );
};

export default Collections;
