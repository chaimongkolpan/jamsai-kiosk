import React from "react";

export default function Card(props) {
  const { marginTop, width, padding } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "2em",
        padding: `${padding ?? '1.5em 1.5em'}`,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 4px 16px 0px #4D4D4D33",
        marginTop: `${marginTop ?? '20%'}`,
        width: `${width ?? '80%'}`,
      }}
    >
      {props.children}
    </div>
  );
}
