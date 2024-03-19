import React from "react";
import axios from 'axios';
import MiniLogo from "../components/MiniLogo";
import signInPageBackground from "../assets/background/Screen_jamsai_resultGuest.webp";
import QuestionDoneCard from "../components/QuestionDoneCard";
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
import rewardQr1 from "../assets/RewardQr/RewardQr1.png";
import rewardQr2 from "../assets/RewardQr/RewardQr2.png";
import rewardQr3 from "../assets/RewardQr/RewardQr3.png";
import rewardQr4 from "../assets/RewardQr/RewardQr4.png";
import rewardQr5 from "../assets/RewardQr/RewardQr5.png";
import rewardQr6 from "../assets/RewardQr/RewardQr6.png";
import rewardQr7 from "../assets/RewardQr/RewardQr7.png";
import rewardQr8 from "../assets/RewardQr/RewardQr8.png";
import rewardQr9 from "../assets/RewardQr/RewardQr9.png";
import rewardQr10 from "../assets/RewardQr/RewardQr10.png";
import rewardQr11 from "../assets/RewardQr/RewardQr11.png";
import rewardQr12 from "../assets/RewardQr/RewardQr12.png";
import rewardQr13 from "../assets/RewardQr/RewardQr13.png";
import rewardQr14 from "../assets/RewardQr/RewardQr14.png";
import rewardQr15 from "../assets/RewardQr/RewardQr15.png";

export default function QuestionDone({ answers }) {
  const url = import.meta.env.VITE_API_URL ?? 'http://143.198.90.136:3001/';
  const submitUrl = url + 'submit-answer';
  const jamsai_id = localStorage.getItem('userInfo');
  const [rewardId, setRewardId] = React.useState(null);
  const [isNotFirst, setNotFirst] = React.useState(false);
  if (!answers) {
    answers = [2, 4, 3, 4];
  }
  const getImageById = (id) => {
    switch(id) {
      case 1: return reward1;
      case 2: return reward2;
      case 3: return reward3;
      case 4: return reward4;
      case 5: return reward5;
      case 6: return reward6;
      case 7: return reward7;
      case 8: return reward8;
      case 9: return reward9;
      case 10: return reward10;
      case 11: return reward11;
      case 12: return reward12;
      case 13: return reward13;
      case 14: return reward14;
      case 15: return reward15;
      case 16: return reward16;
      default: return reward1;
    }
  }
  const getImageQrById = (id) => {
    switch(id) {
      case 1: return rewardQr1;
      case 2: return rewardQr2;
      case 3: return rewardQr3;
      case 4: return rewardQr4;
      case 5: return rewardQr5;
      case 6: return rewardQr6;
      case 7: return rewardQr7;
      case 8: return rewardQr8;
      case 9: return rewardQr9;
      case 10: return rewardQr10;
      case 11: return rewardQr11;
      case 12: return rewardQr12;
      case 13: return rewardQr13;
      case 14: return rewardQr14;
      case 15: return rewardQr15;
      default: return rewardQr1;
    }
  }
  React.useEffect(() => {
    async function fetchData() {
      if (!rewardId) {
        const payload = { jamsai_id: jamsai_id, answers: answers };
        axios.post(submitUrl, payload)
        .then(res => {
          if (res.status === 200) {
            const result = res.data;
            const result_data = result.data;
            setRewardId(result_data.reward_id ?? 8);
            setNotFirst(result_data.is_earn)
          } else {
            setRewardId(1);
          }
        })
        .catch(error => {
          console.error(error);
          setRewardId(1);
        });
      }
    }
    fetchData();
  }, []);
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
        alignItems: "center",
      }}
    >
      <MiniLogo />
      {rewardId && (
        <QuestionDoneCard
          isMember={jamsai_id}
          isShowHeart={!isNotFirst}
          imageUrl={getImageById(rewardId)} 
          qrUrl={getImageQrById(rewardId)}
        />
      )}
    </div>
  );
}
