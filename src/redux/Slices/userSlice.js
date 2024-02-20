import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  user: {
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.error = "";
      state.loading = false;
    },
    setUserLoading: (state, action) => {
      state.loading = true;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserData, setUserError, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
