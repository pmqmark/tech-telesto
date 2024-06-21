import axios from "../../utils/axiosInstance";
import Blog from "./Blogs/Blogs";
import React, { useEffect, useState } from "react";
import { allBlogs } from "../../utils/constant";

const Blogs = () => {
  const [allBlogData, setAllBlogs] = useState([]);

  // fetching data from the backend;
  const allBlog = async () => {
    const response = await axios.get(allBlogs);
    setAllBlogs(response.data.blogs);
  };

  useEffect(() => {
    window.scrollTo(0,0);
    allBlog();
  }, []);

  return (
    <div className="mt-[100px] flex flex-col items-center min-h-screen">
      <h1 className=" text-white text-3xl font-semibold pb-5 md:pb-20 md:py-5">
        Blogs
      </h1>
      <div className="w-full mb-10 md:mb-20 flex items-center justify-center">
        <div className="w-full md:ms-28 flex flex-wrap gap-5 items-center justify-center md:justify-start">
          {allBlogData.length > 0 ? (
            allBlogData.map((items) => {
              return <Blog items={items} />;
            })
          ) : (
            <div className="flex items-center justify-center w-full h-full ">
              <h1 className="text-secondary">No blogs are created yet......</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
