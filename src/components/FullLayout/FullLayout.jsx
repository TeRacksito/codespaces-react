import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FullLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default FullLayout;
