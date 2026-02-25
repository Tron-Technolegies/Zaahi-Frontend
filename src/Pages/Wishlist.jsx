import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WishlistCard from "../Components/wishlist/WishlistCard";

const Wishlist = () => {
  return (
    <div>
      <Header />
      <div className="flex mt-20 px-4 md:px-12 lg:px-24 gap-3 text-sm font-[Inter]">
        <button className="text-[#848484]">Home &gt;</button>
        <button>Wishlist</button>
      </div>

      <div className="mt-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col gap-8">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
