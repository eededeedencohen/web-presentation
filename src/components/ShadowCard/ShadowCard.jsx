import React from "react";
import styles from "./ShadowCard.module.css";

import DuelBorderCard from "../DuelBorderCard/DuelBorderCard.jsx";
import IconSVG from "../IconSVG/IconSVG.jsx";

function ShadowCard() {
  return (
    <DuelBorderCard color="var(--purple)" className={styles["card-container"]}>
      <IconSVG
        iconName="snowed-mountains"
        color="var(--purple)"
        width="80px"
        height="80px"
      />
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
