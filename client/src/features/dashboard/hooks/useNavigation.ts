/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard Navigation
 * Ticket  : EEMS-34
 * File    : useNavigation.ts
 * Description:
 * Exposes shared navigation state from NavigationProvider.
 * -----------------------------------------------------------------------------
 */

import useNavigationContext from "@/app/providers/useNavigationContext";

const useNavigation = () => {
  return useNavigationContext();
};

export default useNavigation;