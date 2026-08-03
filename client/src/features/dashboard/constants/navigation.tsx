/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-34
 * File    : navigation.tsx
 * Description:
 * Dashboard navigation configuration.
 * -----------------------------------------------------------------------------
 */

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";

import type { NavigationItem } from "../types/navigation.types";

export const navigationItems: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    id: "employees",
    label: "Employees",
    path: "/employees",
    icon: PeopleIcon,
  },
  {
    id: "departments",
    label: "Departments",
    path: "/departments",
    icon: ApartmentIcon,
  },
  {
    id: "attendance",
    label: "Attendance",
    path: "/attendance",
    icon: EventAvailableIcon,
  },
  {
    id: "payroll",
    label: "Payroll",
    path: "/payroll",
    icon: PaymentsIcon,
  },
  {
    id: "administration",
    label: "Administration",
    path: "#",
    icon: AdminPanelSettingsIcon,
    children: [
      {
        id: "users",
        label: "Users",
        path: "/administration/users",
        icon: BadgeIcon,
      },
      {
        id: "roles",
        label: "Roles",
        path: "/administration/roles",
        icon: SecurityIcon,
      },
    ],
  },
  {
    id: "logout",
    label: "Logout",
    path: "/logout",
    icon: LogoutIcon,
  },
];