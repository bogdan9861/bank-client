import { Card } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { cardsApi } from "../app/service/cards";
import { RootState } from "../app/store/store";

type InitialCard = Omit<Card, "id">;

type InitialState = {
  card: (InitialCard & { ballance: string }) | null;
};

const initialState: InitialState = {
  card: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        cardsApi.endpoints.getCard.matchFulfilled,
        (state, action) => {
          state.card = action.payload;
        }
      )
      .addMatcher(
        cardsApi.endpoints.addCard.matchFulfilled,
        (state, action) => {
          state.card = action.payload;
        }
      )
      .addMatcher(
        cardsApi.endpoints.removeCard.matchFulfilled,
        (state, action) => {
          state.card = null;
        }
      )
      .addMatcher(
        cardsApi.endpoints.transaction.matchFulfilled,
        (state, action) => {
          state.card = action.payload.newCardFrom;
        }
      )
      .addMatcher(cardsApi.endpoints.topUp.matchFulfilled, (state, action) => {
        state.card = action.payload;
      });
  },
});

export default cardSlice.reducer;
export const SelectCard = (state: RootState) => state.card.card;
