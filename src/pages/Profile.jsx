import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import logo1 from "../assets/logo_1.svg";
import Logo from "../components/Logo";
import signInPageBackground from "../assets/background/Screen_jamsai_loginPage.webp";
import star_1 from "../assets/image/welcomePage/star_1.png";
import star_2 from "../assets/image/welcomePage/star_2.png";
import facebook from "../assets/icons/facebook.png";
import x from "../assets/icons/x.png";
import line from "../assets/icons/line.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";
import MiniLogo from "../components/MiniLogo";
import profile from "../assets/background/profile.png";
import hearth from "../assets/background/hearth.png";
import point from "../assets/background/point.png";

export default function Profile() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL ?? "http://143.198.90.136:3001/";
  const loginUrl = url + "login";
  const [userId, setUserId] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);
  const [isShowError, setShowError] = React.useState(false);

  useEffect(() => {
    const newUserInfo = localStorage.getItem("userInfo");
    console.log(newUserInfo);
    setUserInfo(JSON.parse(newUserInfo));
  }, []);

  const userIdTextEnterHandler = async (e) => {
    const event = { e }.e;
    if (event.keyCode == 13) {
      await login(userId);
    }
  };
  const userIdTextChange = (e) => {
    setUserId(e.target.value);
  };
  const login = async (userId) => {
    const payload = { user_id: userId };
    axios
      .post(loginUrl, payload)
      .then((res) => {
        if (res.status === 200) {
          const result = res.data;
          const userData = result.data;
          const userInfo = {
            user_id: userData.jamsai_id,
            name: userData.title + userData.firstname + " " + userData.lastname,
            mobile: userData.mobile,
            email: userData.email,
            gender: userData.gender,
            points: userData.points,
            hearts: userData.hearts,
          };
          console.log("Login Success", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          navigate("/userInfo");
        } else {
          setShowError(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setShowError(true);
      });
  };

  const formatEmail = (email) => {
    if (!email) return "";

    const atIndex = email.indexOf("@");
    const username = email.substring(0, atIndex);
    const formattedEmail =
      username.substring(0, 5) + "xxxxx" + email.substring(atIndex);
    return formattedEmail.replace(/@.*$/, "@gmail.com");
  };

  const formatMobile = (mobile) => {
    if (!mobile) return "";

    return (
      userInfo?.mobile.substring(0, 3) + "-xxx-" + userInfo?.mobile.substring(6)
    );
  };

  const mobile = formatMobile(userInfo?.mobile);
  const email = formatEmail(userInfo?.email);

  return (
    <div
      style={{
        backgroundImage: `url(${signInPageBackground})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        padding: "5% 10%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <MiniLogo />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "2em",
          padding: "1.5em 1.5em",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 16px 0px #4D4D4D33",
          marginTop: "150px",
        }}
      >
        <img className="profile-img" src={profile} />
        <div className="profile-detail" style={{ position: "relative" }}>
          <div style={{ fontSize: "48px", color: "#F66000" }}>
            {userInfo?.name}
          </div>
          <div style={{ fontSize: "36px", color: "#4D4D4D" }}>
            เบอร์ : {mobile}
          </div>
          <div style={{ fontSize: "36px", color: "#4D4D4D" }}>
            E-mail : {email}
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className="icon" src={point}></img>
            <span
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                color: "#F66000",
                fontSize: "32px",
              }}
            >
              {userInfo?.points ?? 0}
            </span>
            <span
              style={{
                borderRight: "1px solid #4D4D4D",
                paddingRight: "20px",
                color: "#4D4D4D",
                fontSize: "26px",
                marginRight: "20px",
              }}
            >
              point
            </span>
            <img className="icon" src={hearth}></img>
            <span
              style={{
                paddingLeft: "10px",
                paddingRight: "5px",
                color: "#F66000",
                fontSize: "32px",
              }}
            >
              {userInfo?.hearts ?? 0}
            </span>
            <span
              style={{
                paddingRight: "10px",
                color: "#4D4D4D",
                fontSize: "26px",
              }}
            >
              hearth
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1em",
          marginTop: "2em",
        }}
      >
        <input
          style={{
            color: "white",
            backgroundColor: "#F66000",
            width: "8em",
            height: "5vh",
            fontSize: "24px",
            borderRadius: "3em",
          }}
          type="button"
          value="ถัดไป"
          onClick={() => navigate("/firstQuestion")}
        />
      </div>
    </div>
  );
}
