import axios from "../../utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { allGallery, baseURL } from "../../utils/constant";

const Gallery = () => {
  const [images, setAllImages] = useState([]);

  const gallery = async () => {
    try {
      const response = await axios.get(allGallery);
      setAllImages(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    gallery();
  }, []);

  return (
    <div className="container w-full h-full mt-[100px] overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-white text-3xl font-semibold pb-5 md:pb-10 md:py-5">
          Gallery
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center p-10 gap-5 my-10 ">
          {images.map((items,index) => {
            return (
              <div key={index} className="truncate">
                <img
                  src={`${baseURL}/${items.image}`}
                  alt="Images"
                  className="w-[400px] h-[200px] object-cover hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
                />
                <p className="mt-2 text-center truncate">{items.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
