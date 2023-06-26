import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {};

interface State {
  [key: string]: number
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state: State, {payload}) => {
      const count: number = state[payload] || 0;
      state[payload] = count + 1;
    },
    decrement: (state: State, {payload}) => {
      const count: number = state[payload] || 0;

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    exclude: (state: State, {payload}) => {
      delete state[payload];
    },
    reset: () => initialState
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;