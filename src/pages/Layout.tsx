import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";
import Content from "./Content";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <div>
          <div>
            <Sidebar />
          </div>
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
