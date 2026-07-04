import React from "react";

const Picture = ({ product, alt, setSelected }) => {
  const productId = product?._id;
  return (
    <div onClick={() => setSelected(product)}>
      <div className="border border-[#D9D9D9] p-1 cursor-pointer">
        <img
          src={product?.url}
          alt={alt || "Product Thumbnail"}
          loading="lazy"
          className="h-12.5 relative object-contain"
        />
      </div>
    </div>
  );
};

export default Picture;
