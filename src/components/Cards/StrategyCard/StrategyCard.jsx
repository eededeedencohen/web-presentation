import React from "react";
import styles from "./StrategyCard.module.css";

import DuelBorderCard from "../../DuelBorderCard/DuelBorderCard";
import IconSVG from "../../IconSVG/IconSVG";

function StrategyCard({
  iconName,
  title,
  text,
  color = "var(--green)",
  width = "var(--card-width)",
  height = "80%",
  backgroundColor = "white",
  className = "",
  style = {},
  ...restProps
}) {
  return (
    <DuelBorderCard
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      className={`${styles["strategy-card-container"]} ${className}`}
      style={style}
      {...restProps}
    >
      {/* 1. האייקון נשאר עצמאי למעלה */}
      <div className={styles["icon-wrapper"]}>
        <IconSVG
          iconName={iconName}
          color={"var(--purple)"}
          width="var(--icon-size)"
          height="var(--icon-size)"
          className={styles["strategy-card-icon"]}
        />
      </div>
      {/* 2. עטפנו את הטקסט ב-div כדי לשלוט במיקום שלו בנפרד מהאייקון */}
      <div className={styles["card-content"]}>
        <h2 className={styles["strategy-card-title"]}>{title}</h2>
        <p className={styles["strategy-card-text"]}>{text}</p>
      </div>
    </DuelBorderCard>
  );
}

export default StrategyCard;
