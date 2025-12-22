import React from "react";
import styles from "./VisionCard.module.css";
import CircularShadowImage from "../../CircularShadowImage/CircularShadowImage";
import IconSVG from "../../IconSVG/IconSVG";

function VisionCard({
  imageSrc,
  title,
  text,
  iconName,
  color = "var(--purple)", // צבע ראשי לכל הכרטיס
  className = "",
  style = {},
}) {
  return (
    <div
      className={`${styles.cardContainer} ${className}`}
      style={{ "--card-color": color, ...style }}
    >
      {/* 1. החלק העליון - התמונה */}
      <div className={styles.imageWrapper}>
        {/* <CircularShadowImage
          src={imageSrc}
          color={color}
          size="var(--image-size)"
          offsetX={-3}
          offsetY={-3}
          spread={5}
        /> */}
        <img className={styles.circularImage} src={imageSrc} alt={title} />
      </div>

      {/* 2. החלק האמצעי - כותרת ואייקון (Flex Row) */}
      <div className={styles.headerRow}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.iconWrapper}>
          <IconSVG
            iconName={iconName}
            color={color}
            width="var(--icon-size)"
            height="var(--icon-size)"
            className={styles.icon}
          />
        </div>
      </div>

      {/* 3. החלק התחתון - תוכן */}
      <div className={styles.contentArea}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default VisionCard;
