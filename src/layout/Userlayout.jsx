import React from "react";
import Nav from "../components/user/Nav";
import Footer from "../components/user/Footer";

import { Outlet } from "react-router-dom";

const Userlayout = () => {
  return (
    <div className="container mx-auto overflow-x-hidden">
      {/* Nav Section */}
      <nav className="px-10 z-50">
        <Nav />
      </nav>

      {/* Home view */}
      <section className="overflow-x-hidden" >
        <Outlet />
      </section>

      {/* Footer Section */}
      <footer className="bg-primary overflow-x-hidden">
        <Footer />
      </footer>
    </div>
  );
};

export default Userlayout;
