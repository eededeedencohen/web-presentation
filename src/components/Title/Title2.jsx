import React from "react";
import styles from "./Title2.module.css";
import GenerativeWave from "../GenerativeWave/GenerativeWave";

export default function Title2({ text, width = "55%", fontSize = "3rem" }) {
  // יצירת אובייקט סטייל שמכיל את המשתנה
  const dynamicStyle = {
    "--p-width": width,
    "--p-font-size": fontSize,
    // fontSize:
  };

  return (
    <div
      className={styles.parallelogram}
      style={dynamicStyle} // הזרקת המשתנה ל-CSS
    >
      {/* שכבת הגלים */}
      <div className={styles.waveWrapper}>
        <GenerativeWave
          color="rgba(255, 255, 255, 1)"
          width="100%"
          height="100%"
        />
      </div>

      {/* הטקסט */}
      <span className={styles.textContent}>{text}</span>
    </div>
  );
}
