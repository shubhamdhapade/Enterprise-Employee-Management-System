/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : dashboardStats.ts
 * Description:
 * Mock dashboard statistics.
 * -----------------------------------------------------------------------------
 */

import ApartmentIcon from "@mui/icons-material/Apartment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleIcon from "@mui/icons-material/People";

import type { DashboardStat } from "../types/dashboard.types";

export const dashboardStats: DashboardStat[] = [
  {
    id: "employees",
    title: "Employees",
    value: 124,
    icon: PeopleIcon,
    color: "#1976d2",
  },
  {
    id: "departments",
    title: "Departments",
    value: 8,
    icon: ApartmentIcon,
    color: "#2e7d32",
  },
  {
    id: "attendance",
    title: "Attendance",
    value: "92%",
    icon: EventAvailableIcon,
    color: "#ed6c02",
  },
  {
    id: "leaveRequests",
    title: "Leave Requests",
    value: 14,
    icon: PaymentsIcon,
    color: "#9c27b0",
  },
];