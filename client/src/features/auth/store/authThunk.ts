/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-31
 * File    : authThunk.ts
 * -----------------------------------------------------------------------------
 */

import { createAsyncThunk } from "@reduxjs/toolkit";

import authService  from "../services/authService";
import type {
    LoginRequest,
    LoginResponse,
} from "@/features/auth/types/auth.types";

export const loginThunk = createAsyncThunk<
    LoginResponse,
    LoginRequest,
    {
        rejectValue: string;
    }
>(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await authService.login(payload);

            return response;
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Login failed. Please try again.";

            return rejectWithValue(message);
        }
    },
);