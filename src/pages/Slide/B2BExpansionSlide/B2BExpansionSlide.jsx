// import React from "react";
// import styles from "./B2BExpansionSlide.module.css";
// import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
// import IconSVG from "../../../components/IconSVG/IconSVG";
// import B2BFinancialPotentialCard from "../../../components/Cards/B2BFinancialPotentialCard/B2BFinancialPotentialCard.jsx";
// import productsImage from "../../../assets/Images/products.png";

// function B2BExpansionSlide() {
//   return (
//     <div className={styles.slidePage}>
//       <div className={styles.headerArea}>
//         <HeaderBlock
//           text={"הזדמנות אסטרטגית: כניסה לשוק הקמעונאי (B2B)"}
//           width="70%"
//           className={styles.header} // TO DO: Remove this class at the end
//         />
//       </div>
//       <div className={styles.subtitleArea}>
//         יעד הכנסות כולל מהחגים: "₪662,500
//       </div>
//       <div className={styles.cardsArea}>
//         <div className={styles.modelCardWrapper}>
//           <div className={styles.contentWrapper}>
//             <h1 className={styles.label}>המודל</h1>
//             <div className={styles.contentText}>
//               מכירת מוצרים ממותגים של 'שק"ל לאהוב' במחיר סיטונאי לרשתות מובילות
//               (דוגמת רמי לוי, שופרסל, חנן) להפצה לצרכן הסופי.
//             </div>
//           </div>
//           <div className={styles.iconWrapper}>
//             <IconSVG
//               iconName="partnership"
//               width="var(--icon-size)"
//               height="var(--icon-size)"
//               color="white"
//               className="icon"
//             />
//           </div>
//         </div>
//         <div className={styles.potencialCardWrapper}>
//           <B2BFinancialPotentialCard />
//         </div>
//       </div>
//       <div className={styles.imageArea}>
//         <div className={styles.imageWrapper}>
//           <img src={productsImage} alt="Products" />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default B2BExpansionSlide;

import React, { useState } from "react";
import styles from "./B2BExpansionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import IconSVG from "../../../components/IconSVG/IconSVG";
import B2BFinancialPotentialCard from "../../../components/Cards/B2BFinancialPotentialCard/B2BFinancialPotentialCard.jsx";
import productsImage from "../../../assets/Images/products.png";

import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

function B2BExpansionSlide() {
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
      {/* מודל */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {viewMode === "summary" ? (
          <ModalContant onNavigate={handleNavigateToSource} />
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

      <div
        className={styles.headerArea}
        onClick={handleOpenModal}
        style={{ cursor: "pointer" }}
      >
        <HeaderBlock
          text={"הזדמנות אסטרטגית: כניסה לשוק הקמעונאי (B2B)"}
          width="75%"
          fontSize="2.8rem"
          className={styles.header}
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: ₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div
          className={styles.modelCardWrapper}
          onClick={handleOpenModal}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.contentWrapper}>
            <h1 className={styles.label}>המודל</h1>
            <div className={styles.contentText}>
              מכירת מוצרים ממותגים של 'שק"ל לאהוב' במחיר סיטונאי לרשתות מובילות
              (דוגמת רמי לוי, שופרסל, חנן) להפצה לצרכן הסופי.
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <IconSVG
              iconName="partnership"
              width="var(--icon-size)"
              height="var(--icon-size)"
              color="white"
              className="icon"
            />
          </div>
        </div>
        <div
          className={styles.potencialCardWrapper}
          onClick={handleOpenModal}
          style={{ cursor: "pointer" }}
        >
          <B2BFinancialPotentialCard />
        </div>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.imageWrapper}>
          <img src={productsImage} alt="Products" />
        </div>
      </div>
    </div>
  );
}
export default B2BExpansionSlide;
