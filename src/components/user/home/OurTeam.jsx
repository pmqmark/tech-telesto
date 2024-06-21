import React from "react";
import Carousal from "../Carousal";

const OurTeam = () => {
  return (
    <>
      <div className="md:px-10 relative w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" text-primary text-3xl font-semibold pb-5 md:pb-10 md:py-5">
            Our Team
          </h1>
          <div>
            <Carousal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
