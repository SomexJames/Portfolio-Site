import React from "react";
import "./index.css";
import HomeSection from "./HomeSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

function Index() {
  return (
    <div className="site">
      <HomeSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Index;
