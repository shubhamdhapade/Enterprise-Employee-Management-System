/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard Navigation
 * Ticket  : EEMS-34
 * File    : navigation.types.ts
 * Description:
 * Shared types for dashboard sidebar navigation.
 * -----------------------------------------------------------------------------
 */

import type { SvgIconComponent } from "@mui/icons-material";
export interface NavigationItem {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Sidebar label.
   */
  label: string;

  /**
   * Application route.
   */
  path: string;

  /**
   * Material UI icon.
   */
  icon: SvgIconComponent;

  /**
   * Child navigation items.
   */
  children?: NavigationItem[];

  /**
   * Hide from sidebar.
   */
  hidden?: boolean;

  /**
   * Disable navigation.
   */
  disabled?: boolean;
}