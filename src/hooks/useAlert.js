import { useDispatch } from "react-redux";
import { setAlert } from "../redux/Slices/alertSlice";
import { useCallback } from "react";

const useAlert = () => {
  const dispatch = useDispatch();
  const setAlertData = useCallback(
    (message = "", type = "error", open = "true", duration = 5000) => {
      dispatch(setAlert({ message, type, open, duration }));
    },
    [dispatch]
  );
  return { setAlertData };
};

export default useAlert;
