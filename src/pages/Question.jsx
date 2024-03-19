import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniLogo from "../components/MiniLogo";
import AnswerCard from "../components/AnswerCard";
import { useParams } from "react-router-dom";
import Logo1 from "../assets/logo_1.svg";
import Logo2 from "../assets/logo_2.svg";
import Logo3 from "../assets/logo_3.svg";
import Logo4 from "../assets/logo_4.svg";

import bg11 from "../assets/background/questions_1/11.webp";
import bg111 from "../assets/background/questions_1/111.webp";
import bg112 from "../assets/background/questions_1/112.webp";
import bg12 from "../assets/background/questions_1/12.webp";
import bg121 from "../assets/background/questions_1/121.webp";
import bg13 from "../assets/background/questions_1/13.webp";

import bg21 from "../assets/background/questions_2/21.webp";
import bg22 from "../assets/background/questions_2/22.webp";
import bg23 from "../assets/background/questions_2/23.webp";

import bg31 from "../assets/background/questions_3/31.webp";
import bg311 from "../assets/background/questions_3/311.webp";
import bg32 from "../assets/background/questions_3/32.webp";
import bg33 from "../assets/background/questions_3/33.webp";
import bg331 from "../assets/background/questions_3/331.webp";

import bg41 from "../assets/background/questions_4/41.webp";
import bg42 from "../assets/background/questions_4/42.webp";
import bg43 from "../assets/background/questions_4/43.webp";

export default function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curAnswer, setCurAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const answers = {
    1: [
      {
        id: 1,
        label: "พล็อตนิยายแบบไหนที่ถ้าเจอเป็นต้องหยิบมาอ่าน",
        background: bg11,
        otherImage: (
          <>
            <img className="bg111" src={bg111} />,
            <img className="bg112" src={bg112} />,
          </>
        ),
        answers: [
          {
            id: 1,
            label: "โรแมนติกคอมเมดี้น่ารักๆ สิที่อ่านเพลินและพลาดไม่ได้",
          },
          {
            id: 2,
            label:
              "เรื่องชิงบัลลังก์หรือ การเมือง วางใจได้เลย ฉันคือผู้เชี่ยวชาญ",
          },
          {
            id: 3,
            label:
              "ไม่ว่าจะทะลุมิติหรือย้อนเวลากลับมาก็ขอทำชีวิตนี้ให้ดีที่สุด",
          },
          {
            id: 4,
            label:
              "พล็อตแบบใดก็ขออ่านเพราะ เน้นตามอ่านมาจากเรื่องที่เป็นซีรี่ส์",
          },
        ],
      },
      {
        id: 2,
        label: "ถ้าสามารถสวมบทบาทเป็นนางเอกได้ อยากจะลองใช้ชีวิตแบบไหน",
        background: bg12,
        otherImage: <img className="bg111" src={bg121} />,
        answers: [
          {
            id: 1,
            label:
              "เป็นคุณหนูหรือถ้าให้ดีก็อยากลองใช้ชีวิตเป็นองค์หญิงสักครั้ง",
          },
          {
            id: 2,
            label: "ใช้ชีวิตเป็นใครไม่สำคัญ เพียงมีคนที่อยากสนับสนุนเท่านั้น",
          },
          {
            id: 3,
            label:
              "ใช้ชีวิตเพื่อช่วยเหลือคนอื่น อย่างน้อยขอทิ้งคุณงามความดีไว้บ้าง",
          },
          {
            id: 4,
            label:
              "เป็นคนสำคัญที่สุดของพระเอก ไม่ว่าชีวิตต้องลำบากเพียงใดก็ยอม",
          },
        ],
      },
      {
        id: 3,
        label:
          "ถ้าให้เลือกผู้ชายสักคนมาเป็นพระเอกในชีวิตคุณ ผู้ชายแบบไหนที่คุณจะเลือก",
        background: bg13,
        answers: [
          {
            id: 1,
            label:
              "คนที่ตรงสเป็คตามคำขอทุกประการยิ่งถ้าเป็นคนตำแหน่งใหญ่ๆ มั่นคงก็ยิ่งดี",
          },
          {
            id: 2,
            label:
              "คนที่มีตำแหน่ง มียศศักดิ์ เป็นคนอบอุ่นที่ไม่ค่อยพูด แต่แสดงให้เห็น",
          },
          {
            id: 3,
            label: "ผู้ชายที่กล้าตัดสินใจพร้อมเป็นผู้นำ ทั้งยังปกป้องคุณได้",
          },
          {
            id: 4,
            label:
              "แม้แรกเริ่มจะไม่ได้ดีกับคุณที่สุด แต่สุดท้ายคุณจะเป็นคนที่เขารักและทำดีด้วยที่สุด",
          },
        ],
      },
    ],
    2: [
      {
        id: 1,
        label:
          "ถ้ามีนิยายเหล่านี้อยู่บนชั้น คุณจะเลือกอ่านเรื่องไหนก่อนเป็นอันดับแรก",
        background: bg21,
        answers: [
          {
            id: 1,
            label: "ว๊าย!เขินกับรักใสๆ เกมออนไลน์ อีสปอร์ต และวัยเรียน",
          },
          {
            id: 2,
            label: "สืบสวนสอบสวน หาความจริงที่ซ่อนอยู่",
          },
          {
            id: 3,
            label: "เอาชีวิตรอดใช้ไหวพริบ ความสามารถระดับ 10",
          },
          {
            id: 4,
            label:
              "ย้อนไปยุคโบราณ ได้เห็นตัวละครใส่เสื้อผ้ากรุยกราย ยิ่งถ้าเป็นโลกที่ใช้พลังลมปราณ หรือพลังพิเศษได้ยิ่งดี",
          },
        ],
      },
      {
        id: 2,
        label: "ตัวละครแบบใดที่ตรงสเป็คคุณที่สุด",
        background: bg22,
        answers: [
          {
            id: 1,
            label: "คนธรรมดา นักกีฬาสุดเท่ หรือหนุ่มออฟฟิศสุดภูมิฐาน",
          },
          {
            id: 2,
            label: "เพื่อนกัน เฟรนด์โซน เฟรนด์ใจ หรือหนุ่มแว่นดีกรีนักจิตวิทยา",
          },
          {
            id: 3,
            label:
              "ชอบ Bad Boy เก่งเทพเป็นงานหลัก เก๊กหล่อเป็นงานเสริม หรือจะแอบทำงานเก็บของเก่าก็ไม่ติด",
          },
          {
            id: 4,
            label:
              "จะสวยจะหล่อก็ได้ แต่ไม่ชอบคนอายุเท่ากัน และถ้ายิ่งรักมากยิ่งดี",
          },
        ],
      },
      {
        id: 3,
        label: "ไปเดตกันแฟนแล้วบังเอิญคุณหกล้ม ณ ตอนนั้นแฟนคุณจะทำอย่างไร",
        background: bg23,
        answers: [
          {
            id: 1,
            label:
              "แฟนคุณจะรีบเข้ามาประคองให้คุณลุกขึ้นพร้อมก้มลงทายาที่แผลให้อย่างเบามือ",
          },
          {
            id: 2,
            label: "รีบพาคุณไปโรงพยาบาล ให้หมอตรวจให้ละเอียดไว้ก่อนสบายใจกว่า",
          },
          {
            id: 3,
            label:
              "เบี่ยงตัวหลบ ไม่ขอล้มไปด้วย แต่ชอบหัวเราะเยาะสมน้ำหน้าคุณอยู่ข้างๆ",
          },
          {
            id: 4,
            label:
              "วิ่งเข้ามารับคุณทันทีตัวเองบาดเจ็บได้ แต่คุณต้องปลอดภัย ไร้รอยขีดข่วนที่สุด",
          },
        ],
      },
    ],
    3: [
      {
        id: 1,
        label: "ช่วงนี้คุณชอบอ่านนิยายแบบไหน",
        background: bg31,
        otherImage: <img className="bg311" src={bg311} />,
        answers: [
          {
            id: 1,
            label: "ความรักใสๆน่ารักของพระเอก-นางเอก ทำให้ยิ้มตามไปด้วยเสมอ",
          },
          {
            id: 2,
            label:
              "ต้องเป็นเรื่องราวความรักที่มีความเข้มข้นและยังแซ่บนิดๆสิที่ชอบ",
          },
          {
            id: 3,
            label:
              "ความรักในวัยทำงานก็ดีนะดูเป็นความรักที่เป็นผู้ใหญ่ น่าค้นหา",
          },
          {
            id: 4,
            label:
              "นิยายที่ทำเป็นซีรี่ส์สิยิ่งถ้าอ่านนิยายกับดูซีรี่ส์ควบคู่กันไปรับรองว่าจะยิ่งฟิน",
          },
        ],
      },
      {
        id: 2,
        label: "วันหนึ่งมีคนมาชวนคุณไปเดต คุณจะทำอย่างไร",
        background: bg32,
        answers: [
          {
            id: 1,
            label: "ตอบรับทันทีเพราะ คุณพร้อมเปิดใจให้ความรักเสมอ",
          },
          {
            id: 2,
            label:
              "ลังเลพลางคิดถึงข้อดีและข้อเสียอยู่ในใจ อย่างน้อยขอคิดให้ถี่ถ้วนก่อนตัดสินใจ",
          },
          {
            id: 3,
            label:
              "ปฏิเสธทันที ในเมื่อเขายังไม่ใช่คนๆ นั้นคุณก็มีอิสระที่จะเลือก",
          },
          {
            id: 4,
            label: "นิ่งเฉย ขอใช้เวลาทำความรู้จักกันให้มากกว่านี้ก่อนดีกว่า",
          },
        ],
      },
      {
        id: 3,
        label: "เลือกสีที่ชอบ",
        background: bg33,
        otherImage: <img className="bg331" src={bg331} />,
        answers: [
          {
            id: 1,
            label: "สีชมพู/ สีเหลือง / สีเขียว",
          },
          {
            id: 2,
            label: "สีน้ำตาล/ สีน้ำเงิน / สีม่วง",
          },
          {
            id: 3,
            label: "สีแดง/ สีส้ม / สีเทา",
          },
          {
            id: 4,
            label: "สีฟ้า/ สีขาว / สีดำ",
          },
        ],
      },
    ],
    4: [
      {
        id: 1,
        label: "นิยายสายบู๊-กำลังภายใน-แฟนตาซีที่อ่านช่วงนี้เป็นแบบไหน",
        background: bg41,
        answers: [
          {
            id: 1,
            label:
              "ไม่เน้นเรื่องความรักเท่าไหร่ส่วนใหญ่จะเน้นเรื่องมิตรภาพ และที่สำคัญแอบจิ้นได้ซะงั้น",
          },
          {
            id: 2,
            label:
              "มีเรื่องความรักมาพร้อมกับการดำเนินเรื่องหลัก คนเราจะขาดความรักไม่ได้",
          },
          {
            id: 3,
            label: "ส่วนใหญ่เป็นเรื่องที่มีซีรี่ส์ด้วยอ่านไปดูไปยิ่งสนุก",
          },
          {
            id: 4,
            label: "ตัวเอกเดินทางตามหาความฝัน ยิ่งอ่านยิ่งอยากเอาใจช่วย",
          },
        ],
      },
      {
        id: 2,
        label:
          "เอ้า!อยู่ๆคุณก็ทะลุมิติไปต่างโลกซะงั้น มาเช็คกันหน่อยว่ามีของติดตัวอะไรมาบ้าง",
        background: bg42,
        answers: [
          {
            id: 1,
            label: "แปรงสีฟันพร้อมยาสีฟัน และยังมีไม้บรรทัดอีก 1 อัน",
          },
          {
            id: 2,
            label: "เข็มกลัดร่มพับ และไฟแช็ก",
          },
          {
            id: 3,
            label: "พวงกุญรูปสายฟ้าพร้อมกระเป๋าทรงน้ำเต้า",
          },
          {
            id: 4,
            label: "หนังสือท่องโลกใต้ทะเลพร้อมชุดดินสอสีไม้ชุดใหญ่ครบ 120 สี",
          },
        ],
      },
      {
        id: 3,
        label:
          "ถ้าให้โอกาสเลือกเพื่อนสนิทได้ 3 คน คนแบบไหนที่คุณอยากได้เป็นเพื่อนสนิท",
        background: bg43,
        answers: [
          {
            id: 1,
            label: "แวมไพร์/ สถาปนิก / มังกรน้อย",
          },
          {
            id: 2,
            label: "ลูกชายของประมุขพรรคมาร/ แม่มด / พลทหาร",
          },
          {
            id: 3,
            label: "เทพ/ นักผจญภัย / ชาวยุทธ",
          },
          {
            id: 4,
            label:
              "นักส่งสารผู้ใช้เวทมนต์/ ลูกศิษย์สำนักเซียน / เพื่อนร่วมชั้นสุดลึกลับ",
          },
        ],
      },
    ],
  };

  const theme = {
    1: {
      logoIcon: Logo3,
      textColor: "#E2211C",
      btnColor: "white",
      btnBackgroundColor: "#E2211C",
    },
    2: {
      logoIcon: Logo4,
      textColor: "white",
      btnColor: "#8B4498",
      btnBackgroundColor: "#8B4498",
    },
    3: {
      logoIcon: Logo2,
      textColor: "#FF564A",
      btnColor: "white",
      btnBackgroundColor: "#FF564A",
    },
    4: {
      logoIcon: Logo1,
      textColor: "black",
      btnColor: "#F66000",
      btnBackgroundColor: "#F66000",
    },
  };

  return (
    <div
      className="question-card"
      style={{
        backgroundImage: `url(${answers[id][curAnswer]?.background})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        padding: "5% 10%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {answers[id][curAnswer]?.otherImage}
      <MiniLogo />
      <AnswerCard
        color={theme[id]?.btnBackgroundColor}
        title={answers[id][curAnswer]?.label}
        answers={answers[id][curAnswer]?.answers}
        onClickAnswer={(val) => {
          setSelectedAnswer((prevState) => [...prevState, val]);

          if (curAnswer >= 2) navigate("/questionDone");

          setCurAnswer((prevState) => prevState + 1);
        }}
      />
    </div>
  );
}
