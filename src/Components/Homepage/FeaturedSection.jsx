import Card from "../Collections/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/v1/product");
      return response.data.products;
    },
  });

  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-xl">
            <p className="text-[14px] text-[#181817] font-sans">CURATED SELECTION</p>

            <h2 className="font-[Bastoni] text-4xl mt-2">Featured Pieces</h2>

            <p className="text-[15px] text-[#848484] font-sans mt-3">
              Handcrafted ethnic wear that celebrates the art of Indian textiles. Each piece tells a
              story of tradition and craftsmanship.
            </p>
          </div>

          <Link
            to="/collections?filter=featured"
            className="mt-6 text-sm cursor-pointer hover:underline text-[#D77C84]"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            <p className="col-span-3 text-center text-gray-400">Loading featured pieces...</p>
          ) : products && products.length > 0 ? (
            products.slice(0, 3).map((product) => <Card key={product._id} product={product} />)
          ) : (
            <p className="col-span-3 text-center text-gray-400">No featured pieces found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
