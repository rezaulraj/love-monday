import React from "react";
import HeroHome from "./HeroHome";
import SubHeroHome from "./SubHeroHome";
import FlipCardHome from "./FlipCardHome";
import FactPageHome from "./FactPageHome";
import CompanyLogos from "./CompanyLogos";
import ContactHome from "./ContactHome";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <SubHeroHome />
      <FlipCardHome />
      <FactPageHome />
      <CompanyLogos />
      <ContactHome />
    </div>
  );
};

export default HomePage;
