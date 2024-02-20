import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
      state.error = "";
      state.loading = false;
    },
    setUsersLoading: (state, action) => {
      state.loading = true;
    },
    setUsersError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsersData, setUsersError, setUsersLoading } =
  usersSlice.actions;
export default usersSlice.reducer;
