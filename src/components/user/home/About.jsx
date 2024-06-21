import React from "react";

const About = () => {
  return (
    <>
      <div className="md:px-10 relative w-full h-screen flex ">
        <div className="flex flex-col items-center mt-[100px]">
          <h1 className=" text-white text-3xl font-semibold pb-5 md:pb-20 md:py-5">
            About Us
          </h1>
          <p className="w-full p-5 md:w-3/4 text-[#FFFFFF] leading-[30px]  text-xs md:text-sm md:leading-[50px]">
            At Tech-Telesto, we are driven by a singular vision: to ignite the
            spark of curiosity in young minds and nurture it into a flame of
            innovation. Established with a passion for advancing STEM education,
            our journey began with a commitment to equip the future generations
            with the skills and mindset needed to navigate the rapidly evolving
            world of science and technology.
          </p>
          <img
            className="absolute right-7 bottom-0 md:top-15  w-[400px] object-cover"
            src={require("../../../assets/abstract figures.png")}
            alt="side_image"
          />
        </div>
      </div>
    </>
  );
};

export default About;
