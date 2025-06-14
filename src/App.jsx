import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import RecruitmentAssistance from "./pages/services/RecruitmentAssistance";
import WorkforceStaffing from "./pages/services/WorkforceStaffing";
import LegitimateWork from "./pages/legitimatework/LegitimateWork";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import ApplyForWork from "./pages/applyforwork/ApplyForWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruitment" element={<RecruitmentAssistance />} />
          <Route path="/staffing" element={<WorkforceStaffing />} />
          <Route path="/legitimate-work" element={<LegitimateWork />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/apply-for-work" element={<ApplyForWork />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
