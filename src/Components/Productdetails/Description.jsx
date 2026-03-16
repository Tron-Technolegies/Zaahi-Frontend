import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
  const [active, setActive] = useState("DESCRIPTION");
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto mt-40 px-4">
      <div className="flex gap-10 border-b border-[#DADADA]">
        <button
          onClick={() => setActive("DESCRIPTION")}
          className={`pb-3 font-semibold cursor-pointer
            ${active === "DESCRIPTION" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          DESCRIPTION
        </button>

        <button
          onClick={() => setActive("SPECIFICATIONS")}
          className={`pb-3 font-semibold cursor-pointer
            ${active === "SPECIFICATIONS" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          SPECIFICATIONS
        </button>

        <button
          onClick={() => {
            setActive("REVIEWS");
            navigate(`/product-reviews/${id}`);
          }}
          className={`pb-3 font-semibold cursor-pointer
            ${active === "REVIEWS" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          REVIEWS
        </button>
      </div>
    </div>
  );
};

export default Description;
