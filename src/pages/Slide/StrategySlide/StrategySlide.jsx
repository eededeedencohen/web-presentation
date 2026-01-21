import React, { useState } from "react";
import styles from "./StrategySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock.jsx";
import StrategyCard from "../../../components/Cards/StrategyCard/StrategyCard.jsx";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";

// ייבוא הקרוסלה החכמה (הצופה)
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

export default function StrategySlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // ניהול תצוגה: 'summary' או 'carousel'
  const [viewMode, setViewMode] = useState("summary");

  // פרמטרים לקרוסלה (נפתח כברירת מחדל במסמך - שקופית 6)
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleCardClick = (strategyType) => {
    setSelectedStrategy(strategyType);
    setViewMode("summary");
    setTargetSectionId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setViewMode("summary");
    }, 300);
  };

  // פונקציה למעבר למסמך המלא
  const handleNavigateToSource = (slideId, sectionId = null) => {
    setTargetSlideId(slideId);
    setTargetSectionId(sectionId);
    setViewMode("carousel");
  };

  return (
    <div className={styles.slidePage}>
      {/* המודל */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {viewMode === "summary" ? (
          // תצוגת התקציר
          <ModalContant
            selectedStrategy={selectedStrategy}
            onNavigate={handleNavigateToSource}
          />
        ) : (
          // תצוגת הקרוסלה המלאה (המסמך)
          <MultiTableCarousel
            onClose={handleCloseModal}
            onBackToSummary={() => setViewMode("summary")}
            initialSlideId={targetSlideId}
            targetDocSectionId={targetSectionId}
          />
        )}
      </Modal>

      <div className={styles.headerArea}>
        <HeaderBlock
          text={"האסטרטגיה שלנו לצמיחה: שלושה עמודי תווך"}
          width="70%"
          fontSize="3rem"
        />
      </div>

      <div className={styles.cardsArea}>
        <StrategyCard
          iconName={"snowed-mountains"}
          title={"כיבוש הפסגות"}
          text={
            "מיקוד בקמפיינים המרכזיים סביב החגים, המהווים את מנוע ההכנסה העיקרי"
          }
          onClick={() => handleCardClick("peaks")}
        />
        <StrategyCard
          iconName={"plant-leaf"}
          title={"צמיחה משולבת"}
          text={
            "מינוף מנוע צמיחה חברתי-עסקי המחבר בין יצירה ומשמעות לבין קיימות כלכלית בה האדם עם המוגבלות הוא שותף מלא"
          }
          onClick={() => handleCardClick("integrated")}
        />
        <StrategyCard
          iconName={"perspective-icon"}
          title={"בניית הבסיס"}
          text={
            "יצירת הכנסה שנתית יציבה ורציפה מפעילות שוטפת ומוצרי Mass Market"
          }
          onClick={() => handleCardClick("base")}
        />
      </div>
    </div>
  );
}
