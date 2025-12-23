import React from "react";
import styles from "./ImpactKpiCard.module.css";
import IconSVG from "../../../components/IconSVG/IconSVG";

function ImpactKpiCard({icon, title, content}) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconWrapper}>
        <IconSVG iconName={icon} height="70%" width="50%" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content} dir="rtl">{content}</div>
      </div>
    </div>
  );
}

export default ImpactKpiCard;
