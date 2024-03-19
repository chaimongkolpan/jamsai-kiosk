import React from "react";
import { useNavigate } from "react-router-dom";
import MiniLogo from "../components/MiniLogo";
import signInPageBackground from "../assets/background/Screen_jamsai_homePage.webp";
import AnswerCard from "../components/AnswerCard";
import star_1 from "../assets/image/welcomePage/star_1.png";
import star_2 from "../assets/image/welcomePage/star_2.png";
import star_4 from "../assets/image/welcomePage/star_4.png";

export default function SignIn() {
  const navigate = useNavigate();

  const answers = [
    {
      id: 1,
      label: "ความเรื่องราวความรักในอดีตย้อนไปในสมัยโบราณ",
    },
    {
      id: 2,
      label: "รักเกิดกับใครก็ได้ไม่จำกัดเพศ",
    },
    {
      id: 3,
      label: "ไม่อินเรื่องรักเท่าไหร่ขอไปหาหนทางที่มีความบู๊-แฟนตาซีดีกว่า",
    },
    {
      id: 4,
      label: "ขออยู่กับปัจจุบันอินกับเรื่องรัก ณ เวลานี้สุดๆ",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${signInPageBackground})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        padding: "4% 10%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <img className="first-question-star-1" src={star_1} />
      <img className="first-question-star-2" src={star_2} />
      <img className="first-question-star-3" src={star_4} />
      <MiniLogo />
      <AnswerCard
        color="#F66000"
        title={"คุณชอบอ่านหนังสือแบบไหน?"}
        answers={answers}
        onClickAnswer={(id) => navigate(`/questionWelcome/${id}`)}
      />
    </div>
  );
}
