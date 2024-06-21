import React, { useEffect, useState } from "react";
import Carousal from "../../../components/user/Products/Carousal";
import axios from "../../../utils/axiosInstance";
import SideBar from "../../../components/user/Products/SideBar";
import MiniSideBar from "../../../components/user/Products/MiniSideBar";

import { Videos } from "../../../data/Banner";
import { Outlet } from "react-router-dom";
import { AllCategoryAPI } from "../../../utils/constant";

const ProductsLayout = ({ updateProduct }) => {
  const [category, setCategory] = useState([]);

  // Initial fetching for Side Data
  useEffect(() => {
    axios
      .get(AllCategoryAPI)
      .then((res) => {
        setCategory(res.data.category);
      })
      .catch((error) => {
        console.log("hi am error", error);
      });
  }, []);


  return (
    <div className="mt-[100px]">
      <Carousal Videos={Videos} />
      <div className="flex flex-col px-10 w-full overflow-hidden mb-10 md:flex-row ">
        <div className="p-5 w-1/5 hidden md:flex ">
          <SideBar sidebarData={category} updateProduct={updateProduct} />
        </div>
        <div className="md:p-5 w-full md:hidden">
          <MiniSideBar sidebarData={category} updateProduct={updateProduct} />
        </div>
        <div className="md:p-5 w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
