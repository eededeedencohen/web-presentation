// pages/Slide/Slide.jsx
import React, { useState } from "react";
import styles from "./VisionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import VisionQuote from "../../../components/VisionQuote/VisionQuote";
import VisionCard from "../../../components/Cards/VisionCard/VisionCard";
import image3 from "../../../assets/Images/image7.png";
import image4 from "../../../assets/Images/image4.png";
import image5 from "../../../assets/Images/image5.png";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
export default function VisionSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVision, setSelectedVision] = useState(null);

  const openModal = (vision) => {
    setSelectedVision(vision);
    setIsModalOpen(true);
  };
  return (
    <div className={styles.slidePage}>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalContant selectedVision={selectedVision} />
      </Modal>
      <div className={styles.headerArea}>
        <HeaderBlock text={"החזון המנחה אותנו"} width="65%" fontSize="3rem" />
      </div>
      <div className={styles.middleArea} onClick={() => openModal("vision")}>
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
            onClick={() => openModal("exposure")}
          />
          <VisionCard
            imageSrc={image4}
            title="משמעות"
            text="הגדלת תחושת השייכות והיצרנות של אנשי העמותה"
            iconName="like"
            color="var(--purple)"
            className={styles.visionCardStyle}
            onClick={() => openModal("meaning")}
          />
          <VisionCard
            imageSrc={image3}
            title="עצמאות כלכלית"
            text="יצירת מקור הכנסה יציב לצמצום התלות בתקציבים חיצוניים"
            iconName="plant-leaf"
            color="var(--purple)"
            className={styles.visionCardStyle}
            onClick={() => openModal("financial")}
          />
        </div>
      </div>
    </div>
  );
}
