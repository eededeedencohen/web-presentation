import React from "react";
import styles from "./HeaderBlock.module.css";
import Title2 from "../Title/Title2";
import logoShekel from "../../assets/Images/logo-shekel.png";

export default function HeaderBlock({ text }) {
  return (
    <div className={styles.container}>
      <Title2 text={text} />
      <img src={logoShekel} alt="Shekel Logo" className={styles.logo} />
    </div>
  );
}
