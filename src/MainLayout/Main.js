import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

import Nave from "../Pages/Nave/Nave";

const Main = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
