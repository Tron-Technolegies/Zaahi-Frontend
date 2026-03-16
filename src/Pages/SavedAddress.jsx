import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeadName from "../Components/myprofile/HeadName";
import Sidebar from "../Components/myprofile/Sidebar";
import AddressDetails from "../Components/savedAddress/AddressDetails";

const SavedAddress = () => {
  return (
    <div>
      <Header />
      <HeadName />
      <div className="flex max-w-6xl mx-auto">
        <Sidebar />
        <div className="flex-1 px-30 mt-10">
          <div className="flex items-center justify-between border border-[#E8E8E8] px-8 py-6 font-[Inter]">
            <div className="flex flex-col">
              <p className="font-medium text-sm text-black">Bessie Cooper</p>
              <p className="text-xs text-gray-500">2646 Royal Ln. Mesa, New Jersey 23568</p>
            </div>

            <div className="flex items-center gap-6 text-sm cursor-pointer">
              <button className="text-gray-700 cursor-pointer">Edit</button>
              <button className="text-red-500 cursor-pointer">Delete</button>
            </div>
          </div>
          <AddressDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedAddress;
