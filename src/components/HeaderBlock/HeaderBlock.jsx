import React from "react";
import styles from "./HeaderBlock.module.css";
// import Title2 from "../Title/Title2";
import ExtendedTitle from "../Title/ExtendedTitle";
import logoShekel from "../../assets/Images/logo-shekel.png";

export default function HeaderBlock({
  text,
  subtitle = "",
  width = "55%",
  fontSize = "3rem",
  subFontSize = "2rem",
  className = "",
  ...props
}) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {/* <Title2 text={text} width={width} /> */}
      <ExtendedTitle
        title={text}
        subtitle={subtitle}
        width={width}
        fontSize={fontSize}
        subFontSize={subFontSize}
      />
      <img src={logoShekel} alt="Shekel Logo" className={styles.logo} />
    </div>
  );
}
