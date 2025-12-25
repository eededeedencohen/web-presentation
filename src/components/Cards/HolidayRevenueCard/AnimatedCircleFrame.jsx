import React from "react";
import styles from "./AnimatedCircleFrame.module.css";

const AnimatedCircleFrame = ({
  image,
  alt,
  shadowColor = "rgb(72, 156, 167)", // צבע ברירת מחדל (הטורקיז המקורי)
  shadowSpread = "15px", // גודל ברירת מחדל
}) => {
  // יצירת אובייקט של משתני CSS דינמיים
  const dynamicStyles = {
    "--shadow-color": shadowColor,
    "--shadow-spread": shadowSpread,
  };

  return (
    <div className={styles.wrapper} style={dynamicStyles}>
      <img src={image} alt={alt} className={styles.image} />
    </div>
  );
};

export default AnimatedCircleFrame;
