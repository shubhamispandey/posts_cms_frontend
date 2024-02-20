import React from "react";
import UserLogo from "../../../assets/avatar.jpg";
import styles from "./UserInfo.module.css";
import {
  LanguageOutlined,
  LocalPhoneOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { name, email, phone, address, website } = useSelector(
    (state) => state.user.user
  );
  const phoneNum = phone?.replace(/\D/g, "").slice(-10) || phone;
  const { suite, city } = address || {};

  return (
    <section className={styles.UserInfoWrapper}>
      <h2>USER DETAILS</h2>
      <div className={styles.UserInfo}>
        <div className={styles.UserInfoPersonal}>
          <div className={styles.UserInfoPersonalImage}>
            <img src={UserLogo} alt="User" />
          </div>
          <div className={styles.UserInfoPersonalDetails}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phoneNum}</p>
          </div>
        </div>
        <div className={styles.UserInfoWork}>
          <div>
            <span>
              <LocalPhoneOutlined />
            </span>
            <div>
              <p>Contact</p>
              <p>{phoneNum}</p>
            </div>
          </div>
          <div>
            <span>
              <MapOutlined />
            </span>
            <div>
              <p>Address</p>
              <p>
                {suite}, {city}
              </p>
            </div>
          </div>
          <div>
            <span>
              <LanguageOutlined />
            </span>
            <div>
              <p>Website</p>
              <p>{website}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
