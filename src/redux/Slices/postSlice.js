import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const postSlice = createSlice({
  initialState,
  name: "post",
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    putPost: (state, action) => {
      state.posts = [
        ...state.posts.filter((post) => post.id !== action.payload.id),
        action.payload,
      ];
      state.loading = false;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);

      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPosts, putPost, deletePost, setError, setLoading } =
  postSlice.actions;
export default postSlice.reducer;
