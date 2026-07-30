import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginPage from "../../pages/auth/LoginPage";
import DashboardPage from "../../pages/dashboard/DashboardPage";

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