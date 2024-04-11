import { createSlice } from "@reduxjs/toolkit";
import { historyApi } from "../app/service/history";
import { History } from "../app/service/history";
import { RootState } from "../app/store/store";

interface InitialState {
  history: History[];
}

const initialState: InitialState = {
  history: [],
};

const HistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    remove: () => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(
      historyApi.endpoints.getHistory.matchFulfilled,
      (state, action) => {
        state.history = action.payload;
      }
    )
  },
});

export default HistorySlice.reducer;
export const SelectHistory = (state: RootState) => state.history.history;
