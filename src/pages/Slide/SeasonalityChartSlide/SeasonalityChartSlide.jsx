import React from "react";
import styles from "./SeasonalityChartSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
// 1. ייבוא הרכיב החדש
import SeasonalityChart from "./SeasonalityChart";
import ResourceRequirementCard from "./ResourceRequirementCard";

function SeasonalityChartSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"צפי הכנסות כוללות 2026: שנת שיא"}
        />
      </div>

      {/* 2. שימוש ברכיב בתוך אזור הגרף */}
      <div className={styles.chartArea}>
        <SeasonalityChart />
      </div>

      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <ResourceRequirementCard
            iconName="season"
            title="מוצרים רב עונתיים"
            text="השקת מוצרים שאינם תלויים בחג, ליציבות בהכנסות"
            color="var(--green)"
          />
        </div>
        <div className={styles.cardWrapper}>

          <ResourceRequirementCard
            iconName="reminder"
            title="פעילות בחגים"
            text="מיקוד בערכות חג לחגים, בדגש על ראש השנה ופסח"
            color="var(--purple)"
          />
        </div>
      </div>
    </div>
  );
}
export default SeasonalityChartSlide;
