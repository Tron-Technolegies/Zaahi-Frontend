import Card from "../Collections/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const NewArrivalsSection = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/v1/product");
      return response.data.products;
    },
  });

  return (
    <section className="w-full flex justify-center py-16 ">
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <div className="border-t border-gray-200 mb-16"></div>
        <div className="flex md:flex-row flex-col justify-between items-start mb-12">
          <div className="max-w-xl">
            <p className="text-[14px] text-[#181817] font-sans">JUST ARRIVED</p>

            <h2 className="font-[Bastoni] text-4xl mt-2">New Arrivals</h2>

            <p className="text-[15px] text-[#848484] font-sans mt-3">
              The latest additions to our collection, fresh from the world's
              most prestigious ateliers.
            </p>
          </div>

          <Link
            to="/collections?filter=new-arrivals"
            className="mt-6 text-sm cursor-pointer hover:underline text-[#D77C84]"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            <p className="col-span-3 text-center text-gray-400">
              Loading new arrivals...
            </p>
          ) : products && products.length > 0 ? (
            products
              .slice(0, 3)
              .map((product) => <Card key={product._id} product={product} />)
          ) : (
            <p className="col-span-3 text-center text-gray-400">
              No new arrivals found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
