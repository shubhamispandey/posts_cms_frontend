import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTokenData } from "./redux/Slices/loginSlice";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Posts from "./containers/Posts/Posts";
import NotFound from "./containers/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Alert from "./components/Alert/Alert";
import useUser from "./hooks/useUser";
import ProtectedRoute from "./utils/ProtectedRoute";
import UnProtectedRoute from "./utils/UnProtectedRoute";
import "./App.css";

const App = () => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const { setUser, setUsers } = useUser();

  useEffect(() => {
    const existingToken = localStorage.getItem("token");
    if (existingToken) dispatch(setTokenData(existingToken));
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      const payload = token.split(".")[1];
      const { username } = JSON.parse(atob(payload));
      (async () => await setUser(username))();
      (async () => await setUsers())();
    }
  }, [token, setUser, setUsers, dispatch]);

  return (
    <div>
      {token && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={<UnProtectedRoute component={<Login />} />}
        />
        <Route path="/" element={<ProtectedRoute component={<Home />} />} />
        <Route
          path="/posts"
          element={<ProtectedRoute component={<Posts />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Alert />
    </div>
  );
};

export default App;
