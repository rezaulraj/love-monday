import React from "react";
import HeroRecruitment from "./HeroRecruitment";
import ImmediateServiceRecruitment from "./ImmediateServiceRecruitment";
import ContactRecruitment from "./ContactRecruitment";

const RecruitmentAssistance = () => {
  return (
    <div className="min-h-screen">
      <HeroRecruitment />
      <ImmediateServiceRecruitment />
      <ContactRecruitment/>
    </div>
  );
};

export default RecruitmentAssistance;
