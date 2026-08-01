/**
 * -----------------------------------------------------------------------------
 * Feature : Authentication
 * Ticket  : EEMS-031
 * File    : authSlice.ts
 * -----------------------------------------------------------------------------
 */

import { createSlice } from "@reduxjs/toolkit";

import { loginThunk } from "./authThunk";
import type { AuthState } from "../types/auth.types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.error = null;
    },

    clearError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      // Success
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        state.isAuthenticated = true;
      })

      // Failure
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;

        state.error =
          action.payload ?? "Unable to login. Please try again.";

        state.isAuthenticated = false;
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;