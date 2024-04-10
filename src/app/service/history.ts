import { api } from "./api";

export interface History {
  id: string;
  sender: string;
  recipient: string;
  reason: string;
  date: string;
  time: string;
  sum: string;
}

export const historyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query<History[], void>({
      query: () => ({
        url: "/history/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHistoryQuery } = historyApi;
export const { getHistory } = historyApi.endpoints;
