import react, { useState } from "react";
import styles from "./SocialLabelSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import IconSVG from "../../../components/IconSVG/IconSVG";
import ESGConceptCard from "../../../components/Cards/ESGConceptCard/ESGConceptCard.jsx";
import ESGPotencialCard from "../../../components/Cards/ESGPotencialCard/ESGPotencialCard.jsx";
import socialImage from "../../../assets/Images/social-card.png";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

function SocialLabelSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ניהול תצוגה
  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleOpenModal = () => {
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
          <ModalContant onNavigate={handleNavigateToSource} />
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
          text={
            "חדשנות עם ערך: 'התו החברתי' ככלי לחיזוק עסקים ועמידה ביעדי ESG"
          }
          width="70%"
          fontSize="2rem"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: "₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.potencialCardWrapper}>
          <ESGConceptCard />
        </div>
        <div className={styles.conceptCardWrapper}>
          <ESGPotencialCard />
        </div>
      </div>
      <div className={styles.imageArea} onClick={handleOpenModal}>
        <div className={styles.imageWrapper}>
          <img src={socialImage} alt="Products" />
        </div>
      </div>
    </div>
  );
}
export default SocialLabelSlide;
