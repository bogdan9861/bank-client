import { User } from "@prisma/client";
import { api } from "./api";

export type UserData = Omit<User, "id">;
type ResponseLoginData = User & { token: string };

export const AuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/users/login",
        body: userData,
        method: "POST",
      }),
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/users/register",
        body: userData,
        method: "POST",
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: "/users/",
        method: "GET",
      }),
    }),
  }),
});

export const { useCurrentQuery, useLoginMutation, useRegisterMutation } =
  AuthApi;

export const { current, login, register } = AuthApi.endpoints;
