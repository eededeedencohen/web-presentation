import React from "react";
import styles from "./CostEfficiencySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import CostSavingCard from "../../../components/Cards/CostSavingCard/CostSavingCard";

function CostEfficiencySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"ניהול עלויות אסטרטגי:"}
          subtitle="הגדלת הרווחיות דרך מכרז ספקים"
          width="70%"
          fontSize="3rem"
          subFontSize="2.5rem"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          יצאנו למכרז הפקות דפוס מקיף מול 7 ספקים מובילים עבור 13 מוצרים
          מרכזיים. התוצאה: הוזלה משמעותית של עלויות הייצור.
        </h2>
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <CostSavingCard />
        </div>
        <div className={styles.cardWrapper}>
          <CostSavingCard />
        </div>
        <div className={styles.cardWrapper}>
          <CostSavingCard />
        </div>
      </div>
    </div>
  );
}
export default CostEfficiencySlide;
