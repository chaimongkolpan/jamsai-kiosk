import React from "react";
import whiteLogo from "../assets/logo_11.svg";
import orangeLogo from "../assets/logo_11.svg";
import orangeMainLogo from "../assets/orangeMainLogo.svg";
import orangeSubLogo from "../assets/orangeSubLogo.svg";

export default function Logo(props) {
  const { color, isHideLogo, height, marginBottom, marginTop, zIndex } = props;

  const getLogo = (color = "white") => {
    const mapping = {
      white: (
        <img
          style={{ zIndex: `${zIndex ?? "100"}`, height: `${height ?? "25%"}`, marginTop: `${marginTop ?? "20%"}`, marginBottom: `${marginBottom ?? "5%"}` }}
          src={whiteLogo}
        />
      ),
      orange: (
        <>
          {!isHideLogo && (
            <img
              style={{ zIndex: 100, height: "4%", marginTop: "20%" }}
              src={orangeSubLogo}
            />
          )}
          <img
            style={{ zIndex: `${zIndex ?? "100"}`, height: `${height ?? "21%"}`, marginTop: `${marginTop ?? "0%"}`, marginBottom: `${marginBottom ?? "5%"}` }}
            src={orangeMainLogo}
          />
        </>
      ),
    };
    return mapping[color];
  };

  return <>{getLogo(color)}</>;
}
