import React from "react";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from "react-icons/bi";
import { footer } from "../../data/Footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-10 pb-10">
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        className="w-[200px]  my-5 border rounded md:border-none md:ms-5"
      />
      <div className="md:px-10 flex flex-col md:flex-row justify-between">
        {footer.map((items,index) => {
          return (
            <div key={index} className="mb-5">
              <h1 className=" text-md font-semibold">{items.Title}</h1>
              <div className="mt-3 text-[14px] font-[400] flex flex-col">
                {items.SubProducts.map((item, index) => {
                  return (
                    <Link key={index} to={item.path} className="my-[1px] hover:text-black">
                      {item.Name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-10 flex flex-col my-5 gap-2 md:px-10 md:items-center md:justify-center ">
        <div className="flex lg:items-center md:justify-center gap-2">
          <div className=" bg-[#1A3B4D] rounded-full p-1">
            <BiLogoFacebook className="" />
          </div>
          <div className=" bg-[#1A3B4D] rounded-full p-1">
            <BiLogoTwitter />
          </div>
          <div className=" bg-[#1A3B4D] rounded-full p-1">
            <BiLogoInstagramAlt />
          </div>
          <div className=" bg-[#1A3B4D] rounded-full p-1">
            <BiLogoYoutube />
          </div>
        </div>
        <div className="text-sm">
          <h1 className="text-[7px]">&copy; Copyright.All right reserverd</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
