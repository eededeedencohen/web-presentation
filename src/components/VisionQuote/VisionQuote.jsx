// components/VisionQuote/VisionQuote.jsx
import React from "react";
import styles from "./VisionQuote.module.css";
import IconSVG from "../IconSVG/IconSVG"; // וודא שהנתיב נכון למיקום הקובץ

const VisionQuote = () => {
  const iconColor = "var(--green)";
  const iconSize = "var(--icon-size)"; // גודל תואם ל-8rem שהיה קודם

  return (
    <div className={styles.quoteWrapper}>
      {/* מרכאות עליונות ימניות */}
      <IconSVG
        iconName="quote"
        color={iconColor}
        width={iconSize}
        height={iconSize}
        className={styles.quoteIconTop}
      />

      <div className={styles.textContainer}>
        {/* קו עליון ושמאלי */}
        <div className={styles.bracketTopLeft}></div>

        <p className={styles.quoteText}>
          חנויות המתנות של עמותת שק"ל שואפת להיות בית יוצר מרכזי ופורץ דרך,
          המשקף לעולם את הכישרון, היצירתיות והעוצמה האנושית של אמני ויוצרי שק"ל
          - אנשים עם מוגבלויות מתוך תשוקה אמיתית ליצירה
        </p>

        {/* קו תחתון וימני */}
        <div className={styles.bracketBottomRight}></div>
      </div>

      {/* מרכאות תחתונות שמאליות */}
      <IconSVG
        iconName="quote"
        color={iconColor}
        width={iconSize}
        height={iconSize}
        className={styles.quoteIconBottom}
      />
    </div>
  );
};

export default VisionQuote;
