import SEO from "../Components/SEO";
import Discover from "../Components/Collections/Discover";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-24">
      <SEO 
        title="Shop Our Collections"
        description="Explore the exquisite collections at Zaahi Designs. Discover a curated selection of sarees, lehengas, kurtis, gowns, dupatta, and salwar suits."
        canonical="https://zaahidesigns.com/collections"
      />
      <Discover />
    </div>
  );
};

export default Collections;
