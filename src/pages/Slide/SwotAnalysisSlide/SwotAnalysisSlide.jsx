import React, { useState } from "react";
import styles from "./SwotAnalysisSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import SWOTCard from "../../../components/Cards/SWOTCard/SWOTCard";
// תמונות
import strengthsImage from "../../../assets/Images/image2.jpg";
import weaknessesImage from "../../../assets/Images/image9.png";
import opportunitiesImage from "../../../assets/Images/image6.png";
import threatsImage from "../../../assets/Images/image11.jpeg";

// מודלים וקרוסלה
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

const cardsData = [
  {
    id: 1,
    type: "weaknesses", // מזהה ללוגיקה
    title: "חולשות",
    points: ["כוח ייצור לא עסקי", "בירוקרטיה ארגונית", "מבנה פיננסי לא גמיש"],
    color: "var(--green)",
    iconName: "broken-link",
    image: weaknessesImage,
  },
  {
    id: 2,
    type: "strengths",
    title: "חוזקות",
    points: [
      "מסר חברתי ותרומה לקהילה",
      "ארגון מבוסס עם מוניטין",
      "תשתיות וצוות איכותי",
    ],
    color: "var(--purple)",
    iconName: "shield",
    image: strengthsImage,
  },
  {
    id: 3,
    type: "threats",
    title: "איומים",
    points: [
      'שוק ארגוני תחרותי ("אוקיינוס אדום")',
      "צורך בזמן חדירה לשוק",
      "חוסר בידול מול עמותות אחרות",
    ],
    color: "var(--green)",
    iconName: "thunder",
    image: threatsImage,
  },
  {
    id: 4,
    type: "opportunities",
    title: "הזדמנויות",
    points: [
      "פוטנציאל גדול בלתי ממומש",
      "שיווק ומיתוג לא ממומש",
      "רצון הציבור לתרום",
    ],
    color: "var(--purple)",
    iconName: "door",
    image: opportunitiesImage,
  },
];

function SwotAnalysisSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSwotPart, setSelectedSwotPart] = useState(null);

  // ניהול תצוגה
  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleCardClick = (type) => {
    setSelectedSwotPart(type);
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
      {/* מודל */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {viewMode === "summary" ? (
          <ModalContant
            selectedSwotPart={selectedSwotPart}
            onNavigate={handleNavigateToSource}
          />
        ) : (
          <div style={{ height: "85vh", width: "100%", position: "relative" }}>
            <MultiTableCarousel
              onClose={handleCloseModal}
              initialSlideId={targetSlideId}
              targetDocSectionId={targetSectionId}
            />
            <button
              onClick={() => setViewMode("summary")}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                zIndex: 200,
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
        <HeaderBlock
          text={"מבט מפוכח על המגרש:"}
          subtitle={"החוזקות, החולשות, ההזדמנויות והאיומים שלנו"}
          width="60%"
          fontSize="3rem"
          subFontSize="2rem"
          className={styles.header}
        />
      </div>

      <div className={styles.cardsArea}>
        <div className={styles.horizontalDivider}></div>
        <div className={styles.verticalDivider}></div>

        {/* חולשות */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick(cardsData[0].type)}
          style={{ cursor: "pointer" }}
        >
          <SWOTCard
            image={cardsData[0].image}
            icon={cardsData[0].iconName}
            color={cardsData[0].color}
            title={cardsData[0].title}
            content={cardsData[0].points}
          />
        </div>

        {/* חוזקות */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick(cardsData[1].type)}
          style={{ cursor: "pointer" }}
        >
          <SWOTCard
            image={cardsData[1].image}
            icon={cardsData[1].iconName}
            color={cardsData[1].color}
            title={cardsData[1].title}
            content={cardsData[1].points}
          />
        </div>

        {/* הזדמנויות */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick(cardsData[3].type)}
          style={{ cursor: "pointer" }}
        >
          <SWOTCard
            image={cardsData[3].image}
            icon={cardsData[3].iconName}
            color={cardsData[3].color}
            title={cardsData[3].title}
            content={cardsData[3].points}
          />
        </div>

        {/* איומים */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick(cardsData[2].type)}
          style={{ cursor: "pointer" }}
        >
          <SWOTCard
            image={cardsData[2].image}
            icon={cardsData[2].iconName}
            color={cardsData[2].color}
            title={cardsData[2].title}
            content={cardsData[2].points}
          />
        </div>
      </div>
    </div>
  );
}
export default SwotAnalysisSlide;
