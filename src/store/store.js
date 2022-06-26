import { configureStore, createSlice } from "@reduxjs/toolkit";

let countReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count += 1;
    },
    decrement: (state, action) => {
      console.log(action);
      state.count -= 1;
    },
    incrementByTen(state, action) {
      console.log(action);
      state.count += 10;
    },
  },
});

export const { increment, decrement } = countReducer.actions;
export default configureStore({ reducer: { counter: countReducer.reducer } });
