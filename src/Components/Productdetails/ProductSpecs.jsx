import React from "react";

export default function ProductSpecs({ specs }) {
  return (
    <div className="flex flex-col gap-3">
      {specs.map((item) => (
        <div
          key={item.spec}
          className="flex gap-7 items-center justify-between max-w-75"
        >
          <p>- {item.spec}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
