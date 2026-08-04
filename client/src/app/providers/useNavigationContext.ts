/**
 * -----------------------------------------------------------------------------
 * Feature : Navigation
 * Ticket  : EEMS-34
 * File    : useNavigationContext.ts
 * Description:
 * Hook to access shared navigation state.
 * -----------------------------------------------------------------------------
 */
import { useContext } from "react";
import { NavigationContext } from "./NavigationContext";

const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigationContext must be used within NavigationProvider",
    );
  }

  return context;
};

export default useNavigationContext;