/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : recentActivities.ts
 * Description:
 * Mock recent activity feed.
 * -----------------------------------------------------------------------------
 */

import type { RecentActivity } from "../types/dashboard.types";

export const recentActivities: RecentActivity[] = [
  {
    id: "1",
    title: "New Employee Joined",
    description: "John Anderson joined the Engineering team.",
    timestamp: "10 minutes ago",
    type: "success",
  },
  {
    id: "2",
    title: "Payroll Generated",
    description: "Payroll has been generated for July 2026.",
    timestamp: "1 hour ago",
    type: "info",
  },
  {
    id: "3",
    title: "Leave Approved",
    description: "Sarah Wilson's leave request was approved.",
    timestamp: "3 hours ago",
    type: "warning",
  },
  {
    id: "4",
    title: "Department Updated",
    description: "Marketing department details were updated.",
    timestamp: "Yesterday",
    type: "success",
  },
];