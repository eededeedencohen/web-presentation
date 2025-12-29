import React, { useState } from "react";
import styles from "./FinancialGrowthSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import StrategyChart from "../../../components/StrategyChart/StrategyChart";
import Modal from "../../../components/Modal/Modal";
// שימי לב: ודאי שהקובץ שיצרנו קודם שמור בשם GoalModalContent.js באותה תיקייה
import GoalModalContent from "./GoalModalContent";

function FinancialGrowthSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // שומר את סוג התוכן שנבחר (mainGoal, revenue, profit)
  const [selectedGoal, setSelectedGoal] = useState(null);

  // פונקציה לפתיחת המודל עם התוכן המתאים
  const handleOpenModal = (goalType) => {
    setSelectedGoal(goalType);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.slidePage}>
      {/* המודל עצמו - מקבל את התוכן בהתאם למה שנבחר */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GoalModalContent selectedGoal={selectedGoal} />
      </Modal>

      {/* אזור הכותרת - לחיצה פותחת את הסבר מטרת העל */}
      <div
        className={styles.headerArea}
        onClick={() => handleOpenModal("mainGoal")}
        style={{ cursor: "pointer" }} // הופך את העכבר ליד
      >
        <HeaderBlock
          text={"היעד המרכזי לשנת 2026: קפיצת מדרגה כלכלית וחברתית"}
          width="70%"
          fontSize="2.5rem"
        />
      </div>

      <div className={styles.cardsArea}>
        {/* כרטיס הכנסות */}
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

        {/* כרטיס רווח */}
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
