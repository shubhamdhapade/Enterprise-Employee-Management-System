/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-31
 * File    : auth.types.ts
 * -----------------------------------------------------------------------------
 * Shared authentication models.
 * -----------------------------------------------------------------------------
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  avatar: string;
  isActive: boolean;
}

export interface LoginResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

/**
 * Generic API error response.
 */
export interface ApiErrorResponse {
  message: string;
}

/**
 * Authentication state.
 * Will be used by Context/Redux.
 */
export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}