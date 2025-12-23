import React from "react";
import styles from "./ImpactSummarySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";

function ImpactSummarySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"כיבוש הפסגות - מיקוד במכירות שיא בחגים"}
          width="70%"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>Card Wrapper</div>
        <div className={styles.cardWrapper}>Card Wrapper</div>

        <div className={styles.cardWrapper}>Card Wrapper</div>
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summaryCardArea}>
          <div className={styles.summaryImageWrapper}>
            Summary Image Wrapper
          </div>
          <div className={styles.summarySentenceWrapper}>
            {" "}
            Summary Sentence Wrapper
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImpactSummarySlide;
