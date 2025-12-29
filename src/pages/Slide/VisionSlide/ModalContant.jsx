import React from "react";
import styles from "./ModalContant.module.css";

// רכיב עזר להודעת הלחיצה
const ClickHint = () => (
  <div
    style={{
      marginTop: "10px",
      fontSize: "0.85rem",
      color: "#4b2c85",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    לחץ כאן לצפייה בפרק המלא במסמך &larr;
  </div>
);

// 1. רכיב החזון
export function VisionContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>הצהרת החזון</h2>
      <p className={styles.popupText}>
        חנות המתנות שואפת להוות בית יוצר המשקף לעולם את הכישרון, היצירתיות
        והעוצמה האנושית של אמני ויוצרי שק"ל. החזון הוא להפוך את החנות לפלטפורמה
        המאפשרת לאנשים עם מוגבלויות לממש את הפוטנציאל המקצועי שלהם מתוך תשוקה
        ליצירה.
      </p>

      {/* הוספנו onClick */}
      <div
        className={styles.sourceBox}
        onClick={() => onNavigate("1")}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>תחת "חזון", פסקאות 1-2</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. רכיב עצמאות כלכלית
export function FinancialContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>עצמאות כלכלית</h2>
      <p className={styles.popupText}>
        החזון הכלכלי הוא יצירת מקור הכנסה עצמאי ויציב לעמותה, שיוביל לצמצום
        התלות בתקציבים ממשלתיים ובמקורות ציבוריים. עצמאות זו תאפשר פיתוח שירותים
        חדשניים והעשרת מסגרות התעסוקה. מטרת העל היא יצירת גוף עם הכנסות של לפחות
        1,000,000 ש"ח בשנה.
      </p>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate("1")}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>תחת "חזון", פסקה 7</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. רכיב משמעות
export function MeaningContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>משמעות</h2>
      <p className={styles.popupText}>
        חנות חזקה ורווחית תגדיל את תחושת המשמעות והשייכות של אנשי העמותה. המודל
        ממחיש את יכולתם להיות יצרניים ומשפיעים בכלכלה הישראלית. כל רכישה היא
        הצהרה על חברה טובה וצודקת יותר.
      </p>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate("1")}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>תחת "חזון", פסקה 6</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 4. רכיב מנוע חשיפה
export function ExposureContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>מנוע חשיפה</h2>
      <p className={styles.popupText}>
        כיום קיים פער גדול בין היקף העשייה וההשפעה של עמותת שק"ל לבין ההיכרות של
        הציבור הרחב איתה. החנות משמשת כ"מנוע חשיפה" שמטרתו להגדיל את הנראות
        הציבורית, לחזק את המותג "שק"ל" בשיח החברתי ולהציג את יכולותיהם של אנשים
        עם מוגבלויות כשותפים מלאים ומשפיעים.
      </p>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate("1")}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>תחת "חזון", פסקאות 3-5</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// קבלת ה-prop החדש onNavigate
export default function ModalContant({ selectedVision, onNavigate }) {
  switch (selectedVision) {
    case "vision":
      return <VisionContent onNavigate={onNavigate} />;
    case "financial":
      return <FinancialContent onNavigate={onNavigate} />;
    case "meaning":
      return <MeaningContent onNavigate={onNavigate} />;
    case "exposure":
      return <ExposureContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
