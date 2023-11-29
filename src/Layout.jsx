import React from "react";
import NavBar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function Layout() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default Layout;
