import React, { useState } from "react";
import styles from "./VisionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import VisionQuote from "../../../components/VisionQuote/VisionQuote";
import VisionCard from "../../../components/Cards/VisionCard/VisionCard";
// וודא שהתמונות קיימות בנתיבים האלה:
import image3 from "../../../assets/Images/image7.png";
import image4 from "../../../assets/Images/image4.png";
import image5 from "../../../assets/Images/image5.png";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";

// שינוי: ייבוא הקרוסלה מהמיקום הנכון (3 תיקיות למעלה, ואז לתוך Modals/ModalTables)
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

export default function VisionSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVision, setSelectedVision] = useState(null);

  // viewMode יכול להיות: 'summary' (תקציר) או 'carousel' (צפייה מלאה בקרוסלה)
  const [viewMode, setViewMode] = useState("summary");
  const [targetSectionId, setTargetSectionId] = useState(null);

  const openModal = (vision) => {
    setSelectedVision(vision);
    setViewMode("summary"); // התחלה תמיד בתקציר
    setTargetSectionId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setViewMode("summary"); // איפוס המצב לאחר סגירה
    }, 300);
  };

  // פונקציה למעבר מהתקציר לקרוסלה המלאה
  const handleNavigateToDoc = (sectionId) => {
    setTargetSectionId(sectionId);
    setViewMode("carousel");
  };

  return (
    <div className={styles.slidePage}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* לוגיקה לבחירה מה להציג בתוך המודל */}
        {viewMode === "summary" ? (
          <ModalContant
            selectedVision={selectedVision}
            onNavigate={handleNavigateToDoc}
          />
        ) : (
          // תצוגת הקרוסלה המלאה (במקום סתם AnnualPlanDoc)
          <div style={{ height: "85vh", width: "100%", position: "relative" }}>
            <MultiTableCarousel
              onClose={handleCloseModal}
              initialSlideId={6} // מזהה השקופית של המסמך (AnnualPlanDoc)
              targetDocSectionId={targetSectionId} // מזהה הסעיף לגלילה
            />

            {/* כפתור "חזרה" שמאפשר לחזור לתקציר מבלי לצאת מהמודל */}
            <button
              onClick={() => setViewMode("summary")}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                zIndex: 200, // מעל הקרוסלה
                background: "#333",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "20px",
                cursor: "pointer",
                opacity: 0.9,
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              &larr; חזרה לתקציר
            </button>
          </div>
        )}
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
