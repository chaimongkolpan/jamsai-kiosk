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
import quiz from "../assets/image/welcomePage/quiz.webp";
import reward1 from "../assets/Reward/Reward1.webp";
import reward2 from "../assets/Reward/Reward2.webp";
import reward3 from "../assets/Reward/Reward3.webp";
import reward4 from "../assets/Reward/Reward4.webp";
import reward5 from "../assets/Reward/Reward5.webp";
import reward6 from "../assets/Reward/Reward6.webp";
import reward7 from "../assets/Reward/Reward7.webp";
import reward8 from "../assets/Reward/Reward8.webp";
import reward9 from "../assets/Reward/Reward9.webp";
import reward10 from "../assets/Reward/Reward10.webp";
import reward11 from "../assets/Reward/Reward11.webp";
import reward12 from "../assets/Reward/Reward12.webp";
import reward13 from "../assets/Reward/Reward13.webp";
import reward14 from "../assets/Reward/Reward14.webp";
import reward15 from "../assets/Reward/Reward15.webp";
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
        paddingTop: "5%",
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
      <img className="quiz" src={quiz} />
      <Logo />
      <div
        style={{
          fontSize: "36px",
          color: "white",
          marginBottom: "3%",
          lineHeight: "40px",
        }}
      >
        <span style={{ fontSize: "46px", lineHeight: "60px" }}>รู้ไหม?</span>
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
        <div className="reward-container flex" style={{ marginTop: "1em" }}>
          <img className="reward-1" src={reward1} />
          <img className="reward-2" src={reward2} />
          <img className="reward-3" src={reward3} />
          <img className="reward-4" src={reward4} />
          <img className="reward-5" src={reward5} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "7vh",
          marginTop: "5%",
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
