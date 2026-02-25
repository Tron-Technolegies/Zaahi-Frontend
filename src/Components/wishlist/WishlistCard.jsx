import { RiShoppingBag3Line } from "react-icons/ri";

const WishlistCard = () => {
  return (
    <div
      className="flex flex-col md:flex-row font-[Inter] tracking-wide items-start md:items-center justify-between 
                    py-5 px-6 border border-[#E8E8E8] rounded-2xl gap-4"
    >
      <div className="flex items-center gap-4">
        <img src="/Featured/Lehanga.png" className="h-20 w-auto" />
        <div className="flex flex-col">
          <p className="font-medium">Order ID: ABC-84521</p>
          <p className="text-sm">Raw Silk Dupatta</p>
          <p className="font-medium">$12,500</p>
        </div>
      </div>

      <button
        className="w-full md:w-[200px]  flex items-center justify-center gap-2 
       bg-[#D77C84] font-[Inter] text-white text-sm py-2 ml-20"
      >
        <RiShoppingBag3Line className="text-lg" />
        Add to bag
      </button>
      <span className="cursor-pointer text-2xl text-[#777777] self-end md:self-auto">×</span>
    </div>
  );
};

export default WishlistCard;
