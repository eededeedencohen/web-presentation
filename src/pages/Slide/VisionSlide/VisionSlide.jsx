// pages/Slide/Slide.jsx
import React from "react";
import styles from "./VisionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import VisionQuote from "../../../components/VisionQuote/VisionQuote";
import VisionCard from "../../../components/Cards/VisionCard/VisionCard";
import image1 from "../../../assets/Images/image.png";
import image2 from "../../../assets/Images/image2.jpg";
import image3 from "../../../assets/Images/image3.jpg";
import image4 from "../../../assets/Images/image4.png";
import image5 from "../../../assets/Images/image5.png";

export default function VisionSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock 
        text={"החזון המנחה אותנו"}
        />
      </div>
      <div className={styles.middleArea}>
        <VisionQuote />
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.visionCardWrapper}>
          <VisionCard
            imageSrc={image5}
            title="מנוע חשיפה"
            text="צמצום הפער בין התעשייה המרשימה לתודעה הציבורית"
            iconName="megaphone"
            color="var(--purple)"
            className={styles.visionCardStyle}
          />
          <VisionCard
            imageSrc={image4}
            title="משמעות"
            text="הגדלת תחושת השייכות והיצרנות של אנשי העמותה"
            iconName="like"
            color="var(--purple)"
            className={styles.visionCardStyle}
          />
          <VisionCard
            imageSrc={image3}
            title="עצמאות כלכלית"
            text="יצירת מקור הכנסה יציב לצמצום התלות בתקציבים חיצוניים"
            iconName="plant-leaf"
            color="var(--purple)"
            className={styles.visionCardStyle}
          />
        </div>
      </div>
    </div>
  );
}
