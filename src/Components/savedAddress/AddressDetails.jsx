import React, { useState } from 'react';
import AddressCard from './AddessCard';

import { useAddresses } from '../../hooks/address/useAddress';
import { useAddressActions } from '../../hooks/address/useAddressActions';

const AddressDetails = () => {
  const { data: addresses = [], isLoading } = useAddresses();

  const { addAddress, updateAddress, deleteAddress, makeDefault } =
    useAddressActions();

  const [form, setForm] = useState({
    name: '',
    street: '',
    state: '',
    country: '',
    pin: '',
    phone: '',
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateAddress(editingId, form);
        setEditingId(null);
      } else {
        await addAddress(form);
      }

      setForm({
        name: '',
        street: '',
        state: '',
        country: '',
        pin: '',
        phone: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (address) => {
    setForm({
      name: address.name || '',
      street: address.street || '',
      state: address.state || '',
      country: address.country || '',
      pin: address.pin || '',
      phone: address.phone || '',
    });
    setEditingId(address._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAddress(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDefault = async (id) => {
    try {
      await makeDefault(id);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <p className='text-center mt-10'>Loading...</p>;

  return (
    <div className='max-w-3xl mx-auto mt-10'>
      <div className='border border-gray-200 rounded-lg p-6 mb-8'>
        <h2 className='font-semibold mb-4'>
          {editingId ? 'Edit Address' : 'Add Address'}
        </h2>

        <form onSubmit={handleSave} className='space-y-4'>
          <input
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Name'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <input
            name='street'
            value={form.street}
            onChange={handleChange}
            placeholder='Street'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <input
            name='state'
            value={form.state}
            onChange={handleChange}
            placeholder='State'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <input
            name='country'
            value={form.country}
            onChange={handleChange}
            placeholder='Country'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <input
            name='pin'
            value={form.pin}
            onChange={handleChange}
            placeholder='PIN'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <input
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Phone'
            className='border border-gray-200 rounded-md p-3 w-full'
            required
          />

          <button className='bg-[#D47784] text-white px-6 py-2 rounded w-full hover:bg-[#cd6472]'>
            {editingId ? 'Update Address' : 'Save Address'}
          </button>
        </form>
      </div>

      <div className='space-y-4'>
        {addresses.length === 0 ? (
          <p className='text-center text-gray-500'>No addresses found</p>
        ) : (
          addresses.map((addr) => (
            <AddressCard
              key={addr._id}
              address={addr}
              isDefault={addr.isDefault}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onDefault={handleDefault}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AddressDetails;
