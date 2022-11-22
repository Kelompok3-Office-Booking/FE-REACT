import { Navbar, Footer } from "components/index";
import React from "react";
import Contact from "./Contact";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
