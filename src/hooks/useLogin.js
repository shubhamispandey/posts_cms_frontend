import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLoginError,
  setLoginLoading,
  setTokenData,
} from "../redux/Slices/loginSlice";
import useAlert from "./useAlert";
import loginService from "../services/login";
import { useCallback } from "react";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setAlertData } = useAlert();

  const login = useCallback(
    async (userName) => {
      try {
        dispatch(setLoginLoading());
        const data = await loginService(userName);

        if (data.success) {
          localStorage.setItem("token", data.token);
          dispatch(setTokenData(data.token));
          navigate("/");
        } else {
          dispatch(setLoginLoading(false));
          throw new Error(data.message);
        }
      } catch (error) {
        const message =
          error.response.data.message || error.message || "Login Failed";
        setAlertData(message, "error", true);
        dispatch(setLoginError(message));
      }
    },
    [dispatch, navigate, setAlertData]
  );

  return { login };
};

export default useLogin;
