import React from "react";
import styles from "./ExtendedTitle.module.css";
import GenerativeWave from "../GenerativeWave/GenerativeWave";

export default function ExtendedTitle({
  title,
  subtitle,
  width = "55%",
  fontSize = "3rem",
  subFontSize = "2rem",
}) {
  // יצירת אובייקט סטייל שמכיל את המשתנים
  const dynamicStyle = {
    "--p-width": width,
    "--p-font-size": fontSize,
    "--p-sub-font-size": subFontSize,
  };

  return (
    <div className={styles.parallelogram} style={dynamicStyle}>
      {/* שכבת הגלים */}
      <div className={styles.waveWrapper}>
        <GenerativeWave
          color="rgba(255, 255, 255, 1)"
          width="100%"
          height="100%"
        />
      </div>

      {/* קונטיינר לטקסט - מטפל ביישור הכותרות אחת מעל השנייה ובביטול ההטיה */}
      <div className={styles.textContainer}>
        <span className={styles.mainTitle}>{title}</span>
        {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
      </div>
    </div>
  );
}
