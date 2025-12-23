import React, { useState, useEffect } from "react";
import VisionSlide from "../VisionSlide/VisionSlide.jsx";
import StrategySlide from "../StrategySlide/StrategySlide.jsx";
import HolidayRevenueSlide from "../HolidayRevenueSlide/HolidayRevenueSlide.jsx";
import MassMarketSlide from "../MassMarketSlide/MassMarketSlide.jsx";
import CoverSlide from "../CoverSlide/CoverSlide";
import FinancialGrowthSlide from "../FinancialGrowthSlide/FinancialGrowthSlide";
import SeasonalityChartSlide from "../SeasonalityChartSlide/SeasonalityChartSlide";
import CostEfficiencySlide from "../CostEfficiencySlide/CostEfficiencySlide";
import BudgetSummarySlide from "../BudgetSummarySlide/BudgetSummarySlide";
import NewGrowthEnginesSlide from "../NewGrowthEnginesSlide/NewGrowthEnginesSlide";
import SocialLabelSlide from "../SocialLabelSlide/SocialLabelSlide";
import SwotAnalysisSlide from "../SwotAnalysisSlide/SwotAnalysisSlide";
import ResourceNeedsSlide from "../ResourceNeedsSlide/ResourceNeedsSlide";
import ImpactSummarySlide from "../ImpactSummarySlide/ImpactSummarySlide";
import B2BExpansionSlide from "../B2BExpansionSlide/B2BExpansionSlide.jsx";
import styles from "./Presentation.module.css";

const slideComponents = {
  // 1: CoverSlide, // X - 1
  1: SocialLabelSlide, // X - 1
  2: VisionSlide, // V - 2
  3: FinancialGrowthSlide, // X - 3
  4: StrategySlide, // V - 4
  5: HolidayRevenueSlide, // V - 5
  6: MassMarketSlide, // V - 6
  7: SeasonalityChartSlide, // X - 7
  8: CostEfficiencySlide, // V - 8
  9: BudgetSummarySlide, // ? - 9
  10: NewGrowthEnginesSlide, // V - 10
  11: B2BExpansionSlide, // V - 11
  12: SocialLabelSlide, // V - 12
  13: SwotAnalysisSlide, // V - 13
  14: ResourceNeedsSlide, // V - 14
  15: ImpactSummarySlide, // X - 15
};

function Presentation() {
  const [currentSlideId, setCurrentSlideId] = useState(1);

  // -- משתנים לזיהוי החלקה (Swipe) --
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; // מרחק מינימלי בפיקסלים כדי שזה ייחשב החלקה

  const totalSlides = Object.keys(slideComponents).length;

  // --- פונקציות מעבר ---
  const goNext = () => {
    setCurrentSlideId((prev) => (prev < totalSlides ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentSlideId((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // --- האזנה למקלדת ---
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "Space") {
        goNext();
      } else if (event.key === "ArrowLeft") {
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --- האזנה למגע (Touch / Swipe) ---
  const onTouchStart = (e) => {
    setTouchEnd(null); // איפוס
    setTouchStart(e.targetTouches[0].clientX); // שמירת נקודת ההתחלה
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX); // עדכון נקודת הסוף תוך כדי תנועה
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // החלקה שמאלה (האצבע זזה ימינה לשמאלה) -> עבור לשקופית הבאה
    if (isLeftSwipe) {
      goNext();
    }
    // החלקה ימינה (האצבע זזה משמאל לימין) -> עבור לשקופית הקודמת
    if (isRightSwipe) {
      goPrev();
    }
  };

  const CurrentSlide = slideComponents[currentSlideId];

  return (
    <div
      className={styles.presentationContainer}
      // הוספת אירועי המגע לקונטיינר הראשי
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* הודעה שמופיעה רק במובייל לאורך - תסתיר את כל השאר ב-CSS */}
      <div className={styles.rotateMessageOverlay}>
        <div className={styles.rotateMessageContent}>
          <div className={styles.rotateIcon}>📱⟳</div>
          <h2>נא לסובב את המכשיר</h2>
          <p>המצגת מותאמת לצפייה לרוחב בלבד</p>
        </div>
      </div>

      {/* תוכן המצגת */}
      <CurrentSlide />

      {/* <div className={styles.navigationControls}>
        <button
          onClick={goPrev}
          disabled={currentSlideId === 1}
          className={styles.navButton}
        >
          &lt; הקודם
        </button>
        <span className={styles.pageCounter}>
          {currentSlideId} / {totalSlides}
        </span>
        <button
          onClick={goNext}
          disabled={currentSlideId === totalSlides}
          className={styles.navButton}
        >
          הבא &gt;
        </button>
      </div> */}
    </div>
  );
}

export default Presentation;

// git commit -m "feat: add template of the rest of the slides components to Presentation.jsx"
