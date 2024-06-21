import React from "react";

import LandingPage from "../../components/user/home/LandingPage";
import Products from "../../components/user/home/Products";
import OurMission from "../../components/user/home/OurMission";
import Category from "../../components/user/home/Category";
import OurTeam from "../../components/user/home/OurTeam";

const Home = () => {
  return (
    <div className="w-full md:mt-[100px]">
      <div className="bg flex flex-col items-center justify-center">
        <LandingPage />
      </div>
      <div className="bg-[#050505]  p-8 overflow-hidden">
        <OurMission />
      </div>
      <div className="bg-[#050505]  p-8 overflow-hidden">
        <Products />
      </div>
      <div className="bg-[#050505] p-8 overflow-hidden">
        <Category />
      </div>
      <div className="bg-[#050505] p-8 overflow-hidden">
        <OurTeam />
      </div>
    </div>
  );
};

export default Home;
