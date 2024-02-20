import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchtext: "",
  togglePostsFilter: "all",
};

const searchAndFilterSlice = createSlice({
  name: "searchAndFilter",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchtext = action.payload;
    },
    setTogglePostsFilter: (state, action) => {
      state.togglePostsFilter = action.payload;
    },
  },
});

export const { setSearchText, setTogglePostsFilter } =
  searchAndFilterSlice.actions;
export default searchAndFilterSlice.reducer;
