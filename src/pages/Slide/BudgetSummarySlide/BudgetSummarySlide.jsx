import React from "react";
import styles from "./BudgetSummarySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import IconSVG from "../../../components/IconSVG/IconSVG";

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
      <div className={styles.yearArea}>
        <div className={styles.year}>שנת 2026</div>
      </div>
      <div className={styles.chartArea}>
        <div className={styles.chartWrapper}>
          <div className={styles.income}>
            <div className={styles.incomeStick}>
              <div className={styles.incomeIcon}>
                <IconSVG
                  iconName="income"
                  color="white"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={styles.incomeLabel}>סך ההכנסות</div>
            </div>
          </div>
          <div className={styles.expenses}>
            <div className={styles.expensesStick1}>הוצאות</div>
            <div className={styles.expensesStick2}>הוצאות</div>
          </div>
          <div className={styles.profit}>
            <div className={styles.profitStick}>רווח</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetSummarySlide;
