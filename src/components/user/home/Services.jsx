import React, { useEffect } from "react";
import Service from "../../../data/Service";
import AOS from "aos";

const Services = () => {
  // Animation render
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="md:px-10 relative w-full h-full flex flex-col items-center justify-center overflow-y-hidden py-[100px]">
        <div className="w-full flex flex-col items-center justify-center relative ">
          <h1 className=" text-white text-3xl font-semibold md:pb-10 md:py-5">
            Services
          </h1>
          {Service.map((items, index) => {
            return index % 2 === 0 ? (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full flex flex-col items-center justify-center py-10"
              >
                <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-10 md:w-3/4">
                  <div className="w-full rounded-full drop-shadow-3xl flex items-center justify-center md:justify-start">
                    <img
                      src={items.image}
                      alt="products"
                      className="rounded-full w-[230px]"
                    />
                  </div>
                  <div className="space-y-7 flex flex-col items-center justify-center md:items-start">
                    <h1 className="text-[23px] font-medium text-primary">
                      {items.Title}
                    </h1>
                    <p className="text-xs p-5 md:p-5 leading-6 w-full md:leading-[35px] md:text-sm">
                      {items.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full flex flex-col items-center justify-center py-10"
              >
                <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-10 md:w-3/4">
                  <div className="space-y-7 order-2 flex flex-col items-center justify-center md:items-start">
                    <h1 className="text-[23px] font-medium text-primary">
                      {items.Title}
                    </h1>
                    <p className="text-xs p-5 md:p-5 leading-6 w-full md:leading-[35px] md:text-sm">
                      {items.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-center md:justify-end rounded-full drop-shadow-3xl md:order-2">
                    <img
                      src={items.image}
                      alt="products"
                      className="rounded-full w-[230px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
