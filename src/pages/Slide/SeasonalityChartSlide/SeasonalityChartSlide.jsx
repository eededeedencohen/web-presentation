import React from "react";
import styles from "./SeasonalityChartSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import SeasonalityChart from "./SeasonalityChart";
import ResourceRequirementCard from "./ResourceRequirementCard";

function SeasonalityChartSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock text={"צפי הכנסות כוללות 2026: שנת שיא"} />
      </div>

      <div className={styles.chartArea}>
        <SeasonalityChart />
      </div>

      <div className={styles.cardsArea}>
        {/* כרטיס עליון - רחב יותר + טקסט מוקטן */}
        <div className={styles.cardWrapper}>
          <ResourceRequirementCard
            iconName="season"
            title="מוצרים רב עונתיים"
            // שינוי כאן: הפכנו את הטקסט ל-JSX והוספנו <br />
            text={
              <>
                השקת מוצרים שאינם תלויים בחג, ליציבות בהכנסות.
                <br />
                בסיס הכנסות חודשי מפעילות שוטפת- 41.6K₪
              </>
            }
            color="var(--green)"
            textSize="1.1vw"
          />
        </div>

        {/* כרטיס תחתון - רגיל */}
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
