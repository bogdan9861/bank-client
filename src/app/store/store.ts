import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { api } from "../service/api";

import auth from "../../features/AuthSlice";
import card from "../../features/cardSlice";
import { listener } from "../../middleware/auth";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    card,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(api.middleware).prepend(listener.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
