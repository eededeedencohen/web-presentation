import React from "react";
import styles from "./ResourceRequirementCard.module.css";
import IconSVG from "../../../components/IconSVG/IconSVG";

function ResourceRequirementCard({
  title,
  text,
  iconName,
  color, // הצבע שמועבר מבחוץ
  className = "",
  style = {},
}) {
  // יצירת משתנה CSS דינמי
  // אם לא הועבר צבע, נשתמש בברירת מחדל (למשל ירוק או סגול, לפי העדפתך)
  const dynamicVars = {
    "--dynamic-color": color || "var(--green)",
    ...style,
  };

  return (
    <div
      className={`${styles.cardContainer} ${className}`}
      style={dynamicVars} // העברת המשתנה ל-CSS
    >
      <div className={styles.iconArea}>
        <IconSVG
          iconName={iconName || "logistics-management"}
          width="80%"
          height="80%"
          color={color || "var(--purple)"}
        />
      </div>
      <div className={styles.contentArea}>
        <h2 className={styles.title}>{title || "כותרת דרישת המשאב"}</h2>
        <p className={styles.text}>
          {text ||
            "תיאור מפורט של דרישת המשאב, כולל הסבר על החשיבות שלו להצלחת התוכנית."}
        </p>
      </div>
    </div>
  );
}

export default ResourceRequirementCard;
