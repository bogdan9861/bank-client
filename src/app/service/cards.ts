import { Card } from "@prisma/client";
import { api } from "./api";

type Transation = {
  phoneNumber: string;
  sum: string;
  reason: string | null;
};

type TopUp = {
  sum: string;
};

export const cardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCard: builder.query<Card, void>({
      query: () => ({
        url: "/cards/",
      }),
    }),
    addCard: builder.mutation<Card, Card>({
      query: (cardData) => ({
        url: "/cards/add",
        body: cardData,
        method: "POST",
      }),
    }),
    removeCard: builder.mutation<string, string>({
      query: (id) => ({
        url: `/cards/remove/${id}`,
        body: { id },
        method: "delete",
      }),
    }),
    transaction: builder.mutation<Card, Transation>({
      query: (data) => ({
        url: "/cards/transaction/",
        body: data,
        method: "PUT",
      }),
    }),
    topUp: builder.mutation<Card, TopUp>({
      query: (sum) => ({
        url: "/cards/topup/",
        body: sum,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetCardQuery,
  useAddCardMutation,
  useRemoveCardMutation,
  useTransactionMutation,
  useTopUpMutation,
} = cardsApi;

export const { addCard, getCard, removeCard, topUp, transaction } =
  cardsApi.endpoints;
