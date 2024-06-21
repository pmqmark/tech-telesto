import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/user/Products/ProductCard";
import axios from "../../../utils/axiosInstance";

import { IoMdClose } from "react-icons/io";
import {
  baseURL,
  selectedProductAPI,
  orderProductApi,
} from "../../../utils/constant";
import { toast } from "react-toastify";

const Drone = ({ productData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState([]);

  const [inputData, setInputData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    productName: product?.title,
    city: "",
    District: "",
    State: "",
    pin: "",
  });

  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setInputData(prev=>({
      ...prev,
      productName: product?.title || "",
    }));
  }, [product]);


  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${orderProductApi}${product?._id}`,inputData)
      .then((res) => {
        toast.success(res.data.message);
        setOpenModal(!openModal);
      })
      .catch((error) => {
        console.log(error);
        toast.warning(error?.response?.data?.error);
      });
  };

  // Product taking from
  const ProductIdAndModal = (modal, productId) => {
    setOpenModal(modal);

    // getting product from the id
    axios
      .get(`${baseURL}${selectedProductAPI}${productId}`)
      .then((res) => {
        setProduct(res?.data?.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Closing modal
  const closeHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <h1 className="text-primary text-[20px] font-bold mt-5 md:mt-0 md:px-5">
        Products
      </h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap">
        {productData.length > 0 &&
          productData.map((items, index) => {
            return (
              <div key={index} className="md:w-1/3 my-5 ">
                <ProductCard data={items} updated={ProductIdAndModal} />
              </div>
            );
          })}
      </div>
      {openModal && (
        <div className="w-full h-full ">
          <div className="fixed top-0 left-0 bg-black/50 w-full h-full flex flex-col items-center justify-center overflow-y-scroll md:overflow-hidden">
            <div className="md:w-1/2 bg-slate-700 rounded-lg flex flex-col items-center p-5 m-5 relative mt-[300px] md:mt-0">
              <IoMdClose
                onClick={closeHandler}
                className="text-white absolute right-5 hover:text-primary hover:cursor-pointer"
              />
              <h1 className="text-primary font-bold text-[20px] ">
                Order Details
              </h1>
              <form
                onSubmit={submitHandler}
                action=""
                className="flex flex-wrap w-full p-2 text-white md:p-5"
              >
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px] "
                  >
                    Full Name
                  </label>
                  <input
                    id=""
                    name="fullName"
                    type="text"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Full Name"
                    required
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px] "
                  >
                    Phone Number
                  </label>
                  <input
                    id=""
                    name="phoneNumber"
                    type="number"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Phone Number"
                    required
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px]"
                  >
                    Email
                  </label>
                  <input
                    id=""
                    name="email"
                    type="email"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Email"
                    required
                    onChange={inputHandler}
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-medium md:text-[13px]"
                  >
                    Product Name
                  </label>
                  <input
                    id=""
                    name="productName"
                    type="text"
                    className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                    placeholder="Product Name"
                    value={product?.title}
                    onChange={inputHandler}
                    readOnly
                  />
                </div>
                <div className="w-full md:w-1/2 p-2 md:flex">
                  <div className="w-full p-1">
                    <label
                      htmlFor=""
                      className="text-xs font-medium md:text-[13px]"
                    >
                      City
                    </label>
                    <input
                      id=""
                      name="city"
                      type="text"
                      className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                      placeholder="City"
                      required
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="w-full p-1">
                    <label
                      htmlFor=""
                      className="text-xs font-medium md:text-[14px] text-secondary"
                    >
                      District
                    </label>
                    <input
                      id=""
                      name="District"
                      type="text"
                      className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                      placeholder="District"
                      required
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-2 md:flex">
                  <div className="w-full p-1">
                    <label
                      htmlFor=""
                      className="text-xs font-medium md:text-[13px]"
                    >
                      State
                    </label>
                    <input
                      id=""
                      name="State"
                      type="text"
                      className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                      placeholder="State"
                      required
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="w-full p-1">
                    <label
                      htmlFor=""
                      className="text-xs font-medium md:text-[14px] text-secondary"
                    >
                      PIN
                    </label>
                    <input
                      id=""
                      name="pin"
                      type="number"
                      className="border text-xs w-full p-1 py-2 rounded focus:outline-none text-secondary placeholder:text-[10px] ps-3"
                      placeholder="PIN Number"
                      required
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <div className="w-full text-xs font-semibold mt-5 flex items-center justify-center">
                  <button className="bg-primary p-2 text-white px-5 rounded">
                    Conform Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Drone;
