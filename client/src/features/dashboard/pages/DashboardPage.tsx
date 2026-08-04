/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : DashboardPage.tsx
 * Description:
 * Dashboard landing page displayed after successful authentication.
 * -----------------------------------------------------------------------------
 */

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardOverview from "../components/DashboardOverview";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default DashboardPage;