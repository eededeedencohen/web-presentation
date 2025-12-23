import React from "react";
import styles from "./ImpactKpiCard.module.css";
import IconSVG from "../../../components/IconSVG/IconSVG";

function ImpactKpiCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconWrapper}>
        <IconSVG name="growth" height="70%" width="50%" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>צמיחה של פי</div>
        <div className={styles.content}>21 ברווחיות</div>
      </div>
    </div>
  );
}

export default ImpactKpiCard;
