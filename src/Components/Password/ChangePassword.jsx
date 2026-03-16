import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const handleSubmit = async () => {
    if (form.newPassword !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      await api.patch('/auth/change-password', {
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });

      toast.success('Password updated successfully');

      setForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      navigate('/myprofile');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-30 shadow-2xl p-6 rounded-2xl'>
      <h2 className='text-xl font-semibold mb-6'>Change Password</h2>

      <div className='relative mb-4'>
        <input
          type={showPassword.current ? 'text' : 'password'}
          name='currentPassword'
          placeholder='Current Password'
          value={form.currentPassword}
          onChange={handleChange}
          className='border border-gray-500 rounded-xl p-3 w-full pr-10'
        />

        <span
          onClick={() => toggleVisibility('current')}
          className='absolute right-3 top-3 cursor-pointer text-gray-500'
        >
          {showPassword.current ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className='relative mb-4'>
        <input
          type={showPassword.new ? 'text' : 'password'}
          name='newPassword'
          placeholder='New Password'
          value={form.newPassword}
          onChange={handleChange}
          className='border border-gray-500 rounded-xl p-3 w-full pr-10'
        />

        <span
          onClick={() => toggleVisibility('new')}
          className='absolute right-3 top-3 cursor-pointer text-gray-500'
        >
          {showPassword.new ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className='relative mb-6'>
        <input
          type={showPassword.confirm ? 'text' : 'password'}
          name='confirmPassword'
          placeholder='Confirm Password'
          value={form.confirmPassword}
          onChange={handleChange}
          className='border border-gray-500 rounded-xl p-3 w-full pr-10'
        />

        <span
          onClick={() => toggleVisibility('confirm')}
          className='absolute right-3 top-3 cursor-pointer text-gray-500'
        >
          {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button
        onClick={handleSubmit}
        className='bg-[#D47784] text-white px-6 py-2 rounded-xl w-full hover:bg-[#c36270]'
      >
        Update Password
      </button>
    </div>
  );
};

export default ChangePassword;
