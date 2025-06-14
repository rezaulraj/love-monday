import React from "react";
import HeroApplyForWork from "./HeroApplyForWork";
import Workfolio from "./Workfolio";
import ApplyForm from "./ApplyForm";
import Testimonials from "./Tesimonial";

const ApplyForWork = () => {
  return (
    <div className="min-h-screen">
      <HeroApplyForWork />
      <Workfolio />
      <ApplyForm />
      <Testimonials />
    </div>
  );
};

export default ApplyForWork;
