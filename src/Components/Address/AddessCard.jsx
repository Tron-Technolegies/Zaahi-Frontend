import React from 'react';

const AddressCard = ({ address, isDefault, onEdit, onDelete, onDefault }) => {
  return (
    <div className='border border-gray-500 rounded-lg p-4 mb-4'>
      {isDefault && (
        <span className='text-xs bg-green-200 px-2 py-1 rounded'>Default</span>
      )}

      <h3 className='font-semibold mt-1'>{address.name}</h3>
      <p>{address.street}</p>
      <p>
        {address.state}, {address.country}
      </p>
      <p>{address.pin}</p>
      <p>{address.phone}</p>

      <div className='flex gap-3 mt-3 text-sm'>
        {!isDefault && (
          <button
            onClick={() => onDefault(address._id)}
            className='text-blue-600 cursor-pointer'
          >
            Make Default
          </button>
        )}

        <button
          onClick={() => onEdit(address)}
          className='text-green-600 cursor-pointer'
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(address._id)}
          className='text-red-600 cursor-pointer'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
