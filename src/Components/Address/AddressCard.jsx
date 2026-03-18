import React from "react";

export default function AddressCard({ address }) {
  return (
    <div className="p-5 border border-[#E8E8E8]">
      <div>
        <p>{address.name}</p>
        <p>
          {address.street}, {address.state} <br /> {address.country},{" "}
          {address.pin} <br />
          {address.phone}
        </p>
      </div>
      <div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {!address.isDefault && <button>Make Default</button>}
      </div>
    </div>
  );
}
