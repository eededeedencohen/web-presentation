import React, { useState } from "react";
import styles from "./FinancialGrowthSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import StrategyChart from "../../../components/StrategyChart/StrategyChart";
import Modal from "../../../components/Modal/Modal";
import GoalModalContent from "./GoalModalContent";
// ייבוא הקרוסלה
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

function FinancialGrowthSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  // ניהול תצוגה
  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(1);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleOpenModal = (goalType) => {
    setSelectedGoal(goalType);
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

  const handleNavigateToSource = (slideId, sectionId = null) => {
    setTargetSlideId(slideId);
    setTargetSectionId(sectionId);
    setViewMode("carousel");
  };

  return (
    <div className={styles.slidePage}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {viewMode === "summary" ? (
          <GoalModalContent
            selectedGoal={selectedGoal}
            onNavigate={handleNavigateToSource}
          />
        ) : (
          <MultiTableCarousel
            onClose={handleCloseModal}
            onBackToSummary={() => setViewMode("summary")}
            initialSlideId={targetSlideId}
            targetDocSectionId={targetSectionId}
          />
        )}
      </Modal>

      <div
        className={styles.headerArea}
        onClick={() => handleOpenModal("mainGoal")}
        style={{ cursor: "pointer" }}
      >
        <HeaderBlock
          text={"היעד המרכזי לשנת 2026: קפיצת מדרגה כלכלית וחברתית"}
          width="70%"
          fontSize="2.5rem"
        />
      </div>

      <div className={styles.cardsArea}>
        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal("revenue")}
          style={{ cursor: "pointer" }}
        >
          <StrategyChart
            icon="income"
            label="הכנסות"
            value25="305,000"
            value26="1,112,492"
            summaryPart1="מייצג צמיחה של"
            boldSummary="פי 3.6"
            summaryPart2="בהכנסות השנתיות."
          />
        </div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal("profit")}
          style={{ cursor: "pointer" }}
        >
          <StrategyChart
            icon="business-and-finance"
            label="רווח"
            value25="16,278"
            value26="283,900"
            summaryPart1="מייצג צמיחה של"
            boldSummary="פי 17.4"
            summaryPart2="ברווחיות השנתית."
          />
        </div>
      </div>
    </div>
  );
}

export default FinancialGrowthSlide;
