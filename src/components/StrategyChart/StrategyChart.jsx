import React from "react";
import styles from "./StrategyChart.module.css";
import IconSVG from "../IconSVG/IconSVG";

function StrategyChart({
  icon,
  label,
  value25,
  value26,
  summaryPart1,
  boldSummary,
  summaryPart2,
}) {
  return (
    <div className={styles.strategyChartContainer}>
      <div className={styles.strategy25Area}>
        <div className={styles.strategy25Card}>
          <IconSVG
            iconName={icon || "income"}
            color="var(--purple)"
            width="80px"
            height="80px"
          />
          <h3>{label} 2025</h3>
          <h1>₪{value25}</h1>
        </div>
      </div>
      <div className={styles.strategy26Area}>
        <div className={styles.strategy26Card}>
          <IconSVG
            iconName={icon || "income"}
            color="white"
            width="100px"
            height="100px"
            className={styles.icon}
          />
          <h3>{label} 2026</h3>
          <h1>₪{value26}</h1>
        </div>
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summaryCard}>
          <h1>
            {summaryPart1} <strong>{boldSummary}</strong> {summaryPart2}
          </h1>
        </div>
      </div>

      <div className={styles.arrowWrapper}>
        <IconSVG
          iconName="up-right"
          color="var(--purple)"
          width="73%"
          height="73%"
        />
      </div>
      <div className={styles.arrowWrapper2}>
        <IconSVG iconName="up-right" color="white" width="74%" height="74%" />
      </div>
    </div>
  );
}
export default StrategyChart;
