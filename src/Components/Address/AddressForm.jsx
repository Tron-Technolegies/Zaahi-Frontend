import React, { useState, useEffect } from 'react';

const AddressForm = ({ initialData, onSubmit, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    street: '',
    state: '',
    country: '',
    pin: '',
    phone: '',
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className='bg-white p-6 rounded-lg w-full max-w-md'>
      <h2 className='text-lg font-semibold mb-4'>
        {initialData ? 'Edit Address' : 'Add Address'}
      </h2>

      <form onSubmit={handleSubmit} className='space-y-3'>
        <input
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Name'
          className='border p-2 w-full'
        />
        <input
          name='street'
          value={form.street}
          onChange={handleChange}
          placeholder='Street'
          className='border p-2 w-full'
        />
        <input
          name='state'
          value={form.state}
          onChange={handleChange}
          placeholder='State'
          className='border p-2 w-full'
        />
        <input
          name='country'
          value={form.country}
          onChange={handleChange}
          placeholder='Country'
          className='border p-2 w-full'
        />
        <input
          name='pin'
          value={form.pin}
          onChange={handleChange}
          placeholder='PIN Code'
          className='border p-2 w-full'
        />
        <input
          name='phone'
          value={form.phone}
          onChange={handleChange}
          placeholder='Phone'
          className='border p-2 w-full'
        />

        <div className='flex gap-3 pt-3'>
          <button
            type='submit'
            className='bg-[#D47784] text-white px-4 py-2 rounded cursor-pointer'
          >
            Save
          </button>

          <button
            type='button'
            onClick={onClose}
            className='border px-4 py-2 rounded hover:bg-[#D47784] cursor-pointer hover:text-white'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
