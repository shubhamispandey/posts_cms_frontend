import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";
import alertSlice from "./Slices/alertSlice";
import userSlice from "./Slices/userSlice";
import usersSlice from "./Slices/usersSlice";
import postSlice from "./Slices/postSlice";
import searchAndFilterSlice from "./Slices/searchAndFilterSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  alert: alertSlice,
  user: userSlice,
  users: usersSlice,
  posts: postSlice,
  filter: searchAndFilterSlice,
});
export default rootReducer;
