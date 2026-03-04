import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeadName from "../Components/myprofile/HeadName";
import ProfileDetails from "../Components/myprofile/ProfileDetails";

const MyProfile = () => {
  return (
    <div>
      <Header />
      <HeadName />
      <ProfileDetails />
      <Footer />
    </div>
  );
};

export default MyProfile;
