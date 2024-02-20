import React from "react";
import styles from "./NotFound.module.css";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound = () => {
  const token = useSelector((state) => state.token.token);
  const navigate = useNavigate();
  return (
    <div className={styles.Container}>
      <div>
        <h1 className={styles.Heading}>NOT FOUND 404</h1>
        <button
          className={styles.BackBtn}
          onClick={() => navigate(token ? "/" : "/login")}
        >
          <ArrowBackOutlined /> Back to {token ? "Home" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
