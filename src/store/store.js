import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../pages/Home/homePageSlice";

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});
export default store;
