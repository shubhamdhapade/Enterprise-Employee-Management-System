/**
 * -----------------------------------------------------------------------------
 * Feature : Navigation
 * Ticket  : EEMS-34
 * File    : NavigationContext.ts
 * Description:
 * Shared navigation context.
 * -----------------------------------------------------------------------------
 */

import { createContext } from "react";

export interface NavigationContextType {
  collapsed: boolean;
  mobileOpen: boolean;
  expandedMenus: Record<string, boolean>;

  toggleSidebar: () => void;
  toggleMobileDrawer: () => void;
  closeMobileDrawer: () => void;
  toggleMenu: (menuId: string) => void;
}

export const NavigationContext =
  createContext<NavigationContextType | null>(null);