/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : dashboard.types.ts
 * Description:
 * Shared dashboard models.
 * -----------------------------------------------------------------------------
 */

import type { SvgIconComponent } from "@mui/icons-material";

export interface DashboardStat {
  id: string;
  title: string;
  value: number | string;
  icon: SvgIconComponent;
  color: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "success" | "info" | "warning" | "error";
}