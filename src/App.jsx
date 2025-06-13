import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import RecruitmentAssistance from "./pages/services/RecruitmentAssistance";
import WorkforceStaffing from "./pages/services/WorkforceStaffing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruitment" element={<RecruitmentAssistance />} />
          <Route path="/staffing" element={<WorkforceStaffing />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
