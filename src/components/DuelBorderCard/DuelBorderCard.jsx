import React from "react";
import styles from "./DuelBorderCard.module.css";

function DuelBorderCard({
  children,
  color,             // חובה להעביר צבע (למשל: "purple" או "var(--purple)")
  width = "",   // דיפולט
  height = "",  // דיפולט
  backgroundColor = "white", // דיפולט
  style = {},        // אופציונלי: סטייל חיצוני נוסף
  className = "",    // אופציונלי: קלאס חיצוני נוסף
  ...restProps       // שאר הפרמטרים (כמו onClick וכו')
}) {

  // יצירת משתני ה-CSS לפי הפרמטרים שהתקבלו
  const dynamicVars = {
    "--card-color": color,
    "--card-height": height,
    "--card-bg": backgroundColor,
  };

  return (
    <div
      // 1. שילוב הקלאס מהמודול עם קלאס חיצוני (אם יש)
      className={`${styles.cardContainer} ${className}`}
      
      // 2. מיזוג המשתנים שלנו עם ה-style שהועבר מבחוץ
      style={{ ...dynamicVars, ...style }}
      
      // 3. העברת שאר הפרופס (כמו אירועים)
      {...restProps}
    >
      {children}
    </div>
  );
}

export default DuelBorderCard;