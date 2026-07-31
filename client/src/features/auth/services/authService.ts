/**
 * -----------------------------------------------------------------------------
 * File: authService.ts
 * Feature: Authentication
 * Ticket: EEMS-30
 * Description:
 * Handles all authentication-related API communication.
 * -----------------------------------------------------------------------------
 */

import axiosClient from '../../../services/api/axiosClient';
import { API_ENDPOINTS } from "../../../services/api/endpoint";

import type {
    LoginRequest,
    LoginResponse,
} from '../types/auth.types';

class AuthService {
    /**
     * Authenticate user.
    */
    async login(payload: LoginRequest): Promise<LoginResponse> {
        const response = await axiosClient.post<LoginResponse>(
            API_ENDPOINTS.AUTH.LOGIN,
            payload
        );
        return response.data;
    }
    /**
     * Logout user.
     */
    async logout(): Promise<void> {
        await axiosClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    }
}

const authService = new AuthService();
export default authService;