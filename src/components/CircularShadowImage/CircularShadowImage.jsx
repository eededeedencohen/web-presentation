import React from "react";
import styles from "./CircularShadowImage.module.css";

function CircularShadowImage({
  src,
  color = "var(--purple)",
  size = "150px",
  offsetX,
  offsetY,
  spread,
  style = {},
  ...restProps
}) {
  // פונקציית עזר למניעת הצמדת px למשתני CSS
  const formatValue = (val, fallbackVar) => {
    if (val === undefined) return fallbackVar;
    if (typeof val === "string" && val.startsWith("var")) return val;
    return `${val}px`;
  };

  const dynamicVars = {
    "--img-color": color,
    "--img-size": size,
    "--offset-x": formatValue(offsetX, "var(--dynamic-offsetX, 8px)"),
    "--offset-y": formatValue(offsetY, "var(--dynamic-offsetY, 10px)"),
    "--shadow-spread": formatValue(spread, "var(--dynamic-spread, 1px)"),
  };

  return (
    <div className={styles.container} style={{ ...dynamicVars, ...style }}>
      {/* זה העיגול שמשמש כצל */}
      <div className={styles.shadowCircle}></div>

      {/* זו התמונה המקורית */}
      <img src={src} className={styles.mainImage} {...restProps} />
    </div>
  );
}

export default CircularShadowImage;
