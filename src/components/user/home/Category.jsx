import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHeadset } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="md:px-10 relative w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center relative py-10">
          <h1 className=" text-primary text-3xl font-semibold pb-5 md:mb-20 md:py-5">
            Category's
          </h1>
          <h2 className="tracking-[1px] text-xs font-semibold md:tracking-[10px] md:text-xl md:mb-10 ">
            EXPLORE TELESTO PRODUCTS
          </h2>

          <div className="flex flex-col mt-10 gap-3 md:flex-row md:gap-10">
            <div className="relative flex flex-col items-center">
              <Link to="/category/products">
                <img
                  className="hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={require("../../../assets/ProductTemp/ProductsTemp1.jpg")}
                  alt="category1"
                />
              </Link>
              <div className="absolute top-[10%] flex flex-col items-center justify-center text-center">
                <h1 className="mb-3 text-[19px] font-medium md:text-lg md:font-medium">
                  Video Production
                </h1>
                <p className="text-xs w-3/4 text-center md:text-[14px]">
                  Professional Aerial and Ground Filmmaking Tools
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <Link to="/category/products">
                <img
                  className="hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={require("../../../assets/ProductTemp/ProductsTemp2.jpg")}
                  alt="category2"
                />
              </Link>
              <div className="absolute top-[10%] flex flex-col items-center justify-center text-center">
                <h1 className="mb-3 text-[19px] font-medium md:text-lg md:font-medium">
                  Enterprise
                </h1>
                <p className="text-xs w-3/4 text-center md:text-[14px]">
                  Drone Solutions for a New Generation of Work
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <Link to="/category/products">
                <img
                  className="hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={require("../../../assets/ProductTemp/ProductsTemp3.jpg")}
                  alt="category3"
                />
              </Link>
              <div className="absolute top-[10%] flex flex-col items-center justify-center text-center">
                <h1 className="mb-3 text-[19px] font-medium md:text-lg md:font-medium">
                  Agriculture
                </h1>
                <p className="text-xs w-3/4 text-center md:text-[14px]">
                  Efficient and Intelligent Agriculture Solution
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mt-10 md:px-36 md:mt-40 md:mb-20 ">
            <div className="flex flex-col items-center">
              <HiOutlineShoppingBag className="text-[30px] md:text-[90px] text-primary drop-shadow-3xl md:mb-6" />
              <h1 className=" text-[12px] mt-3 md:text-[18px] md:font-medium md:mt-0 ">
                Where to buy
              </h1>
              <p className=" text-[8px] md:text-[11px] mt-1">Learn more </p>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlineHeadset className="text-[30px] md:text-[90px] text-primary drop-shadow-3xl md:mb-6" />
              <h1 className=" text-[12px] mt-3 md:text-[18px] md:font-medium md:mt-0 ">
                Support
              </h1>
              <p className=" text-[8px] md:text-[11px] mt-1">Learn more </p>
            </div>
            <div className="flex flex-col items-center">
              <IoLocationOutline className="text-[30px] md:text-[90px] text-primary md:mb-6" />
              <h1 className=" text-[12px] mt-3 md:text-[18px] md:font-medium md:mt-0 ">
                Fly Sake
              </h1>
              <p className=" text-[8px] md:text-[11px] mt-1">Learn more </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
