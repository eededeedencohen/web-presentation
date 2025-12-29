import React, { useState } from "react";
import styles from "./ResourceNeedsSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import ResourceRequirementCard from "../../../components/Cards/ResourceRequirementCard/ResourceRequirementCard";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

const operationalNeedsData = [
  {
    id: 1,
    title: "פתרון אחסון נוסף:",
    description: "לתמיכה בגידול המלאי",
    icon: "warehouse",
    type: "storage", // מתאים ל-case "storage"
  },
  {
    id: 2,
    title: "איש מכירות טלפוני נוסף:",
    description:
      "להנעת מכירות החגים ומוצרי ה-Mass (הזדמנות הכנסה של 262,500 ₪)",
    icon: "call-center",
    type: "logistics", // מתאים ל-case "logistics" -> ManpowerContent
  },
  {
    id: 3,
    title: "התקשרות עם חברת הפצה",
    description: "לייעול ופתרון עלויות השילוח",
    icon: "fast-delivery",
    type: "distribution", // מתאים ל-case "distribution" -> LogisticsContent
  },
  {
    id: 4,
    title: "אחראי לוגיסטיקה",
    description: "חיוני לניהול ערוץ המכירות הקמעונאי (הזדמנות רווח של 175,000)",
    icon: "logistics-management",
    type: "technology", // מתאים ל-case "technology" -> ManpowerContent
  },
];
function ResourceNeedsSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState(null); // זיהוי איזה כרטיס נלחץ

  // משתנים לניהול התצוגה (תקציר או מסמך מלא)
  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6); // ברירת מחדל: מסמך (שקופית 6)
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleCardClick = (type) => {
    setSelectedNeed(type);
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
      {/* >>> הוסף את הבלוק הזה של המודל: */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {viewMode === "summary" ? (
          <ModalContant
            selectedNeed={selectedNeed}
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
      {/* <<< סיום הוספת המודל */}
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"המשאבים הנדרשים להצלחת התוכנית"}
          subtitle={
            "כדי לממש את הפוטנציאל ולהשיג את היעדים, נדרשים המשאבים הבאים:"
          }
          width="80%"
        />
      </div>
      <div className={styles.titlesArea}>
        <div className={styles.title1Area}>
          <h1>כוח אדם</h1>
        </div>
        <div className={styles.title2Area}>
          <h1>תפעול</h1>
        </div>
      </div>
      <div className={styles.cardsArea}>
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("logistics")}
          style={{ cursor: "pointer" }}
        >
          <ResourceRequirementCard
            iconName={operationalNeedsData[1].icon}
            title={operationalNeedsData[1].title}
            text={operationalNeedsData[1].description}
          />
        </div>
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("storage")}
          style={{ cursor: "pointer" }}
        >
          <ResourceRequirementCard
            iconName={operationalNeedsData[0].icon}
            title={operationalNeedsData[0].title}
            text={operationalNeedsData[0].description}
          />
        </div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("distribution")}
          style={{ cursor: "pointer" }}
        >
          <ResourceRequirementCard
            iconName={operationalNeedsData[3].icon}
            title={operationalNeedsData[3].title}
            text={operationalNeedsData[3].description}
          />
        </div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("technology")}
          style={{ cursor: "pointer" }}
        >
          <ResourceRequirementCard
            iconName={operationalNeedsData[2].icon}
            title={operationalNeedsData[2].title}
            text={operationalNeedsData[2].description}
          />
        </div>
      </div>
    </div>
  );
}
export default ResourceNeedsSlide;
