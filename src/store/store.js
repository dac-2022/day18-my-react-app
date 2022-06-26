import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let countReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    title: "Hello",
    list: [],
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
    updateList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { increment, decrement, updateList } = countReducer.actions;
export default configureStore({
  reducer: { counter: countReducer.reducer },
});

export function incrementAsync() {
  return async (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function makeAjaxCall() {
  return async (dispatch, getState) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);
    dispatch(updateList(res.data));
  };
}
