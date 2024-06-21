import React, { useState } from "react";
import { baseURL } from "../../../utils/constant";
import { IoMdClose } from "react-icons/io";

const Blogs = ({ items }) => {
  const [data, setData] = useState(false);
  const [viewData, setViewData] = useState({});

  const viewHandler = (data) => {
    setData(true);
    setViewData(data);
    console.log(data, "from the db");
  };

  return (
    <div >
      <div className="space-y-2 w-full ">
        <img
          onClick={() => viewHandler(items)}
          src={`${baseURL}/${items?.image}`}
          alt="Cover_Image"
          className="w-[300px] h-[200px] object-cover cursor-pointer"
        />
        <h1 className="truncate">{items?.title}</h1>
      </div>
      {data && (
        <div className="fixed mx-auto w-full h-full z-30 right-0 top-5 bg-black flex items-center justify-center ">
          <IoMdClose className="absolute top-0 right-5" onClick={()=>setData(false)} />
          <div className="bg-slate-900 h-4/5 rounded-lg p-5 m-5 flex flex-col md:items-center md:space-y-10 overflow-y-auto scrollbar-hide">
            <div className="w-full ">
              <img
                src={`${baseURL}/${viewData?.image}`}
                alt="Blog_Image"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <h1 className="text-sm uppercase font-semibold md:text-lg mt-2 truncate">
              {viewData?.title}
            </h1>
            <div className="mt-3 flex flex-col items-center">
              <h5 className="text-[15px] md:text-[19px] capitalize truncate md:text-center">
                {viewData?.subTitle}
              </h5>
              <div className="text-xs mt-4 md:text-[13px] md:px-10">
                {viewData?.content}
              </div>
              <hr className="mt-10 md:mt-20 text-slate-800 w-1/2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
