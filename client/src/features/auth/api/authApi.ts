/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-31
 * File    : authApi.ts
 * Description:
 * Handles authentication API requests using Axios.
 * Currently uses json-server as a mock backend.
 * -----------------------------------------------------------------------------
 */

import axiosClient from "../../../services/api/axiosClient";
import { API_ENDPOINTS } from "../../../services/api/endpoints";

import type {
  AuthUser,
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

/**
 * Mock user model returned from json-server.
 * Includes password and tokens which are NOT exposed to the application.
 */
interface MockUser extends AuthUser {
  password: string;
  accessToken: string;
  refreshToken: string;
}

export const authApi = {
  /**
   * Authenticate user against mock database.
   */
  async login(payload: LoginRequest): Promise<{ data: LoginResponse }> {
    const response = await axiosClient.get<MockUser[]>(
      API_ENDPOINTS.AUTH.LOGIN,
    );

    const user = response.data.find(
      (u) =>
        u.email === payload.email &&
        u.password === payload.password,
    );

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    /**
     * Build AuthUser without exposing password.
     */
    const authUser: AuthUser = {
      id: user.id,
      employeeId: user.employeeId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      department: user.department,
      avatar: user.avatar,
      isActive: user.isActive,
    };

    const loginResponse: LoginResponse = {
      user: authUser,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    };

    return {
      data: loginResponse,
    };
  },

  /**
   * Mock logout.
   * Will be replaced with backend API in future sprints.
   */
  async logout(): Promise<void> {
    return Promise.resolve();
  },
};