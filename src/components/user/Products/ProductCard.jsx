import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {baseURL} from '../../../utils/constant'

const ProductCard = ({ data,updated }) => {
  
  const [modal,setModal] =useState(data);
  console.log(data)
 
  const productBuyingHandling = (ProductId) => {
    setModal(!modal)
    updated(modal,ProductId);
  };

  return (
    <div className="md:px-5 w-full">
      <div className="w-full">
        <img
          src={`${baseURL}/${data?.image}`}
          alt="product Pic"
          className="w-full h-[200px] object-cover"
        />
        <div>
          <h1 className="py-2 text-[15px]">{data?.title}</h1>
          <div className="flex items-center gap-3 pb-1 text-[15px]">
            <AiFillStar className="text-yellow-500" />
            <h2>
              {data?.rating} <span>({data?.totalRating})</span>
            </h2>
          </div>
          <h1 className="pb-1 text-[15px]">
            ₹ {data?.offerPrice}
            <span className="text-[9px] mx-2">
              M.R.P.<span className="line-through me-2">{data?.realPrice}</span>{" "}
              {data?.offer}% off{" "}
            </span>
          </h1>
          <h4 className="pb-1 text-[9px]">{data?.description}</h4>
        </div>
        <button
          onClick={() => productBuyingHandling(data._id)}
          className="my-2 p-2 px-7 bg-primary text-xs rounded"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
