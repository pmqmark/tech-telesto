import React, { useEffect } from "react";
import Product from "../../../data/Product";

import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {

  // Animation render
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="md:px-10 relative w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center relative py-10 ">
          <h1 className=" text-primary text-3xl font-semibold md:pb-20 md:py-5">
            Products
          </h1>
          <img
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            className="absolute left-0 top-0 md:top-15  w-[500px] object-cover"
            src={require("../../../assets/shape of the red 3d disk.png")}
            alt="side_image"
          />
          {Product.map((items, index) => {
            return index % 2 === 0 ? (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full flex flex-col items-center justify-center"
              >
                <div className="w-full flex flex-col md:flex-row items-center mt-10 gap-10 md:w-3/4">
                  <img src={items.image} alt="products" />
                  <div className="space-y-7 flex flex-col items-center justify-center md:items-start">
                    <h1 className="text-[25px]  font-medium text-primary hover:cursor-pointer ">{items.Title}</h1>
                    <p className="w-full md:leading-[35px] text-xs md:text-sm">
                      {items.description}
                    </p>
                  </div>
                </div>
                {items._id === Product.length ? (
                  <hr className="hidden w-1/2 top-0 border-t-2 border-[#636363] my-5 md:mt-10" />
                ) : (
                  <hr className=" w-1/2 top-0 border-t-2 border-[#636363] my-5 md:mt-12" />
                )}
              </div>
            ) : (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full flex flex-col items-center justify-center"
              >
                <div className="w-full flex flex-col md:flex-row items-center mt-10 gap-10 md:w-3/4">
                  <div className="space-y-7 order-2 flex flex-col items-center justify-center md:items-start">
                    <h1 className="text-[25px] font-medium text-primary hover:cursor-pointer ">{items.Title}</h1>
                    <p className="w-full md:leading-[35px] text-xs md:text-sm">
                      {items.description}
                    </p>
                  </div>
                  <img src={items.image} alt="products" className="md:order-2" />
                </div>
                {items._id === Product.length ? (
                  <hr className="hidden w-1/2 top-0 border-t-2 border-[#636363] my-5 md:mt-10" />
                ) : (
                  <hr className=" w-1/2 top-0 border-t-2 border-[#636363] my-5 md:mt-12" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
