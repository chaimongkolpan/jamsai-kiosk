import React from "react";
import styles from "./styles.module.css";
import Logo from "../components/Logo";
import landingPageBackground from "../assets/background/Screen_jamsai_landingPage.webp";
// import landingPageBackground from '../../public'
import { useNavigate } from "react-router-dom";
import star_1 from "../assets/image/welcomePage/star_1.png";
import star_2 from "../assets/image/welcomePage/star_2.png";
import star_3 from "../assets/image/welcomePage/star_3.png";
import person_1 from "../assets/image/welcomePage/person_1.png";
import person_2 from "../assets/image/welcomePage/person_2.png";
import person_3 from "../assets/image/welcomePage/person_3.png";
import book from "../assets/image/welcomePage/book.png";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${landingPageBackground})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <img className="star-1" src={star_1} />
      <img className="star-2" src={star_2} />
      <img className="star-3" src={star_3} />
      <img className="person-1" src={person_1} />
      <img className="person-2" src={person_2} />
      <img className="person-3" src={person_3} />
      <img className="book" src={book} />
      <Logo />
      <div
        style={{
          fontSize: "24px",
          color: "white",
          marginBottom: "3%",
        }}
      >
        <span style={{ fontSize: "32px" }}>รู้ไหม?</span>
        <div>คาแรคเตอร์นิยายแบบไหนโดนใจ</div>
        <div>สายอ่านอย่างคุณ!</div>
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
            width: "75%",
            height: "15em",
            backgroundColor: "gray",
            marginBottom: "3%",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "7vh",
          marginBottom: "20%",
        }}
      >
        <Button
          type="primary"
          label="เริ่มเลย"
          onClick={() => navigate("/signin")}
        />
      </div>
    </div>
  );
}
