/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : navigation.ts
 * Description:
 * Centralized navigation configuration for the dashboard.
 * -----------------------------------------------------------------------------
 */

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";

export interface NavigationItem {
  label: string;
  path: string;
  icon: typeof DashboardIcon;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Employees",
    path: "/employees",
    icon: PeopleIcon,
  },
  {
    label: "Departments",
    path: "/departments",
    icon: ApartmentIcon,
  },
  {
    label: "Attendance",
    path: "/attendance",
    icon: EventAvailableIcon,
  },
  {
    label: "Payroll",
    path: "/payroll",
    icon: PaymentsIcon,
  },
];

export const logoutItem: NavigationItem = {
  label: "Logout",
  path: "/login",
  icon: LogoutIcon,
};