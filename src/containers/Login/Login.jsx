import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import googleLogo from "../../assets/googleLogo.webp";
import logo from "../../assets/logo.webp";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const { loading } = useSelector((state) => state.login);
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(userName);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h3 className="tagline">One account Many possibilities</h3>
        <form>
          <div className="form-control">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
          </div>
          <button className="btn btn-dark" onClick={handleSignIn}>
            Sign in
          </button>
          <button className="btn btn-light">
            <img src={googleLogo} alt="" /> Sign in with Google{" "}
            {loading && <CircularProgress />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
