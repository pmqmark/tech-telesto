import React from "react";
import axios from "../../../utils/axiosInstance";

import { Link } from "react-router-dom";
import { selectedCategory } from "../../../utils/constant";
import { toast } from "react-toastify";

const SideBar = ({ sidebarData,updateProduct }) => {
  const selectHandler = async (categoryId) => {

    await axios
      .get(`${selectedCategory}${categoryId}`)
      .then((res) => {
        updateProduct(res.data.products)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.error);
      });
  };

  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-primary text-[20px] font-bold">Categories</h1>
      <div className="my-5 flex flex-col gap-2">
        {sidebarData.map((items, index) => {
          return (
            <div
              onClick={() => selectHandler(items._id)}
              key={index}
              className="bg-[#0F0F0F] text-[13px] text-secondary shadow-black shadow-md w-full flex p-3 rounded-md hover:bg-primary hover:text-white hover:scale-105 ease-in-out duration-300 hover:cursor-pointer "
            >
              <Link>{items.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
