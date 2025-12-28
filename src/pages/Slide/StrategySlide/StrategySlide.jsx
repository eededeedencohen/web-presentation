import react, { useState } from "react";
import styles from "./StrategySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock.jsx";
import StrategyCard from "../../../components/Cards/StrategyCard/StrategyCard.jsx";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";

export default function StrategySlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const handleCardClick = (strategyType) => {
    setSelectedStrategy(strategyType);
    setIsModalOpen(true);
  };
  return (
    <div className={styles.slidePage}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContant selectedStrategy={selectedStrategy} />
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
