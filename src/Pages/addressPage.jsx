import React, { useState } from 'react';
import { useAddresses } from '../hooks/address/useAddress';
import { useAddressActions } from '../hooks/address/useAddressActions';
import AddressCard from '../Components/savedAddress/AddessCard';
import AddressDetails from '../Components/savedAddress/AddressDetails';

const AddressPage = () => {
  const { data, isLoading } = useAddresses();
  const { addAddress, updateAddress, deleteAddress, makeDefault } =
    useAddressActions();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  if (isLoading) return <p>Loading...</p>;

  const addresses = data?.addresses || [];
  const defaultAddress = data?.defaultAddress;

  const otherAddresses = addresses.filter(
    (addr) => addr._id !== defaultAddress?._id,
  );

  const handleAdd = async (payload) => {
    await addAddress(payload);
    setOpen(false);
  };

  const handleUpdate = async (payload) => {
    await updateAddress(editing._id, payload);
    setEditing(null);
  };

  return (
    <div className='max-w-3xl mx-auto p-6 shadow-2xl rounded-md mt-10'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-semibold'>My Addresses</h1>

        <button
          onClick={() => setOpen(true)}
          className='bg-[#D47784] text-white px-4 py-2 rounded cursor-pointer'
        >
          Add Address
        </button>
      </div>

      {addresses.length === 0 && (
        <div className='text-center py-10 text-gray-500'>
          No address added yet
        </div>
      )}

      {defaultAddress && (
        <>
          <h2 className='font-semibold mb-2'>Default Address</h2>

          <AddressCard
            address={defaultAddress}
            isDefault
            onEdit={(addr) => setEditing(addr)}
            onDelete={deleteAddress}
          />
        </>
      )}

      {otherAddresses.length > 0 && (
        <>
          <h2 className='font-semibold mt-6 mb-2'>Other Addresses</h2>

          {otherAddresses.map((addr) => (
            <AddressCard
              key={addr._id}
              address={addr}
              onEdit={(addr) => setEditing(addr)}
              onDelete={deleteAddress}
              onDefault={makeDefault}
            />
          ))}
        </>
      )}

      {(open || editing) && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40'>
          <AddressDetails
            initialData={editing}
            onSubmit={editing ? handleUpdate : handleAdd}
            onClose={() => {
              setOpen(false);
              setEditing(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddressPage;
