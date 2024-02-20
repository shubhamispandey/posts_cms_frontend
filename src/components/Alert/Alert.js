import React from "react";
import { Snackbar, Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux/Slices/alertSlice";

const AlertSnackbar = () => {
  const alertState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setAlert({
        message: "",
        open: false,
        duration: 5000,
        type: "error",
      })
    );
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={alertState.open}
      autoHideDuration={alertState.duration}
      onClose={handleClose}
      action={action}
    >
      <Alert
        onClose={handleClose}
        severity={alertState.type}
        variant="filled"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          fontSize: "1.4rem",
        }}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
