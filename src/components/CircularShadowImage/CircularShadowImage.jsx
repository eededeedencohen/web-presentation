import React from "react";
import styles from "./CircularShadowImage.module.css";

function CircularShadowImage({
  src,
  alt = "image",
  color = "var(--purple)",
  size = "150px",
  offsetX = 8,
  offsetY = 10,
  spread = 1,
  className = "",
  style = {},
  ...restProps
}) {
  const dynamicVars = {
    "--img-color": color,
    "--img-size": size,
    "--offset-x": `${offsetX}px`,
    "--offset-y": `${offsetY}px`,
    "--shadow-spread": `${spread}px`,
  };

  return (
    <div
      className={`${styles.imageWrapper} ${className}`}
      style={{ ...dynamicVars, ...style }}
    >
      <img
        src={src}
        alt={alt}
        className={styles.circularImage}
        {...restProps}
      />
    </div>
  );
}

export default CircularShadowImage;
