import React from "react";

const Picture = ({ product }) => {
  const productId = product?._id;
  return (
    <div>
      <div className="border border-[#D9D9D9] p-2 ">
        <img
          src={product?.image}
          alt={product?.productName}
          className="h-[80px] relative object-contain"
        />
      </div>
    </div>
  );
};

export default Picture;
