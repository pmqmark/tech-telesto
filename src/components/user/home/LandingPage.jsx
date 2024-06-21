import React from "react";
import logo from "../../../assets/logo.png";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full h-full  bottom-52 md:bottom-56">
        <img
          src={logo}
          alt="TELESTO"
          className="w-[300px] lg:w-[400px] "
          loading="lazy"
        />
        <h2 className="absolute top-[99%] text-[#FFFFFF] bottom-12 text-[11px] tracking-[1px] lg:bottom-24 md:text-sm md:tracking-[5px]">
          EMPOWERING CURIOSITY, INSPIRING INNOVATION
        </h2>
      </div>
    </>
  );
};

export default LandingPage;
