import React from "react";
import styles from "./BudgetSummarySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";

function BudgetSummarySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"האסטרטגיה שלנו לצמיחה"}
          width="70%"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.yearArea}><div className={styles.year}>שנת 2026</div></div>
      <div className={styles.chartArea}></div>
    </div>
  );
}
export default BudgetSummarySlide;
