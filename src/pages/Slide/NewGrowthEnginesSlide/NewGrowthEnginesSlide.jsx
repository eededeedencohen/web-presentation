// import React from "react";
// import styles from "./NewGrowthEnginesSlide.module.css";
// import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
// import GrowthEngineCard from "../../../components/Cards/GrowthEngineCard/GrowthEngineCard";
// import exampleImage from "../../../assets/Images/image.png";
// import socialImage from "../../../assets/Images/social.png";
// // להקה
// import bandImage from "../../../assets/Images/image8.png";
// // מיזמי חוויה
// import experienceImage from "../../../assets/Images/life-day.png";
// // מכירות קמעונאיות
// import retailImage from "../../../assets/Images/image12.png";

// const cardsData = [
//   {
//     id: 1,
//     title: "מכירות קמעונאיות (B2B)",
//     content: "הכנסת מוצרי המותג לרשתות שיווק וחנויות.",
//     summary: "פוטנציאל רווח שנתי: ₪175,000",
//     color: "var(--purple)", // או הקוד הסגול שלך
//     iconName: "retail", // שם האייקון המתאים
//     image:  retailImage,
//   },
//   {
//     id: 2,
//     title: '"התו החברתי"',
//     content: "תו שמוענק לארגונים המכובד רק בעסקים חברתיים.",
//     summary: "פוטנציאל רווח שנתי: ₪250,000",
//     color: "var(--green)", // צבע הטורקיז
//     iconName: "favorite",
//     image: socialImage,
//   },
//   {
//     id: 3,
//     title: 'מיזמי חוויה ("יום בחיי")',
//     content: "הרצאות וסיורים במרכזי העמותה ככלי לחשיפה ומכירה.",
//     summary: "פוטנציאל רווח שנתי: ₪80,000",
//     color: "var(--purple)",
//     iconName: "public-speaking",
//     image: experienceImage,
//   },
//   {
//     id: 4,
//     title: 'להקת שק"ל',
//     content: "הופעה של להקה מקצועית באירועי חברה.",
//     summary: "פוטנציאל רווח שנתי: ₪35,000",
//     color: "var(--green)",
//     iconName: "microphone",
//     image: bandImage,
//   },
// ];

// function NewGrowthEnginesSlide() {
//   return (
//     <div className={styles.slidePage}>
//       <div className={styles.headerArea}>
//         <HeaderBlock
//           text={"צמיחה משלבת"}
//           subtitle="מנועי צמיחה לקיימות ארוכת טווח"
//           width="60%"
//           fontSize="3rem"
//           subFontSize="2.5rem"
//           className={styles.header}
//         />
//       </div>
//       <div className={styles.subtitleArea}>
//         <h2 className={styles.subtitleText}>
//           בנוסף לחיזוק הפעילות הקיימת, אנו מפתחים אפיקי הכנסה חדשים שיבטיחו את
//           צמיחתנו בשנים הבאות.
//         </h2>
//       </div>

//       {/* שינוי: cardsArea הוא עכשיו position: relative */}
//       <div className={styles.cardsArea}>
//         {/* קו הפרדה אופקי */}
//         <div className={styles.horizontalDivider}></div>
//         {/* קו הפרדה אנכי */}
//         <div className={styles.verticalDivider}></div>

//         <div className={styles.cardWrapper}>
//           <GrowthEngineCard
//             image={cardsData[1].image}
//             icon={cardsData[1].iconName}
//             color={cardsData[1].color}
//             title={cardsData[1].title}
//             content={cardsData[1].content}
//             summary={cardsData[1].summary}
//           />
//         </div>
//         <div className={styles.cardWrapper}>
//           <GrowthEngineCard
//             image={cardsData[0].image}
//             icon={cardsData[0].iconName}
//             color={cardsData[0].color}
//             title={cardsData[0].title}
//             content={cardsData[0].content}
//             summary={cardsData[0].summary}
//           />
//         </div>

//         <div className={styles.cardWrapper}>
//           <GrowthEngineCard
//             image={cardsData[3].image}
//             icon={cardsData[3].iconName}
//             color={cardsData[3].color}
//             title={cardsData[3].title}
//             content={cardsData[3].content}
//             summary={cardsData[3].summary}
//           />
//         </div>

//         <div className={styles.cardWrapper}>
//           <GrowthEngineCard
//             image={cardsData[2].image}
//             icon={cardsData[2].iconName}
//             color={cardsData[2].color}
//             title={cardsData[2].title}
//             content={cardsData[2].content}
//             summary={cardsData[2].summary}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default NewGrowthEnginesSlide;

import React, { useState } from "react";
import styles from "./NewGrowthEnginesSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import GrowthEngineCard from "../../../components/Cards/GrowthEngineCard/GrowthEngineCard";
import exampleImage from "../../../assets/Images/image.png";
import socialImage from "../../../assets/Images/social.png";
import bandImage from "../../../assets/Images/image8.png";
import experienceImage from "../../../assets/Images/life-day.png";
import retailImage from "../../../assets/Images/image12.png";

import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

const cardsData = [
  {
    id: 1,
    type: "retail",
    title: "מכירות קמעונאיות (B2B)",
    content: "הכנסת מוצרי המותג לרשתות שיווק וחנויות.",
    summary: "פוטנציאל רווח שנתי: ₪175,000",
    color: "var(--purple)",
    iconName: "retail",
    image: retailImage,
  },
  {
    id: 2,
    type: "social",
    title: '"התו החברתי"',
    content: "תו שמוענק לארגונים המכובד רק בעסקים חברתיים.",
    summary: "פוטנציאל רווח שנתי: ₪250,000",
    color: "var(--green)",
    iconName: "favorite",
    image: socialImage,
  },
  {
    id: 3,
    type: "experience",
    title: 'מיזמי חוויה ("יום בחיי")',
    content: "הרצאות וסיורים במרכזי העמותה ככלי לחשיפה ומכירה.",
    summary: "פוטנציאל רווח שנתי: ₪80,000",
    color: "var(--purple)",
    iconName: "public-speaking",
    image: experienceImage,
  },
  {
    id: 4,
    type: "band",
    title: 'להקת שק"ל',
    content: "הופעה של להקה מקצועית באירועי חברה.",
    summary: "פוטנציאל רווח שנתי: ₪35,000",
    color: "var(--green)",
    iconName: "microphone",
    image: bandImage,
  },
];

function NewGrowthEnginesSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState(null);

  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleOpenModal = (type) => {
    setSelectedEngine(type);
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
            selectedEngine={selectedEngine}
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
          text={"צמיחה משלבת"}
          subtitle="מנועי צמיחה לקיימות ארוכת טווח"
          width="60%"
          fontSize="3rem"
          subFontSize="2.5rem"
          className={styles.header}
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          בנוסף לחיזוק הפעילות הקיימת, אנו מפתחים אפיקי הכנסה חדשים שיבטיחו את
          צמיחתנו בשנים הבאות.
        </h2>
      </div>

      <div className={styles.cardsArea}>
        <div className={styles.horizontalDivider}></div>
        <div className={styles.verticalDivider}></div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal(cardsData[1].type)}
          style={{ cursor: "pointer" }}
        >
          <GrowthEngineCard
            image={cardsData[1].image}
            icon={cardsData[1].iconName}
            color={cardsData[1].color}
            title={cardsData[1].title}
            content={cardsData[1].content}
            summary={cardsData[1].summary}
          />
        </div>
        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal(cardsData[0].type)}
          style={{ cursor: "pointer" }}
        >
          <GrowthEngineCard
            image={cardsData[0].image}
            icon={cardsData[0].iconName}
            color={cardsData[0].color}
            title={cardsData[0].title}
            content={cardsData[0].content}
            summary={cardsData[0].summary}
          />
        </div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal(cardsData[3].type)}
          style={{ cursor: "pointer" }}
        >
          <GrowthEngineCard
            image={cardsData[3].image}
            icon={cardsData[3].iconName}
            color={cardsData[3].color}
            title={cardsData[3].title}
            content={cardsData[3].content}
            summary={cardsData[3].summary}
          />
        </div>

        <div
          className={styles.cardWrapper}
          onClick={() => handleOpenModal(cardsData[2].type)}
          style={{ cursor: "pointer" }}
        >
          <GrowthEngineCard
            image={cardsData[2].image}
            icon={cardsData[2].iconName}
            color={cardsData[2].color}
            title={cardsData[2].title}
            content={cardsData[2].content}
            summary={cardsData[2].summary}
          />
        </div>
      </div>
    </div>
  );
}
export default NewGrowthEnginesSlide;
