const Sidebar = () => {
  return (
    <div className="flex md:flex-col flex-row md:gap-5 gap-2 mt-6 md:mt-10 w-full md:w-[300px] overflow-x-auto">
      <a href="myprofile" className="w-full">
        <button className="bg-[#D47784] w-full py-4 md:py-5 text-white text-left pl-6 md:pl-15 cursor-pointer whitespace-nowrap">
          My Profile
        </button>
      </a>

      <a href="myorder" className="w-full">
        <button className="border border-[#E8E8E8] text-left pl-6 md:pl-15 w-full py-4 md:py-5 cursor-pointer whitespace-nowrap">
          My Order
        </button>
      </a>

      <a href="saved-address" className="w-full">
        <button className="border border-[#E8E8E8] text-left pl-6 md:pl-15 w-full py-4 md:py-5 cursor-pointer whitespace-nowrap">
          Saved Address
        </button>
      </a>

      <a href="change-password" className="w-full">
        <button className="border border-[#E8E8E8] text-left pl-6 md:pl-15 w-full py-4 md:py-5 cursor-pointer whitespace-nowrap">
          Change Password
        </button>
      </a>

      <button className="border border-[#E8E8E8] text-left pl-6 md:pl-15 w-full py-4 md:py-5 cursor-pointer whitespace-nowrap">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
