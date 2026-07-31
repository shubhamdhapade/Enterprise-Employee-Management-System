/**
 * -----------------------------------------------------------------------------
 * File: auth.types.ts
 * Feature: Authentication
 * Ticket: EEMS-30
 * Description:
 * Shared TypeScript models for authentication.
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
  isActive: boolean;
}

export interface LoginResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface LoginErrorResponse {
  message: string;
}