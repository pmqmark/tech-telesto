import React from "react";
import Card from "./Card";


const Carousal = ({ title, data }) => {
  return (
    <section className="w-full pt-5 pb-10 lg:pt-20 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center mx-4 md:px-32">
          <Card
            name="Harikrishnan D"
            imageSrc={require('../../assets/Team/Team 3.jpg')}
          />
          <Card
            name="Anfil Shajo"
            imageSrc={require('../../assets/Team/Team 2.jpg')}
          />
          <Card
            name="Gowrishankar P"
            imageSrc={require('../../assets/Team/Team 1.jpg')}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousal;
