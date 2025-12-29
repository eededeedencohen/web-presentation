import React from "react";
import styles from "./ResourceRequirementCard.module.css";
import IconSVG from "../../../components/IconSVG/IconSVG";

function ResourceRequirementCard({
  title,
  text,
  iconName,
  color,
  className = "",
  style = {},
  textSize, // 1. הוספת משתנה חדש לגודל הטקסט
}) {
  const dynamicVars = {
    "--dynamic-color": color || "var(--green)",
    ...style,
  };

  return (
    <div className={`${styles.cardContainer} ${className}`} style={dynamicVars}>
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
        {/* 2. שימוש במשתנה כאן כדי לשלוט רק על גודל הטקסט */}
        <p className={styles.text} style={{ fontSize: textSize }}>
          {text ||
            "תיאור מפורט של דרישת המשאב, כולל הסבר על החשיבות שלו להצלחת התוכנית."}
        </p>
      </div>
    </div>
  );
}

export default ResourceRequirementCard;
