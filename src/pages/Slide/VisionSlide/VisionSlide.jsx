import React, { useState, useEffect, useRef } from "react";
import styles from "./VisionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import VisionQuote from "../../../components/VisionQuote/VisionQuote";
import VisionCard from "../../../components/Cards/VisionCard/VisionCard";
// וודא שהתמונות קיימות בנתיבים האלה:
import image3 from "../../../assets/Images/image7.png";
import image4 from "../../../assets/Images/image4.png";
import image5 from "../../../assets/Images/image5.png";
import Modal from "../../../components/Modal/Modal.jsx";
import ModalContant from "./ModalContant.jsx";

// שינוי: ייבוא הקרוסלה מהמיקום הנכון (3 תיקיות למעלה, ואז לתוך Modals/ModalTables)
import MultiTableCarousel from "../../../Modals/ModalTables/MultiTableCarousel";

const VISION_PAGES = ["vision", "exposure", "meaning", "financial"];

export default function VisionSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVision, setSelectedVision] = useState(null);

  // viewMode יכול להיות: 'summary' (תקציר) או 'carousel' (צפייה מלאה בקרוסלה)
  const [viewMode, setViewMode] = useState("summary");
  const [targetSectionId, setTargetSectionId] = useState(null);

  // --- לוגיקה לניווט וגלילה ---
  const containerRef = useRef(null);
  const longPressTimer = useRef(null);
  const scrollInterval = useRef(null);
  const isLongPress = useRef(false);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // משתנים לזיהוי לחיצה משולשת (Triple Click)
  const clickCount = useRef(0);
  const lastKeyTime = useRef(0);
  const lastKey = useRef(null);

  // פונקציית עזר לניווט בין עמודים
  const navigatePages = (direction) => {
    const currentIndex = VISION_PAGES.indexOf(selectedVision);
    if (currentIndex === -1) return;

    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % VISION_PAGES.length;
    } else {
      nextIndex =
        (currentIndex - 1 + VISION_PAGES.length) % VISION_PAGES.length;
    }
    setSelectedVision(VISION_PAGES[nextIndex]);
  };

  // פונקציות גלילה
  const startScrolling = (direction) => {
    stopScrolling();
    scrollInterval.current = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop += direction === "down" ? 15 : -15;
      }
    }, 16);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    if (!isModalOpen || viewMode !== "summary") return;

    const handleKeyDown = (e) => {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        longPressTimer.current = setTimeout(() => {
          isLongPress.current = true;
          startScrolling("down"); // לחיצה ארוכה שמאלה -> גלילה למטה
        }, 300);
      } else if (e.key === "ArrowRight") {
        longPressTimer.current = setTimeout(() => {
          isLongPress.current = true;
          startScrolling("up"); // לחיצה ארוכה ימינה -> גלילה למעלה
        }, 300);
      }
    };

    const handleKeyUp = (e) => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }
      stopScrolling();

      if (!isLongPress.current) {
        // בדיקת לחיצה משולשת (Triple Click) לסגירת המודל
        const now = Date.now();
        const isSameKey = lastKey.current === e.key;
        const isQuick = now - lastKeyTime.current < 400; // 400ms

        if (isSameKey && isQuick) {
          clickCount.current += 1;
        } else {
          clickCount.current = 1;
        }

        lastKey.current = e.key;
        lastKeyTime.current = now;

        if (clickCount.current === 3) {
          // אם זיהינו 3 לחיצות רצופות - סגירת המודל (בלי ניווט)
          handleCloseModal();
          clickCount.current = 0;
          return;
        }

        if (e.key === "ArrowLeft") {
          navigatePages("next"); // לחיצה קצרה שמאלה -> הבא
        } else if (e.key === "ArrowRight") {
          navigatePages("prev"); // לחיצה קצרה ימינה -> הקודם
        }
      }
      isLongPress.current = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      stopScrolling();
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
    };
  }, [isModalOpen, viewMode, selectedVision]); // תלות ב-selectedVision כדי שהניווט יעבוד נכון

  // Touch Events for Mobile
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigatePages("prev"); // החלקה שמאלה -> הקודם (RTL)
    } else if (isRightSwipe) {
      navigatePages("next"); // החלקה ימינה -> הבא (RTL)
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  const openModal = (vision) => {
    setSelectedVision(vision);
    setViewMode("summary"); // התחלה תמיד בתקציר
    setTargetSectionId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setViewMode("summary"); // איפוס המצב לאחר סגירה
    }, 300);
  };

  // פונקציה למעבר מהתקציר לקרוסלה המלאה
  const handleNavigateToDoc = (sectionId) => {
    setTargetSectionId(sectionId);
    setViewMode("carousel");
  };

  return (
    <div className={styles.slidePage}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* לוגיקה לבחירה מה להציג בתוך המודל */}
        {viewMode === "summary" ? (
          <div
            style={{ height: "100%" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ModalContant
              selectedVision={selectedVision}
              onNavigate={handleNavigateToDoc}
              containerRef={containerRef}
            />
          </div>
        ) : (
          // תצוגת הקרוסלה המלאה (במקום סתם AnnualPlanDoc)
          <MultiTableCarousel
            onClose={handleCloseModal}
            onBackToSummary={() => setViewMode("summary")}
            initialSlideId={6} // מזהה השקופית של המסמך (AnnualPlanDoc)
            targetDocSectionId={targetSectionId} // מזהה הסעיף לגלילה
          />
        )}
      </Modal>

      <div className={styles.headerArea}>
        <HeaderBlock text={"החזון המנחה אותנו"} width="65%" fontSize="3rem" />
      </div>
      <div className={styles.middleArea} onClick={() => openModal("vision")}>
        <VisionQuote />
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.visionCardWrapper}>
          <VisionCard
            imageSrc={image5}
            title="מנוע חשיפה"
            text="צמצום הפער בין התעשייה המרשימה לתודעה הציבורית"
            iconName="megaphone"
            color="var(--purple)"
            className={styles.visionCardStyle}
            onClick={() => openModal("exposure")}
          />
          <VisionCard
            imageSrc={image4}
            title="משמעות"
            text="הגדלת תחושת השייכות והיצרנות של אנשי העמותה"
            iconName="like"
            color="var(--purple)"
            className={styles.visionCardStyle}
            onClick={() => openModal("meaning")}
          />
          <VisionCard
            imageSrc={image3}
            title="עצמאות כלכלית"
            text="יצירת מקור הכנסה יציב לצמצום התלות בתקציבים חיצוניים"
            iconName="plant-leaf"
            color="var(--purple)"
            className={styles.visionCardStyle}
            onClick={() => openModal("financial")}
          />
        </div>
      </div>
    </div>
  );
}
