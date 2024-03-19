import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import signInPageBackground from "../assets/background/Screen_jamsai_loginPage.webp";
import star_1 from "../assets/image/welcomePage/star_1.png";
import star_2 from "../assets/image/welcomePage/star_2.png";
import facebook from "../assets/icons/facebook.png";
import x from "../assets/icons/x.png";
import line from "../assets/icons/line.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";
import Button from "../components/Button";

export default function SignIn() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL ?? "http://143.198.90.136:3001/";
  const loginUrl = url + "login";
  const [userId, setUserId] = React.useState(null);
  const [isShowError, setShowError] = React.useState(false);
  const [isShowRequired, setIsShowRequried] = useState(false);

  const userIdTextEnterHandler = async (e) => {
    const event = { e }.e;
    if (
      !(
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 8 ||
        event.keyCode == 13 ||
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey))
      )
    ) {
      e.preventDefault();
    }

    if (event.keyCode == 13) {
      await login(userId);
    }
  };
  const userIdTextChange = (e) => {
    setUserId(e.target.value);
  };
  const login = async (userId) => {
    if (!userId) setIsShowRequried(true);

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
          navigate("/profile");
        } else {
          setShowError(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setShowError(true);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${signInPageBackground})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <img className="signin-star-1" src={star_1} />
      <img className="signin-star-2" src={star_2} />
      <Logo color="orange" />
      <div
        style={{
          fontWeight: "100",
          fontSize: "32px",
          color: "#4D4D4D",
          marginBottom: "5%",
          marginTop: "5%",
        }}
      >
        หากคุณเป็นสมาชิกแจ่มใส เข้าสู่ระบบเพื่อเล่นกิจกรรม
        <br /> เพื่อลุ้นรับของรางวัลสุดพิเศษ!
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <input
            style={{
              border: "1px solid #858585",
              ...(isShowRequired && {
                border: "1px solid #CA1E19",
              }),
              borderRadius: "0.5em",
              padding: "0.5em 1em",
              fontSize: "24px",
              width: "70vw",
              color: "#858585",
              fontWeight: "500",
              marginBottom: "5px",
            }}
            type="number"
            placeholder="กรอกหมายเลข JAMSAI Member"
            onKeyDown={userIdTextEnterHandler}
            onChange={userIdTextChange}
          />

          <label
            style={{
              color: "#CA1E19",
              fontSize: "1.5em",
              height: "1.5em",
            }}
          >
            {isShowRequired && "กรุณากรอกหมายเลข JAMSAI Member"}
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1em",
          marginTop: "1em",
        }}
      >
        <Button
          type="secondary"
          label="เข้าสู่ระบบ"
          onClick={() => login(userId)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20%",
        }}
        onClick={() => {
          localStorage.removeItem("userInfo");
          navigate("/firstQuestion");
        }}
      >
        <label style={{ color: "#F66000", fontSize: "24px" }}>
          ร่วมกิจกรรมโดยไม่ลงทะเบียน
        </label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            fontSize: "24px",
            color: "#4D4D4D",
            marginBottom: "0.5em",
          }}
        >
          Follow us
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="icon" src={facebook}></img>
          <img className="icon" src={x}></img>
          <img className="icon" src={line}></img>
          <span
            style={{
              borderRight: "2px solid #4D4D4D",
              paddingLeft: "5px",
              paddingRight: "10px",
              color: "#4D4D4D",
              fontSize: "20px",
            }}
          >
            @jamsai
          </span>
          <img className="icon" src={instagram}></img>
          <span
            style={{
              borderRight: "2px solid #4D4D4D",
              paddingLeft: "5px",
              paddingRight: "10px",
              color: "#4D4D4D",
              fontSize: "20px",
            }}
          >
            @jamsai_official
          </span>
          <img className="icon" src={tiktok}></img>
          <span
            style={{
              paddingLeft: "5px",
              paddingRight: "10px",
              color: "#4D4D4D",
              fontSize: "20px",
            }}
          >
            @jamsaistory
          </span>
        </div>
      </div>
    </div>
  );
}
