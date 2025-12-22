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
          fontSize="3.5rem"
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
            <div className={styles.expensesStick1}>
              <div className={styles.expensesStick1Label}>הוצאות משתנות</div>
              <div className={styles.amount1}>₪368,750</div>
            </div>
            <div className={styles.expensesStick2}>
              <div className={styles.expensesStick2Label}>הוצאות קבועות</div>
              <div className={styles.amount2}>₪328,592</div>
            </div>
          </div>
          <div className={styles.profit}>
            <div className={styles.profitStick}>
              <div className={styles.profitIcon}>
                <IconSVG
                  iconName="business-and-finance"
                  color="white"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={styles.profitLabel}>רווח נקי צפוי</div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.incomeAmount}>₪1,112,492</div>
        <div className={styles.expensesAmount}>₪697,342</div>
        <div className={styles.profitAmount}>₪415,150</div>
      </div>
    </div>
  );
}
export default BudgetSummarySlide;
