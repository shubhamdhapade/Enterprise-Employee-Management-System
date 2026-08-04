/**
 * -----------------------------------------------------------------------------
 * Feature : Navigation
 * Ticket  : EEMS-34
 * File    : NavigationProvider.tsx
 * -----------------------------------------------------------------------------
 */

import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { NavigationContext } from "./NavigationContext";

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({
  children,
}: NavigationProviderProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [expandedMenus, setExpandedMenus] =
    useState<Record<string, boolean>>({});

  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const toggleMobileDrawer = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobileDrawer = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMenu = useCallback((menuId: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  }, []);

  const value = useMemo(
    () => ({
      collapsed,
      mobileOpen,
      expandedMenus,
      toggleSidebar,
      toggleMobileDrawer,
      closeMobileDrawer,
      toggleMenu,
    }),
    [
      collapsed,
      mobileOpen,
      expandedMenus,
      toggleSidebar,
      toggleMobileDrawer,
      closeMobileDrawer,
      toggleMenu,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};