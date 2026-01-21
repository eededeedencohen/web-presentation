import React, { useState } from "react";
import styles from "./MassMarketSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import MassProductCard from "../../../components/Cards/MassProductCard/MassProductCard";
import notebooksImage from "../../../assets/Images/new-notebooks.png";
import calendarImage from "../../../assets/Images/calendar.png";

import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

function MassMarketSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
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
          <ModalContant
            selectedItem={selectedItem}
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

      <div className={styles.headerArea}>
        <HeaderBlock
          text={"בניית הבסיס - הכנסה שוטפת של ₪500,000 ממוצרי MASS"}
          width="75%"
          fontSize="2.5rem"
          className={styles.header}
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          במקביל לפיקים של החגים, נבנה בסיס הכנסות יציב מפעילות שוטפת דרך מכירת
          מוצרי הדפוס והסטודיו החברתי שלנו.
        </h2>
      </div>
      <div className={styles.labelArea}>
        <h2 className={styles.labelText}> דוגמאות למוצרים ורווחיותם:</h2>
      </div>
      <div className={styles.cardsArea}>
        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal("notebooks")}
          style={{ cursor: "pointer" }}
        >
          <MassProductCard
            image={notebooksImage}
            name="מחברות A5"
            cost={15}
            price={29}
            profit={14}
            color="var(--purple)"
            imageOffsetY="-10%"
            imageSize="35%"
          />
        </div>
        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal("calendar")}
          style={{ cursor: "pointer" }}
        >
          <MassProductCard
            image={calendarImage}
            name="לוח שנה"
            cost={7}
            price={25}
            profit={18}
            color="var(--green)"
            imageOffsetY="5%"
            imageSize="55%"
          />
        </div>
      </div>
      <div className={styles.summaryArea}>
        <div
          className={styles.summaryCardArea}
          onClick={() => handleOpenModal("summary")}
          style={{ cursor: "pointer" }}
        >
          <p className={styles.summaryTitle}>ציון פוטנציאל:</p>
          <p className={styles.summaryContent}>
            פוטנציאל מכירת 200 לוחות שנה ל־20 ארגונים:
          </p>
          <p className={styles.summaryAmount}>100,000 ₪ הכנסה.</p>
        </div>
      </div>
    </div>
  );
}
export default MassMarketSlide;
