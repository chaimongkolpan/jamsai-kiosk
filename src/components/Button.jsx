import React from "react";

const Button = ({
  label = "",
  onClick = () => {},
  type = "",
  backgroundColor = "",
  color = "",
}) => {
  const getColor = (type, backgroundColor, color) => {
    const map = {
      primary: {
        backgroundColor: "white",
        color: "#F66000",
      },
      secondary: { color: "white", backgroundColor: "#F66000" },
    };

    return {
      ...map[type],
      ...(backgroundColor && { backgroundColor }),
      ...(color && { color }),
    };
  };

  const buttonStyle = {
    width: "8em",
    height: "5vh",
    fontSize: "28px",
    borderRadius: "3em",
    ...getColor(type, backgroundColor, color),
  };

  return (
    <input style={buttonStyle} type="button" value={label} onClick={onClick} />
  );
};

export default Button;
