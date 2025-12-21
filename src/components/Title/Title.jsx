import React from "react";
import styles from "./Title.module.css";

export default function Title({ text, className = "" }) {
  return (
    <div className={`${styles.title} ${className}`}>
      {/* החלק הימני - הזנב המשופע */}
      <div className={styles["parallelogram-part"]}></div>

      {/* החלק האמצעי - המלבן עם הטקסט */}
      <div className={styles["rectangle-part"]}>{text}</div>

      {/* החלק השמאלי - המלבן עם הטקסט */}
      <div className={styles["parallelogram-part2"]}></div>
    </div>
  );
}
