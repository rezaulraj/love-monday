import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-b from-indigo-50 to-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
