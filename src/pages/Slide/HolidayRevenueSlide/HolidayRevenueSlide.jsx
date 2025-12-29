import React, { useState } from "react";
import styles from "./HolidayRevenueSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import HolidayRevenueCard from "../../../components/Cards/HolidayRevenueCard/HolidayRevenueCard";
import passoverImage from "../../../assets/Images/passover.png";
import purimImage from "../../../assets/Images/purim.png";
import roshHashanahImage from "../../../assets/Images/rosh-hashanah.png";
import simchatTorahImage from "../../../assets/Images/simchat-torah.png";

import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

const data = {
  holidays_breakdown: {
    purim: {
      holiday: "פורים (משלוחי מנות)",
      expected_revenue: 150000,
      target_audience: "מ-50 בתי ספר",
    },
    roshHashanah: {
      holiday: "ראש השנה",
      expected_revenue: 200000,
      target_audience: "מ-30 חברות",
    },
    passover: {
      holiday: "פסח",
      expected_revenue: 150000,
      target_audience: "מ-30 חברות",
    },
    simchatTorah: {
      holiday: "שמחת תורה",
      expected_revenue: 112500,
      target_audience: "מ-50 בתי כנסת",
    },
  },
};

function HolidayRevenueSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  // ניהול תצוגה
  const [viewMode, setViewMode] = useState("summary");
  const [targetSlideId, setTargetSlideId] = useState(6);
  const [targetSectionId, setTargetSectionId] = useState(null);

  const handleCardClick = (holidayKey) => {
    setSelectedHoliday(holidayKey);
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
            selectedHoliday={selectedHoliday}
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
          text={"כיבוש הפסגות - מיקוד במכירות שיא בחגים"}
          width="75%"
          fontSize="3rem"
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: ₪662,500
      </div>
      <div className={styles.cardsArea}>
        {/* פורים */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("purim")}
          style={{ cursor: "pointer" }}
        >
          <HolidayRevenueCard
            image={purimImage}
            title={data.holidays_breakdown.purim.holiday}
            revenue={data.holidays_breakdown.purim.expected_revenue}
            destination={data.holidays_breakdown.purim.target_audience}
          />
        </div>

        {/* ראש השנה */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("roshHashanah")}
          style={{ cursor: "pointer" }}
        >
          <HolidayRevenueCard
            image={roshHashanahImage}
            title={data.holidays_breakdown.roshHashanah.holiday}
            revenue={data.holidays_breakdown.roshHashanah.expected_revenue}
            destination={data.holidays_breakdown.roshHashanah.target_audience}
          />
        </div>

        {/* פסח */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("passover")}
          style={{ cursor: "pointer" }}
        >
          <HolidayRevenueCard
            image={passoverImage}
            title={data.holidays_breakdown.passover.holiday}
            revenue={data.holidays_breakdown.passover.expected_revenue}
            destination={data.holidays_breakdown.passover.target_audience}
          />
        </div>

        {/* שמחת תורה */}
        <div
          className={styles.cardWrapper}
          onClick={() => handleCardClick("simchatTorah")}
          style={{ cursor: "pointer" }}
        >
          <HolidayRevenueCard
            image={simchatTorahImage}
            title={data.holidays_breakdown.simchatTorah.holiday}
            revenue={data.holidays_breakdown.simchatTorah.expected_revenue}
            destination={data.holidays_breakdown.simchatTorah.target_audience}
          />
        </div>
      </div>
    </div>
  );
}
export default HolidayRevenueSlide;
