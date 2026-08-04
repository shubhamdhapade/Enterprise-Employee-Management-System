/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-30 / EEMS-31
 * File    : authService.ts
 * -----------------------------------------------------------------------------
 */

import { authApi } from "../api/authApi";

import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

class AuthService {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await authApi.login(payload);
    return response.data;
  }

  async logout(): Promise<void> {
    await authApi.logout();
  }
}

const authService = new AuthService();

export default authService;