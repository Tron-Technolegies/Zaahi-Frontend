import React from "react";

const Picture = ({ image }) => {
  return (
    <div>
      <div className="border border-[#D9D9D9] p-2 ">
        <img src={image || "/Featured/Lehanga.png"} alt="" className="h-[80px] relative object-contain" />
      </div>
    </div>
  );
};

export default Picture;
