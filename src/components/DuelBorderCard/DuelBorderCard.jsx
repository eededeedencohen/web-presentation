import React from "react";
import styles from "./DuelBorderCard.module.css";

function DuelBorderCard({
  children,
  color,             // חובה להעביר צבע (למשל: "purple" או "var(--purple)")
  width = "200px",   // דיפולט
  height = "250px",  // דיפולט
  backgroundColor = "white", // דיפולט
  offsetX = 8,       // דיפולט
  offsetY = 10,      // דיפולט
  shadowSpread = 1,  // דיפולט: עובי הצללית
  style = {},        // אופציונלי: סטייל חיצוני נוסף
  className = "",    // אופציונלי: קלאס חיצוני נוסף
  ...restProps       // שאר הפרמטרים (כמו onClick וכו')
}) {

  // יצירת משתני ה-CSS לפי הפרמטרים שהתקבלו
  const dynamicVars = {
    "--card-color": color,
    "--card-width": width,
    "--card-height": height,
    "--card-bg": backgroundColor,
    "--offset-x": `${offsetX}px`,
    "--offset-y": `${offsetY}px`,
    "--shadow-spread": `${shadowSpread}px`,
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