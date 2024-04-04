import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../app/service/auth";
import { RootState } from "../app/store/store";

interface InitialState {
  user: (User & { token: string }) | null;
  isAuthentificated: boolean;
}

const initialState: InitialState = {
  user: null,
  isAuthentificated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(AuthApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthentificated = true;
      })
      .addMatcher(
        AuthApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isAuthentificated = true;
        }
      )
      .addMatcher(AuthApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthentificated = true;
      });
  },
});

export default AuthSlice.reducer;

export const { logout } = AuthSlice.actions;

export const selectIsAuthentificated = (state: RootState) =>
  state.auth.isAuthentificated;
export const selectUser = (state: RootState) => state.auth.user;
