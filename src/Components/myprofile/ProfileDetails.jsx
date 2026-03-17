import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FaCamera } from 'react-icons/fa';
import { useCurrentUser } from '../../hooks/user/useCurrentUser';
import { api } from '../../services/api';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const ProfileDetails = () => {
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();
  const { data: user } = useCurrentUser();

  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
      });
    }
  }, [user]);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const data = new FormData();
      data.append('username', form.username);
      data.append('phoneNumber', form.phoneNumber);

      if (fileInputRef.current?.files[0]) {
        data.append('avatar', fileInputRef.current.files[0]);
      }

      await api.put('/myprofile/update-profile', data);

      await queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      await queryClient.refetchQueries({ queryKey: ['currentUser'] });

      toast.success('Profile Updated');

      setAvatarPreview(null);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className='flex max-w-7xl mx-auto'>
      <Sidebar />

      <div className='flex-1 px-20 mt-10'>
        <div className='relative w-24 h-24 mb-8'>
          <div className='w-24 h-24 rounded-full bg-[#D47784]  flex items-center justify-center overflow-hidden'>
            {avatarPreview || user?.avatar ? (
              <img
                src={avatarPreview || user?.avatar}
                alt='profile'
                className='w-full h-full object-cover'
              />
            ) : (
              <span className='bg-[#D47784] text-white flex items-center justify-center text-3xl font-bold cursor-pointer'>
                {user?.username?.[0]?.toUpperCase() || 'U'}
              </span>
            )}
          </div>

          <button
            onClick={handleAvatarClick}
            className='absolute bottom-0 right-0 bg-black p-2 rounded-full text-white cursor-pointer'
          >
            <FaCamera size={14} />
          </button>

          <input
            type='file'
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className='hidden'
            accept='image/*'
          />
        </div>

        <div className='space-y-6 max-w-3xl'>
          <label className='flex flex-col text-sm'>
            Username
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              className='border border-[#E8E8E8] p-3 mt-2 outline-none'
            />
          </label>

          <label className='flex flex-col text-sm'>
            Email
            <input
              type='text'
              name='email'
              value={form.email}
              disabled
              className='border border-[#E8E8E8] p-3 mt-2 outline-none bg-gray-100'
            />
          </label>

          <label className='flex flex-col text-sm'>
            Mobile
            <input
              type='text'
              name='phoneNumber'
              value={form.phoneNumber}
              onChange={handleChange}
              className='border border-[#E8E8E8] p-3 mt-2 outline-none'
            />
          </label>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className='bg-[#D47784] text-white px-12 py-3 mt-2 hover:bg-[#cd6472] transition cursor-pointer'
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
