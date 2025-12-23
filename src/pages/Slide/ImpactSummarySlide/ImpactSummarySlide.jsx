import React from "react";
import styles from "./ImpactSummarySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import SummaryImage from "../../../assets/Images/summary.png";
import ImpactKpiCard from "../../../components/Cards/ImpactKpiCard/ImpactKpiCard";

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
      צמיחה של פי 21 ברווחיות
      <div className={styles.cardsArea}>
        <ImpactKpiCard />
        <ImpactKpiCard />
        <ImpactKpiCard />
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summaryCardArea}>
          <div className={styles.summaryImageWrapper}>
            <img src={SummaryImage} alt="Summary" />
          </div>
          <div className={styles.summarySentenceWrapper}>
            <p>
              תוכנית 2026 היא המנוע שלנו להעצמת אמני שק"ל, להרחבת ההשפעה החברתית
              שלנו, ולבניית עתיד כלכלי עצמאי. כל שקל של רווח הוא צעד נוסף במימוש
              החזון המשותף שלנו.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImpactSummarySlide;
