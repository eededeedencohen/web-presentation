import React from "react";
import styles from "./ResourceRequirementCard.module.css";
import IconSVG from "../../IconSVG/IconSVG";

function ResourceRequirementCard({ title, text, iconName, className = "" }) {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <div className={styles.iconArea}>
        <IconSVG
          iconName={iconName || "logistics-management"}
          width="80%"
          height="80%"
          color="var(--purple)"
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
