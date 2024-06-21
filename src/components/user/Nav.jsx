import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { NavData, NavFixData } from "../../data/NavData";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const sideMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const closeHandler = () => {
    setOpenMenu(false);
  };

  function scrollToSection(sectionId) {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
      offset: -80,
    });
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-10  py-5 lg:p-5 z-10 bg-black">
        <div className="hover:cursor-pointer me-[80px]">
          <FiMenu size={25} onClick={sideMenuHandler} />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10 font-[400] ">
            {NavData.map((items) => (
              <li key={items.id} className="hover:text-primary cursor-pointer">
                <Link
                  onClick={() =>
                    scrollToSection(
                      items.id === 2
                        ? "about"
                        : "" || items.id === 3
                        ? "service"
                        : ""
                    )
                  }
                  to={items.path}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center ">
          <div className="hidden hover:cursor-pointer absolute right-[40%] md:right-[18%] ">
            <FiSearch size={25} />
          </div>
          <Link to="/category/products">
            <button className="flex items-center gap-1 p-2 px-5 text-xs rounded-3xl bg-primary hover:scale-105 ease-in-out duration-300 lg:gap-1 lg:p-2 lg:px-5 lg:text-sm">
              <HiOutlineShoppingBag size={20} /> Buy
            </button>
          </Link>
        </div>
      </div>
      {openMenu && (
        <div>
          <div className="w-2/3 md:w-1/5 bg-[#0F0F0F] h-full z-50 fixed top-0 left-0 rounded-r-2xl">
            <div className="absolute flex w-full justify-end mt-5 right-5">
              <IoCloseSharp
                onClick={closeHandler}
                size={20}
                color="#F8F8F8"
                className="hover:cursor-pointer hover:text-primary "
              />
            </div>
            <div className="flex items-center justify-center my-3">
              <img
                src={require("../../assets/logo.png")}
                alt="logo"
                className="w-[150px] object-cover "
              />
            </div>
            <div className="md:hidden">
              <div
                className={`flex flex-col pb-3 px-5 space-y-2 text-slate-200 text-xs lg:ps-10`}
              >
                {NavData.map((items) => {
                  return (
                  <Link   onClick={() => {  scrollToSection(  items.id === 2  ? "about" : "" || items.id === 3 ? "service" : "" );  closeHandler(); }} to={items.path}>
                    <h1 key={items._id}  className=" bg-[#2e2e2e] shadow-black shadow-md w-full flex items-center justify-center p-3 rounded-md hover:bg-primary hover:scale-105 ease-in-out duration-300 hover:cursor-pointer " >
                        {items.name}
                    </h1>
                  </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col px-5 space-y-2 text-slate-200 text-xs lg:ps-10">
              {NavFixData.map((items) => {
                return (
                  <Link onClick={closeHandler} to={items.path}>
                    <div
                      key={items._id}
                      className=" bg-[#2e2e2e] shadow-black shadow-md w-full flex items-center justify-center p-3 rounded-md hover:bg-primary hover:scale-105 ease-in-out duration-300 hover:cursor-pointer "
                    >
                      {items.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="bg-black/70 w-full h-full absolute z-40 top-0 left-0"></div>
        </div>
      )}
    </>
  );
};

export default Nav;
