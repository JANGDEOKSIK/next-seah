import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test version",
  initialState: {
    number: 0,
    name: "seah test",
    age: "12"
  },
  reducers: {
    increment: (state) => {
      state.number++;
    },
    decrement: (state) => {
      state.number--;
    },
    ageFn: (state, actions) => {
      console.log(actions);
      state.age = actions.payload;
    }
  }
})

export const { increment, decrement, ageFn } = testSlice.actions;

export default testSlice.reducer;
