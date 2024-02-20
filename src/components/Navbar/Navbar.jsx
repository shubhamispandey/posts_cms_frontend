import React from "react";
import {
  Add,
  ArticleOutlined,
  LogoutOutlined,
  PermContactCalendarOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTokenData } from "../../redux/Slices/loginSlice";
import logo from "../../assets/logo.webp";
import avatar from "../../assets/avatar.jpg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(setTokenData(null));
    navigate("/login");
  };

  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <div className={styles.NavbarLogo}>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <ul className={styles.NavbarItems}>
        <Link className={styles.NavbarLink} to={"/"}>
          Home
        </Link>
        <Link className={styles.NavbarLink} to={"/posts"}>
          Posts
        </Link>
      </ul>
      <div className={styles.NavbarBtn} onClick={() => navigate("/posts")}>
        Create Post <Add />
      </div>
      <div className={styles.NavbarDropdown}>
        <div className={styles.NavbarDropdownImage}>
          <img src={avatar} alt="" />
        </div>

        <div className={styles.NavbarDropdownBridge}></div>
        <ul className={styles.NavbarDropdownBody}>
          <li>
            <Link to={"/posts"}>
              Posts <ArticleOutlined />{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              Profile <PermContactCalendarOutlined />{" "}
            </Link>
          </li>
          <li>
            <Link to={"/login"} onClick={handleLogOut}>
              Log out <LogoutOutlined />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
