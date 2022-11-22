import { Navbar, Footer } from "components/index";
import React from "react";
import Features from "./Features";
import Headers from "./Header";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
