import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "../Home/slice";

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
