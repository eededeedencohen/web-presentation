import React from "react";
import styles from "./HeaderBlock.module.css";
import Title2 from "../Title/Title2";
import logoShekel from "../../assets/Images/logo-shekel.png";

export default function HeaderBlock() {
  return (
    <div className={styles.container}>
      <Title2 text="החזון המנחה אותנו:" />
      <img src={logoShekel} alt="Shekel Logo" className={styles.logo} />
    </div>
  );
}
