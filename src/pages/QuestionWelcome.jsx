import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Logo1 from "../assets/logo_1.svg";
import Logo2 from "../assets/logo_2.svg";
import Logo3 from "../assets/logo_3.svg";
import Logo4 from "../assets/logo_4.svg";
import blackFog from "../assets/background/black_fog.png";
import background1 from "../assets/background/bg_1.png";
import background1fog from "../assets/background/bg_1_fog.png";
import background2 from "../assets/background/bg_2.png";
import background3 from "../assets/background/bg_3.png";
import background4 from "../assets/background/bg_4.png";
import bg_1_video from "../assets/background/bg_1_video.mp4";
import bg_2_video from "../assets/background/bg_2_video.mp4";
import bg_3_video from "../assets/background/bg_3_video.mp4";
import bg_4_video from "../assets/background/bg_4_video.mp4";

export default function Welcome() {
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    startVideo();
  }, []);

  const startVideo = () => {
    var video = document.getElementById("myVideo");
  };

  const theme = {
    1: {
      logoIcon: Logo3,
      title: (
        <div>
          เชิญสหายเยือนตำหนัก
          <span style={{ fontSize: "40px" }}>มากกว่ารัก</span>
          <br />
          คุณจะได้พานพบเรื่องราวแสนประทับใจของ
          <br />
          องค์ชายและท่านหญิง
        </div>
      ),
      textColor: "#E2211C",
      btnColor: "white",
      btnBackgroundColor: "#E2211C",
      backgroundImage: background3,
    },
    2: {
      logoIcon: Logo4,
      title: (
        <div>
          ขอต้อนรับสู่จักรวาล everY <br />
          ที่ความรักไม่มีขีดจำกัดเท่ากับอินฟินิตี้
        </div>
      ),
      textColor: "white",
      btnColor: "#8B4498",
      btnBackgroundColor: "white",
      backgroundImage: background4,
    },
    3: {
      logoIcon: Logo2,
      title: (
        <div>
          ยินดีต้อนรับสู่ดินแดนแห่งความรัก
          <br />
          เตรียมพบกับหนุ่มหล่อในฝัน
          <br />
          ที่จะทำให้หัวใจคุณเต้นตึกตัก
        </div>
      ),
      textColor: "#FF564A",
      btnColor: "white",
      btnBackgroundColor: "#FF564A",
      backgroundImage: background2,
    },
    4: {
      logoIcon: Logo1,
      title: (
        <div>
          เปิดประตูทะลุมิติสู่อาณาจักร{" "}
          <span style={{ fontSize: "40px" }}>ENTER </span>
          <br />
          ที่คุณจะได้พบกับเหล่าเทพและผู้กล้า
        </div>
      ),
      textColor: "#4D4D4D",
      btnColor: "#F66000",
      btnBackgroundColor: "white",
      backgroundImage: background1,
    },
  };
  return (
    <>
      <div
        style={{
          // zIndex: 1,
          // backgroundImage: `url(${theme[id]?.backgroundImage})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          // padding: "10%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {+id === 1 && (
          <>
            <video autoPlay muted loop id="myVideo">
              <source src={bg_3_video} type="video/mp4" />
            </video>
            <img className="bg_1_effect_1" src={background1fog}></img>
          </>
        )}
        {+id === 2 && (
          <>
            <video autoPlay muted loop id="myVideo">
              <source src={bg_4_video} type="video/mp4" />
            </video>
            <img className="bg_1_effect_1" src={blackFog}></img>
          </>
        )}{" "}
        {+id === 3 && (
          <>
            <video autoPlay muted loop id="myVideo">
              <source src={bg_2_video} type="video/mp4" />
            </video>
            <img className="bg_1_effect_1" src={background1fog}></img>
          </>
        )}{" "}
        {+id === 4 && (
          <>
            <video autoPlay muted loop id="myVideo">
              <source src={bg_1_video} type="video/mp4" />
            </video>
            <img className="bg_1_effect_1" src={background1fog}></img>
          </>
        )}
        <img
          style={{
            position: "absolute",
            top: "30px",
            zIndex: 3,
            height: "80px",
            ...((+id === 1 || +id === 3 || +id === 4) && {
              left: "30px",
            }),
            ...(+id === 2 && {
              right: "30px",
            }),
          }}
          src={theme[id]?.logoIcon}
        />
        <div
          style={{
            zIndex: 3,
            fontSize: "32px",
            color: theme[id]?.textColor,
            marginTop: "500px",
            marginBottom: "5%",
          }}
        >
          {theme[id]?.title}
        </div>
        <div
          style={{
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "7vh",
            marginBottom: "20%",
          }}
        >
          <Button
            backgroundColor={theme[id]?.btnBackgroundColor}
            color={theme[id]?.btnColor}
            type="primary"
            label="ถัดไป"
            onClick={() => navigate(`/question/${id}`)}
          />
        </div>
      </div>
    </>
  );
}
