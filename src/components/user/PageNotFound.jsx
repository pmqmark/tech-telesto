import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src={require("../../assets/PageNotFound.jpg")}
        alt="Page Not Found"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PageNotFound;
