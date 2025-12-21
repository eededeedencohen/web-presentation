import React from "react";
import styles from "./FinancialGrowthSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import StrategyChart from "../../../components/StrategyChart/StrategyChart";

function FinancialGrowthSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"האסטרטגיה שלנו לצמיחה"}
          width="70%"
          fontSize="3.5rem"
        />
      </div>

      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <StrategyChart
            icon="income"
            label="הכנסות"
            value25="305,000"
            value26="1,112,492"
            summaryPart1="מייצג צמיחה של"
            boldSummary="פי 3.6"
            summaryPart2="בהכנסות השנתיות."
           />
        </div>
        <div className={styles.cardWrapper}>
          <StrategyChart 
            icon="business-and-finance"
            label="רווח"
            value25="16,278"
            value26="415,150"
            summaryPart1="מייצג צמיחה של"
            boldSummary="פי 25.5"
            summaryPart2="ברווחיות השנתית."
          />
        </div>
      </div>
    </div>
  );
}
export default FinancialGrowthSlide;
