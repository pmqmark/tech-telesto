import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"

const OurMission = () => {

  // Animation render
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full md:px-10 md:mt-20">
      <div className="relative w-full h-full ">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className=" text-primary text-3xl font-semibold pb-5 md:pb-20 md:py-5">
            Our Mission
          </h1>
          <p className="w-full md:w-3/4 text-[#FFFFFF] leading-[30px]  text-xs md:text-sm md:leading-[50px]">
            Our mission is to empower students with the knowledge, tools, and
            confidence to become creators, problem-solvers, and changeovers in
            a technology-driven world. We believe that by providing immersive
            and hands-on experiences in STEM fields, we are shaping individuals
            who can harness the power of technology for positive change
          </p>
          <img
            data-aos= "fade-up" data-aos-duration="3000"
            className="bottom-0 md:top-15 w-[400px] object-cover"
            src={require("../../../assets/Blockchain for crypto transactions and exchange.png")}
            alt="side_image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
