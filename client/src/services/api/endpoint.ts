/**
 * -----------------------------------------------------------------------------
 * File: endpoints.ts
 * Feature: Shared API Layer
 * Ticket: EEMS-30
 * Description:
 * Centralized API endpoint definitions.
 * -----------------------------------------------------------------------------
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh",
    PROFILE: "/auth/profile",
  },

  EMPLOYEES: {
    BASE: "/employees",
    BY_ID: (id: number | string) => `/employees/${id}`,
  },

  DEPARTMENTS: {
    BASE: "/departments",
    BY_ID: (id: number | string) => `/departments/${id}`,
  },

  ATTENDANCE: {
    BASE: "/attendance",
    BY_ID: (id: number | string) => `/attendance/${id}`,
  },

  PAYROLL: {
    BASE: "/payroll",
    BY_ID: (id: number | string) => `/payroll/${id}`,
  },
} as const;