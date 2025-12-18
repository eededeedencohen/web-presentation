import React from "react";
import styles from "./SocialLabelSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";

function SocialLabelSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"כיבוש הפסגות - מיקוד במכירות שיא בחגים"}
          width="70%"
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
export default SocialLabelSlide;
