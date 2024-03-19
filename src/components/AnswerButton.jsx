import React from "react";

export default function AnswerButton(props) {
  const { label, onClick = ()=> {}, color } = props;
  return (
    <input
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "0.7em",
        padding: "0.5em",
        marginBottom: "1em",
        fontWeight: "700",
        fontSize: "28px",
        textWrap: "wrap",
      }}
      type="button"
      value={label}
      onClick={onClick}
    />
  );
}
