import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [{ Category: "Home" }],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    addCategory: (state, { payload }) => {
      state.categories = [...state.categories, payload];
    },
    //removeCategory: ()
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
