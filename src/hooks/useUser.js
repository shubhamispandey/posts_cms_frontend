import { useDispatch } from "react-redux";
import {
  setUserData,
  setUserError,
  setUserLoading,
} from "../redux/Slices/userSlice";
import {
  setUsersData,
  setUsersError,
  setUsersLoading,
} from "../redux/Slices/usersSlice";
import useAlert from "./useAlert";
import userService from "../services/getUser";
import usersService from "../services/getUsers";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useDispatch();
  const { setAlertData } = useAlert();

  const setUser = useCallback(
    async (userName) => {
      try {
        dispatch(setUserLoading());
        const data = await userService(userName);
        dispatch(setUserData(data[0]));
      } catch (error) {
        const message = error.message || "Login Failed";
        setAlertData(message, "error", true);
        dispatch(setUserError(message));
      }
    },
    [dispatch, setAlertData]
  );

  const setUsers = useCallback(
    async (userName) => {
      try {
        dispatch(setUsersLoading());
        const data = await usersService();
        dispatch(setUsersData(data));
      } catch (error) {
        const message = error.message || "Login Failed";
        setAlertData(message, "error", true);
        dispatch(setUsersError(message));
      }
    },
    [dispatch, setAlertData]
  );

  return { setUser, setUsers };
};

export default useUser;
