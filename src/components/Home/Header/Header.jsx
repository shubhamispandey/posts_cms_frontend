import React from "react";
import { useSelector } from "react-redux";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "@mui/material";
import user1 from "../../../assets/user-1.webp";
import user2 from "../../../assets/user-2.webp";
import user3 from "../../../assets/user-3.webp";
import icon1 from "../../../assets/header-background-icon-1.png";
import icon2 from "../../../assets/header-background-icon-2.png";
import icon3 from "../../../assets/header-background-icon-3.png";
import styles from "./Header.module.css";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContent}>
        <h3 className={styles.HeaderWelcome}>
          Welcome<span> {user.name}</span>
        </h3>
        <h2 className={styles.HeaderTitle}>
          <span>Integrate your</span>
          <span>
            stack <ArrowForward /> <span className={styles.purple}>Post</span>
          </span>
          <span>your thoughts</span>
        </h2>
        <p className={styles.HeaderTagline}>
          Unlock Your Potential: Powering Your Posts with Rapid Evolution and
          Seamless Growth!
        </p>
        <Link to="/posts">
          <button className={styles.Btn}>Start creating Posts </button>
        </Link>
      </div>
      <div className={styles.HeaderImages}>
        <div className={styles.HeaderImagesUsers}>
          <img src={user1} alt="" />
          <img src={user2} alt="" />
          <img src={user3} alt="" />
        </div>
        <div className={styles.HeaderImagesIcons}>
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
