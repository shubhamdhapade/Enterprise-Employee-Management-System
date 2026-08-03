/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard Navigation
 * Ticket  : EEMS-34
 * File    : navigation.ts
 * Description:
 * Centralized sidebar navigation configuration.
 * -----------------------------------------------------------------------------
 */

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BadgeIcon from "@mui/icons-material/Badge";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";

import type { NavigationItem } from "../types/navigation.types";

export const navigationItems: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: "employees",
    label: "Employees",
    path: "/employees",
    icon: <PeopleIcon />,
  },
  {
    id: "departments",
    label: "Departments",
    path: "/departments",
    icon: <ApartmentIcon />,
  },
  {
    id: "attendance",
    label: "Attendance",
    path: "/attendance",
    icon: <EventAvailableIcon />,
  },
  {
    id: "payroll",
    label: "Payroll",
    path: "/payroll",
    icon: <PaymentsIcon />,
  },
  {
    id: "administration",
    label: "Administration",
    path: "/administration",
    icon: <AdminPanelSettingsIcon />,
    children: [
      {
        id: "users",
        label: "Users",
        path: "/administration/users",
        icon: <BadgeIcon />,
      },
      {
        id: "roles",
        label: "Roles",
        path: "/administration/roles",
        icon: <SecurityIcon />,
      },
    ],
  },
  {
    id: "logout",
    label: "Logout",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];