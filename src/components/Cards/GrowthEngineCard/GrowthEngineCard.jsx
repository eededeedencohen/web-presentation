import React from "react";
import styles from "./GrowthEngineCard.module.css";
import IconSVG from "../../IconSVG/IconSVG";
import CircularShadowImage from "../../CircularShadowImage/CircularShadowImage.jsx";

function GrowthEngineCard({ image, icon, color, title, content, summary }) {
  // יצירת משתנה CSS דינמי לפי הפרופ color
  const dynamicStyle = {
    "--card-color": color,
  };

  return (
    <div className={styles.cardContainer} style={dynamicStyle}>
      <div className={styles.imageArea}>
        <div className={styles.squareContent}>
          <div className={styles.imageWrapper}>
            <img
              src={image}
              alt={title}
              className={styles.circularShadowImage}
            />
          </div>
          {/* <CircularShadowImage
            src={image}
            color={color}
            size="80%"
            offsetX={0}
            offsetY={0}
            spread={7}
          /> */}
        </div>
      </div>
      <div className={styles.titleArea}>
        <h2>{title}</h2>
      </div>
      <div className={styles.contentArea}>
        <p>{content}</p>
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summary}>{summary}</div>
      </div>
      <div className={styles.iconArea}>
        <IconSVG
          iconName={icon} // שים לב לוודא שהשם הזה קיים במפרט האייקונים שלך
          color={color}
          width="var(--icon-size)"
          height="var(--icon-size)"
        />
      </div>
    </div>
  );
}

export default GrowthEngineCard;
