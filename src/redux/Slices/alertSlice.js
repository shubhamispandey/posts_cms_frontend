import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  open: false,
  duration: 5000,
  type: "error",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      const { message, open, duration, type } = action.payload;
      state.message = message;
      state.open = open;
      state.duration = duration || 5000;
      state.type = type || "error";
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
