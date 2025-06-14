import React from "react";
import HeroAbout from "./HeroAbout";
import MeetTeam from "./MeetTeam";
import LoveMondayAbout from "./LoveMondayAbout";
import ContactAbout from "./ContactAbout";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <MeetTeam />
      <LoveMondayAbout />
      <ContactAbout />
    </div>
  );
};

export default AboutUs;
