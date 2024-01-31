import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className='bg-green-200'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
