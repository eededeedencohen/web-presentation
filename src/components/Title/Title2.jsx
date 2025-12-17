// components/Title/Title2.jsxparallelogram
import React from "react";
import styles from "./Title2.module.css";
import GenerativeWave from "../GenerativeWave/GenerativeWave"; // וודא שהנתיב נכון

export default function Title2({ text }) {
  return (
    <div className={styles.parallelogram}>
      {/* שכבת הגלים - ממוקמת אבסולוטית ברקע */}
      <div className={styles.waveWrapper}>
        {/* הגדרתי רוחב וגובה 100% כדי שימלא את המקבילית */}
        {/* צבע אפור בהיר ושקוף מעט כדי שישתלב יפה עם הסגול */}
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
