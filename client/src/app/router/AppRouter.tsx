import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/pages/dashboard/DashboardPage.tsx";

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </Router>
  );
}
export default AppRouter;