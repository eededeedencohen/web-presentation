import React from "react";
import styles from "./CircularShadowImage.module.css";

function CircularShadowImage({
  src,
  alt = "image",
  color = "var(--purple)",
  size = "150px",
  offsetX = 8,
  offsetY = 10,
  spread = 1, // הוספנו פרמטר לעובי הצללית (ברירת מחדל 1px)
  className = "",
  style = {},
  ...restProps
}) {
  const dynamicVars = {
    "--img-color": color,
    "--img-size": size,
    "--offset-x": `${offsetX}px`,
    "--offset-y": `${offsetY}px`,
    "--shadow-spread": `${spread}px`, // משתנה חדש ל-CSS
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.circularImage} ${className}`}
      style={{ ...dynamicVars, ...style }}
      {...restProps}
    />
  );
}

export default CircularShadowImage;
