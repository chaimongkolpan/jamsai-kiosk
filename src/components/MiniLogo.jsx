import React from "react";
import whiteLogo from "../assets/logo_1.svg";
import orangeLogo from "../assets/logo_1.svg";
import orangeMainLogo from "../assets/orangeMainLogo.svg";
import orangeSubLogo from "../assets/orangeSubLogo.svg";

export default function MiniLogo(props) {
  const { color } = props;

  return (
    <>
      <img style={{ height: "5%" }} src={orangeSubLogo} />
    </>
  );
}
