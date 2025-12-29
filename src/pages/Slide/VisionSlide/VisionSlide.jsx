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
import AnnualPlanDoc from "./AnnualPlanDoc.jsx"; // ייבוא חובה!

export default function VisionSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVision, setSelectedVision] = useState(null);
  
  // 1. הוספת סטייטים לניהול התצוגה (תקציר או מסמך מלא)
  const [viewMode, setViewMode] = useState("summary"); 
  const [targetSectionId, setTargetSectionId] = useState(null);

  const openModal = (vision) => {
    setSelectedVision(vision);
    setViewMode("summary"); // איפוס לתקציר בפתיחה
    setTargetSectionId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        setViewMode("summary"); // איפוס ביציאה
    }, 300);
  };

  // 2. פונקציה למעבר למסמך המלא
  const handleNavigateToDoc = (sectionId) => {
      setTargetSectionId(sectionId);
      setViewMode("fullDoc");
  };

  return (
    <div className={styles.slidePage}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        {/* 3. לוגיקה לבחירה מה להציג בתוך המודל */}
        {viewMode === "summary" ? (
            <ModalContant 
                selectedVision={selectedVision} 
                onNavigate={handleNavigateToDoc} // העברת הפונקציה לרכיב הבן
            />
        ) : (
            // תצוגת המסמך המלא עם כפתור חזרה
            <div style={{ height: '80vh', position: 'relative' }}>
                 <AnnualPlanDoc targetSectionId={targetSectionId} />
                 
                 <button 
                    onClick={() => setViewMode("summary")}
                    style={{
                        position: 'absolute', bottom: '20px', left: '20px', 
                        padding: '10px 20px', background: '#333', color: 'white', 
                        border: 'none', borderRadius: '30px', cursor: 'pointer', zIndex: 1000,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                 >
                    חזרה לתקציר
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