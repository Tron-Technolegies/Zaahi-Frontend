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
  console.log(user);

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

      setAvatarPreview(user.avatar || null);
    }
  }, [user]);

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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

      toast.success('Profile Updated');
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
        <div className='w-20 h-20 rounded-full overflow-hidden border border-gray-300 mb-8'>
          <img
            src='https://i.pravatar.cc/40'
            alt='profile'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='space-y-6 max-w-3xl'>
          <div className='grid grid-cols-2 gap-6'>
            <label className='flex flex-col text-sm'>
              First Name
              <input
                type='text'
                placeholder='Ex. John'
                className='border border-[#E8E8E8] p-3 mt-2 outline-none'
              />
            </label>

            <label className='flex flex-col text-sm'>
              Last Name
              <input
                type='text'
                placeholder='Ex. Doe'
                className='border border-[#E8E8E8] p-3 mt-2 outline-none'
              />
            </label>
          </div>

          <label className='flex flex-col text-sm'>
            Email
            <input
              type='text'
              placeholder='Email Address'
              className='border border-[#E8E8E8] p-3 mt-2 outline-none'
            />
          </label>

          <label className='flex flex-col text-sm'>
            Mobile
            <input
              type='text'
              placeholder='+91 9876543213'
              className='border border-[#E8E8E8] p-3 mt-2 outline-none'
            />
          </label>

          <button className='bg-[#D47784] text-white px-12 py-3 mt-2 hover:bg-[#cd6472] transition'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
