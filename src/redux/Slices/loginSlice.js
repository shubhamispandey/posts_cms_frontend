import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  token: null,
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setTokenData: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = "";
    },
    setLoginLoading: (state, action) => {
      state.loading = action.payload || true;
    },
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTokenData, setLoginError, setLoginLoading } =
  loginSlice.actions;
export default loginSlice.reducer;
