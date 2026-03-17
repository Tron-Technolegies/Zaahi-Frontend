import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from '../../hooks/auth/useSignin';

const Sidebar = () => {
  const { mutateAsync: logout } = useSignOut();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col gap-5 mt-10'>
      <button
        onClick={() => navigate('/myprofile')}
        className='hover:bg-[#D47784] hover:text-white cursor-pointer px-30 py-5 border border-[#E8E8E8]'
      >
        My Profile
      </button>

      <button
        onClick={() => navigate('/orders')}
        className='border border-[#E8E8E8] px-30 py-5 hover:bg-[#D47784] hover:text-white cursor-pointer'
      >
        My Order
      </button>

      <button
        onClick={() => navigate('/saved-address')}
        className='border border-[#E8E8E8] px-30 py-5 hover:bg-[#D47784] hover:text-white cursor-pointer'
      >
        Saved Address
      </button>

      <button
        onClick={() => navigate('/change-password')}
        className='border border-[#E8E8E8] px-30 py-5 hover:bg-[#D47784] hover:text-white cursor-pointer'
      >
        Change Password
      </button>

      <button
        onClick={handleLogout}
        className='border border-[#E8E8E8] px-30 py-5 hover:bg-[#D47784] hover:text-white cursor-pointer'
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
