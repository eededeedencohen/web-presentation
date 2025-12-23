import React from "react";
import styles from "./IconHeading.module.css";
import IconSVG from "../IconSVG/IconSVG";

function IconHeading({
  iconName,
  headingText,
  iconWidth = "",
  iconHeight = "",
  color = "",
  className = "",
  ...props
}) {
  const dynamicStyles = {
    "--color": color,
  };
  return (
    <div className={`${styles.labelWrapper} ${className}`} {...props}>
      <h1 className={styles.label} style={dynamicStyles}>
        {headingText}
      </h1>
      <IconSVG
        iconName={iconName}
        width={iconWidth}
        height={iconHeight}
        color={color}
        className={styles.iconWrapper}
      />
    </div>
  );
}
export default IconHeading;
