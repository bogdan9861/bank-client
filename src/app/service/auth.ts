import { User } from "@prisma/client";
import { api } from "./api";

export type UserData = Omit<User, "id">;
type ResponseLoginData = User & { token: string } & { photo?: string | null };

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
    setPhoto: builder.mutation<ResponseLoginData, string>({
      query: (url) => ({
        url: "/users/photo",
        body: { url },
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCurrentQuery,
  useLoginMutation,
  useRegisterMutation,
  useSetPhotoMutation,
} = AuthApi;

export const { current, login, register, setPhoto } = AuthApi.endpoints;
