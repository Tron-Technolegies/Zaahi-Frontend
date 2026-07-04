import SEO from "../Components/SEO";
import HeroSection from "../Components/Homepage/HeroSection";
import FeaturedSection from "../Components/Homepage/FeaturedSection";
import NewArrivalsSection from "../Components/Homepage/NewArrivalsSection";
import Membership from "../Components/Homepage/Membership";
import Assurance from "../Components/Homepage/Assurance";
import Review from "../Components/Homepage/Review";
import NewsLetter from "../Components/Homepage/NewsLetter";
import ReelsSection from "../Components/Homepage/ReelsSection";

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zaahi Designs",
    "url": "https://zaahidesigns.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zaahidesigns.com/collections?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zaahi Designs",
    "url": "https://zaahidesigns.com/",
    "logo": "https://zaahidesigns.com/zaahi-logo.png",
    "sameAs": [
      "https://www.facebook.com/share/1CTT8MvpYV/",
      "https://www.instagram.com/zaahi_designs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-773604-5120",
      "contactType": "customer service",
      "email": "zaahidesigns@gmail.com"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zaahi Designs",
    "image": "https://zaahidesigns.com/zaahi-logo.png",
    "telephone": "+91-773604-5120",
    "email": "zaahidesigns@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chavakkad",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680506",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "url": "https://zaahidesigns.com/"
  };

  return (
    <div>
      <SEO 
        title="Premium Pakistani &amp; Ethnic Wear in Dubai, UAE"
        description="Shop premium Pakistani suits, ethnic wear and best-selling collections at Zaahi Designs. Elegant designs, AED pricing, fast delivery across the UAE."
        canonical="https://zaahidesigns.com/"
        schema={[homeSchema, orgSchema, localBusinessSchema]}
      />
      <HeroSection />
      <FeaturedSection />
      <NewArrivalsSection />
      <Review />
      {/* <Membership /> */}
      <Assurance />
      {/* <ReelsSection /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
