// components/Title/Title2.jsx
import React from "react";
import styles from "./Title2.module.css";

export default function Title2({ text }) {
  return (
    <div className={styles.parallelogram}>
      <span className={styles.textContent}>{text}</span>
    </div>
  );
}
