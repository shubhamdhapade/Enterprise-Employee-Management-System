/**
 * Login form values.
 * Used by React Hook Form and Zod.
 */
export interface LoginFormData {
  email: string;
  password: string;
}

/**
 * Authentication API request.
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Authentication API response.
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user: AuthUser;
}

/**
 * Authenticated user model.
 */
export interface AuthUser {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  avatar?: string;
  isActive: boolean;
}

/**
 * Authentication state.
 * Will be used in Redux Toolkit.
 */
export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}