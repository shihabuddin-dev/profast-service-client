import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-100 ">
        <div className="min-h-[calc(100vh-500px)] max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6">
          {" "}
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
