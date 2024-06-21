import axios from "../../../utils/axiosInstance";
import React from "../../../utils/axiosInstance";

import { selectedCategory } from "../../../utils/constant";
import { toast } from "react-toastify";
import { useState } from "react";

const MiniSideBar = ({ sidebarData, updateProduct }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

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

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedItem = sidebarData.find(
      (item) => item.name === selectedValue
    );

    if (selectedItem) {
      setSelectedCategoryId(selectedItem._id);
      selectHandler(selectedItem._id);
    }
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-primary font-bold text-xl">Categories</h1>
      <select
        onChange={handleSelectChange}
        value={selectedCategoryId}
        name=""
        id=""
        className="p-2 px-4 rounded-lg text-xs bg-[#353535] focus:outline-none"
      >
        <option value="">Select a option</option>
        {sidebarData.map((items, index) => {
          return (
            <option key={index} value={items.name}>
              {items.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MiniSideBar;
