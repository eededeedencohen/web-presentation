// pages/Slide/Slide.jsx
import React from "react";
import styles from "./Slide.module.css";

// ייבוא הבלוקים
import HeaderBlock from "../../components/HeaderBlock/HeaderBlock";
import MainBlock from "../../components/MainBlock/MainBlock";
import StrategyCard from "../../components/Cards/StrategyCard/StrategyCard";
import VisionCard from "../../components/Cards/VisionCard/VisionCard";

// ייבוא התמונה
import exampleImage from "../../assets/Images/image.png";

// הסרתי את SideBlock כפי שביקשת

export default function Slide() {
  return (
    <div className={styles.slidePage}>
      {/* 1. Header Area - 10% */}
      <div className={styles.headerArea}>
        <HeaderBlock />
      </div>

      {/* 2. Middle Area - 45% */}
      <div className={styles.middleArea}>
        {/* עטפתי ב-MainBlock כדי לשמור על העיצוב הפנימי, אבל אפשר להסיר אם לא צריך */}
        <MainBlock>
          {/* <ShadowCard /> */}
          <div className={styles.strategyCardWrapper}>
            <StrategyCard
              title="Our Strategy"
              text="Focusing on key campaigns around holidays, which are the main revenue drivers."
              iconName="snowed-mountains"
              color="var(--purple)"
              className={styles.strategyCardStyle}
            />
            <StrategyCard
              title="Our Strategy"
              text="Focusing on key campaigns around holidays, which are the main revenue drivers."
              iconName="snowed-mountains"
              color="var(--purple)"
              className={styles.strategyCardStyle}
            />
            <StrategyCard
              title="Our Strategy"
              text="Focusing on key campaigns around holidays, which are the main revenue drivers."
              iconName="snowed-mountains"
              color="var(--purple)"
              className={styles.strategyCardStyle}
            />
          </div>
        </MainBlock>
      </div>

      {/* 3. Bottom Area - 45% */}
      <div className={styles.bottomArea}>
        <MainBlock>
          <div className={styles.visionCardWrapper}>
            <VisionCard
              imageSrc={exampleImage}
              title="Our Vision"
              text="To be the leading company in our field."
              iconName="megaphone"
              color="var(--purple)"
              className={styles.visionCardStyle}
            />
            <VisionCard
              imageSrc={exampleImage}
              title="Our Vision"
              text="To be the leading company in our field."
              iconName="megaphone"
              color="var(--purple)"
              className={styles.visionCardStyle}
            />
            <VisionCard
              imageSrc={exampleImage}
              title="Our Vision"
              text="To be the leadגגגגג גגג גגג גגג גגג iגגג גגגגג גג גג גג ג גג גג גג גגג גג גג גג גג g company in our field."
              iconName="megaphone"
              color="var(--purple)"
              className={styles.visionCardStyle}
            />
          </div>
        </MainBlock>
      </div>
    </div>
  );
}
