import HeroSection from "../Components/Homepage/HeroSection";
import FeaturedSection from "../Components/Homepage/FeaturedSection";
import NewArrivalsSection from "../Components/Homepage/NewArrivalsSection";
import Membership from "../Components/Homepage/Membership";
import Assurance from "../Components/Homepage/Assurance";
import Review from "../Components/Homepage/Review";
import NewsLetter from "../Components/Homepage/NewsLetter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <NewArrivalsSection />
      <Membership />
      <Assurance />
      <Review />
      <NewsLetter />
    </div>
  );
};

export default Home;
