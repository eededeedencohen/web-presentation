import React from "react";
import styles from "./SWOTCard.module.css";
import IconSVG from "../../IconSVG/IconSVG";
import CircularShadowImage from "../../CircularShadowImage/CircularShadowImage.jsx";

function SWOTCard({ image, icon, color, title, content }) {
  // יצירת משתנה CSS דינמי לפי הפרופ color
  const dynamicStyle = {
    "--card-color": color,
  };

  return (
    <div className={styles.cardContainer} style={dynamicStyle}>
      <div className={styles.imageArea}>
          <div className={styles.imageWrapper}>
            <img
              src={image}
              alt={title}
              className={styles.circularShadowImage}
            />
          </div>
      </div>
      <div className={styles.titleArea}>
        <h2>{title}</h2>
      </div>

      {/* אזור התוכן שונה לרשימה */}
      <div className={styles.contentArea}>
        <ul className={styles.pointsList}>
          {/* בודק אם content הוא מערך לפני שמריץ map */}
          {Array.isArray(content) ? (
            content.map((point, index) => <li key={index}>{point}</li>)
          ) : (
            // גיבוי למקרה שזה מגיע כמחרוזת בודדת
            <li>{content}</li>
          )}
        </ul>
      </div>

      <div className={styles.iconArea}>
        <IconSVG
          iconName={icon}
          color={color}
          width="var(--icon-size)"
          height="var(--icon-size)"
        />
      </div>
    </div>
  );
}

export default SWOTCard;
