import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Kobe",
  age: 24,
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    actionName(state, { payload }) {
      state.name = payload;
    },
    actionAge() {},
  },
});

const { actions } = slice;

export { actions };

export default slice.reducer;
