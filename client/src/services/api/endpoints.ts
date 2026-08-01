/**
 * -----------------------------------------------------------------------------
 * API Endpoints
 * -----------------------------------------------------------------------------
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/users",
    LOGOUT: "/logout",
  },

  EMPLOYEES: {
    BASE: "/employees",
  },

  DEPARTMENTS: {
    BASE: "/departments",
  },

  ATTENDANCE: {
    BASE: "/attendance",
  },

  PAYROLL: {
    BASE: "/payroll",
  },
} as const;