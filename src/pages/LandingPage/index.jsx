import { Navbar, Footer } from "components/index";
import React from "react";
import Features from "./Features";
import Headers from "./Header";
import "./style.css";
import Tips from "./Tips";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <Features />
      <Tips />
      <Footer />
    </div>
  );
};

export default LandingPage;
