// pages/Slide/Slide.jsx
import React from "react";
import styles from "./Slide.module.css";

// ייבוא הבלוקים
import HeaderBlock from "../../components/HeaderBlock/HeaderBlock";
import MainBlock from "../../components/MainBlock/MainBlock";
import SideBlock from "../../components/SideBlock/SideBlock";
import ShadowCard from "../../components/ShadowCard/ShadowCard";

// ייבוא הרכיב המתוקן
import CircularShadowImage from "../../components/CircularShadowImage/CircularShadowImage";

// ייבוא התמונה (וודא שהנתיב הזה אכן נכון במבנה התיקיות שלך)
import exampleImage from "../../assets/Images/image.png";

export default function Slide() {
  return (
    <div className={styles.slidePage}>
      {/* אזור הכותרת */}
      <div className={styles.headerArea}>
        <HeaderBlock />
      </div>

      {/* אזור הצד */}
      <div className={styles.sideArea}>
        <SideBlock />
      </div>

      {/* האזור הראשי */}
      <div className={styles.mainArea}>
        <MainBlock>
          <ShadowCard />
          {/* שימוש ברכיב התמונה העגולה */}
          <CircularShadowImage
            src={exampleImage}
            alt="Example View"
            color="var(--purple)"
            size="200px"
            offsetX={6}
            offsetY={8}
            spread={9}
            className={styles.extraDesign}
            onClick={() => alert("Hi!")}
          />
        </MainBlock>
      </div>
    </div>
  );
}
