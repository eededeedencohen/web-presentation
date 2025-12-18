import React from "react";
import styles from "./CostEfficiencySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";

function CostEfficiencySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"ניהול עלויות אסטרטגי:\nהגדלת הרווחיות דרך מכרז ספקים"}
          subtitle="הגדלת הרווחיות דרך מכרז ספקים"
          width="85%"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: "₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>Card Wrapper</div>
        <div className={styles.cardWrapper}>Card Wrapper</div>
        <div className={styles.cardWrapper}>Card Wrapper</div>
        <div className={styles.cardWrapper}>Card Wrapper</div>
      </div>
    </div>
  );
}
export default CostEfficiencySlide;
