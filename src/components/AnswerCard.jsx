import React from "react";
import Card from "../components/Card";
import AnswerButton from "../components/AnswerButton";

export default function AnswerCard(props) {
  const { color, title, answers, onClickAnswer } = props;

  return (
    <Card>
      <div
        style={{
          fontWeight: 700,
          fontSize: "36px",
          color: color,
          marginTop: "0.5em",
          marginBottom: "0.5em",
        }}
      >
        {title}
      </div>
      {answers.map((answer, idx) => (
        <AnswerButton
          key={idx}
          color={color}
          label={answer.label}
          onClick={() => onClickAnswer(answer.id)}
        />
      ))}
    </Card>
  );
}
