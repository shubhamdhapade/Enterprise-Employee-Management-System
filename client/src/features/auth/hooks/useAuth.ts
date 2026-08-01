/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-031
 * File    : useAuth.ts
 * Description:
 * Custom hook for accessing authentication state and dispatch.
 * -----------------------------------------------------------------------------
 */
import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/app/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);

  return {
    dispatch,
    ...auth,
  };
};