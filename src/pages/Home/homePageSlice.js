import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
  errMessage: "",
  filteredData: [],
};

const homePageReducer = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
      state.filteredData = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    loding(state) {
      state.isLoading = true;
      state.isError = false;
    },
    error(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errMessage = action.payload;
    },
    filteredData(state, action) {
      state.filteredData = action.payload;
    },
  },
});

export function getCountries() {
  return async (dispatch) => {
    dispatch(loding());
    try {
      const result = await fetch("https://restcountries.com/v3.1/all");
      const data = await result.json();
      dispatch(setCountries(data));
    } catch (error) {
      dispatch(error(error.message || "Something went wrong!💥"));
    }
  };
}
export const { setCountries, loding, error, filteredData } =
  homePageReducer.actions;
export default homePageReducer.reducer;
