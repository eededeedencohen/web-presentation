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

// 1. ייבוא דינמי של כל התמונות מתיקיית הנכסים (Vite Feature)
const imageModules = import.meta.glob(
  "../../../assets/Images/*.{png,jpg,jpeg,svg,webp}",
  { eager: true },
);
// המרת האובייקט למערך של כתובות URL
const imageUrls = Object.values(imageModules).map((mod) => mod.default);

const slideComponents = {
  1: CoverSlide,
  2: VisionSlide,
  3: FinancialGrowthSlide,
  4: StrategySlide,
  5: HolidayRevenueSlide,
  6: MassMarketSlide,
  7: SeasonalityChartSlide,
  8: CostEfficiencySlide,
  9: BudgetSummarySlide,
  10: NewGrowthEnginesSlide,
  11: B2BExpansionSlide,
  12: SocialLabelSlide,
  13: SwotAnalysisSlide,
  14: ResourceNeedsSlide,
  15: ImpactSummarySlide,
};

function Presentation() {
  const [currentSlideId, setCurrentSlideId] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // State למסך טעינה
  const [loadingProgress, setLoadingProgress] = useState(0); // (אופציונלי) להצגת אחוזים

  // 2. Preloading Effect
  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // ממשיכים גם אם תמונה אחת נכשלה
        });
      });

      // עדכון ה-State רק כשכל התמונות נטענו
      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  // --- לוגיקת הניווט והמסך המלא נשארת זהה ---
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const totalSlides = Object.keys(slideComponents).length;

  const goNext = () => {
    setCurrentSlideId((prev) => (prev < totalSlides ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentSlideId((prev) => (prev > 1 ? prev - 1 : prev));
  };

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
  };

  // 3. תצוגת מסך טעינה בזמן שהתמונות יורדות
  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div className={styles.rotateIcon}>⏳</div>{" "}
        {/* אפשר להשתמש באנימציה שכבר קיימת לך */}
        <h2 style={{ color: "var(--purple)", fontFamily: "Rubik, sans-serif" }}>
          טוען מצגת...
        </h2>
      </div>
    );
  }

  const CurrentSlide = slideComponents[currentSlideId];

  return (
    <div
      className={styles.presentationContainer}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button className={styles.fullscreenBtn} onClick={toggleFullscreen}>
        ⛶
      </button>
      <div className={styles.rotateMessageOverlay}>
        <div className={styles.rotateMessageContent}>
          <div className={styles.rotateIcon}>📱⟳</div>
          <h2>נא לסובב את המכשיר</h2>
          <p>המצגת מותאמת לצפייה לרוחב בלבד</p>
        </div>
      </div>

      <CurrentSlide />
    </div>
  );
}

export default Presentation;
