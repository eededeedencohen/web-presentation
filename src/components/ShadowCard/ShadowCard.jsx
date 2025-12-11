import React from "react";
import styles from "./ShadowCard.module.css";

import DuelBorderCard from "../DuelBorderCard/DuelBorderCard.jsx";

// טעינת SVG כקומפוננטה
import MountainsIcon from "../../assets/snowed-mountains.svg?react"; 

function ShadowCard() {
  return (
    <DuelBorderCard 
      color="var(--purple)"
    >
      <div className={styles["icon-wrapper"]}>
        <MountainsIcon className={styles["mountains-icon"]} />
      </div>

      <h2 className={styles["card-title"]}>כיבוש הפסגות</h2>

      <p className={styles["card-text"]}>
        מיקוד בקמפיינים המרכזיים
        <br />
        סביב החגים, המהווים את מנוע
        <br />
        ההכנסה העיקרי
      </p>
    </DuelBorderCard>
  );
}

export default ShadowCard;
