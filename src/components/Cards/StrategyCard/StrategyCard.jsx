import React from "react";
import styles from "./StrategyCard.module.css";

import DuelBorderCard from "../../DuelBorderCard/DuelBorderCard"
import IconSVG from "../../IconSVG/IconSVG";

function StrategyCard({
  iconName,
  title,
  text,
  color = "var(--purple)",
  width = "220px",
  height = "50%",
  backgroundColor = "white",
  offsetX = -12,
  offsetY = 15,
  shadowSpread = 5,
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
      offsetX={offsetX}
      offsetY={offsetY}
      shadowSpread={shadowSpread}
      className={`${styles["strategy-card-container"]} ${className}`}
      style={style}
      {...restProps}
    >
      <IconSVG iconName={iconName} color={color} width="80px" height="80px" />
      <h2 className={styles["strategy-card-title"]}>{title}</h2>
      <p className={styles["strategy-card-text"]}>{text}</p>
    </DuelBorderCard>
  );
}

export default StrategyCard;
