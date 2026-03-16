import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from '../../hooks/auth/useSignin';

const Sidebar = () => {
  const { mutateAsync: logout } = useSignOut();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <div className='flex flex-col gap-5 mt-10  '>
      <button className='border border-[#E8E8E8] px-30 py-5 text-black hover:bg-[#D47784] hover:text-white cursor-pointer'>
        My Profile
      </button>
      <button className='border border-[#E8E8E8] px-30 py-5 hover:bg-[#D47784] cursor-pointer hover:text-white'>
        My Order
      </button>

      <button
        onClick={() => {
          navigate('/address');
        }}
        className='hover:bg-[#D47784] hover:text-white cursor-pointer border border-[#E8E8E8] px-30 py-5'
      >
        Saved Address
      </button>

      <button
        className='hover:bg-[#D47784] hover:text-white cursor-pointer border border-[#E8E8E8] px-30 py-5'
        onClick={() => {
          navigate('/change-password');
        }}
      >
        Change Password
      </button>
      <button
        onClick={handleLogout}
        className='hover:bg-[#D47784] hover:text-white cursor-pointer border border-[#E8E8E8] px-30 py-5'
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
