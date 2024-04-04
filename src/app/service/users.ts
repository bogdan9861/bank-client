import { api } from "./api";
import { User } from "@prisma/client";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;

export const {
   getAllUsers ,
} = usersApi.endpoints;
