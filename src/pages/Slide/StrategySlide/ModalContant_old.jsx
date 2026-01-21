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
      borderTop: "1px dashed #ccc",
      paddingTop: "5px",
    }}
  >
    לחץ כאן לצפייה בפרק המלא במסמך &larr;
  </div>
);

// 1. כיבוש הפסגות (חגים) -> מפנה לפרק 5.1 (ערכות חג)
export function PeaksContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>כיבוש הפסגות</h2>
      <div className={styles.popupText}>
        <p>
          מיקוד מאמצים ב"פיקים" העונתיים הגדולים (ראש השנה, פסח ופורים), המהווים
          את מנוע ההכנסה המרכזי והמיידי של החנות.
        </p>
        <p>
          האסטרטגיה כוללת שיווק אקטיבי לחברות (B2B), יצירת קטלוגים ייעודיים לכל
          חג, וניהול מלאי חכם כדי למקסם רווחים בתקופות השיא.
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(6, "5.1")} // 6=מסמך, 5.1=פרק ערכות חג
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 5.1 ("ערכות חג")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>נתוני צפי הכנסות לחגים</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. צמיחה משולבת (חברתי-עסקי) -> מפנה לפרק 1 (מטרת על) או 7 (מנועי צמיחה)
export function IntegratedContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>צמיחה משולבת</h2>
      <div className={styles.popupText}>
        <p>
          מינוף המודל הייחודי שלנו המשלב ערך חברתי עם הצלחה עסקית. זהו הבידול
          העיקרי שלנו מול מתחרים בשוק.
        </p>
        <p>
          האסטרטגיה היא להפוך את האדם עם המוגבלות לשותף מלא – יוצר, עובד ומשפיע.
          חיבור זה יוצר ערך מוסף ללקוחות (ESG/CSR) ומאפשר פיתוח מוצרים כמו "התו
          החברתי" וסדנאות "יום בחיי".
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(6, "1")} // 6=מסמך, 1=פרק חזון
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>מנוע צמיחה חברתי-עסקי</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. בניית הבסיס (שוטף/Mass) -> מפנה לפרק 6 (דפוס ו-Mass)
export function BaseContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>בניית הבסיס</h2>
      <div className={styles.popupText}>
        <p>
          יצירת זרם הכנסות יציב וקבוע לאורך כל השנה (ARR), כדי להפחית את התלות
          במכירות החגים בלבד.
        </p>
        <p>
          האסטרטגיה מתבססת על מוצרי Mass Market, מכרזי דפוס גדולים, ומכירה
          קמעונאית שוטפת בחנויות וברשתות, המבטיחים תזרים מזומנים גם בחודשים
          "רגילים".
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(6, "6")} // 6=מסמך, 6=פרק דפוס
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>
            פרק 6 ("הפקות דפוס ו-Mass")
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>בניית הכנסה שוטפת</span>
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// הקומפוננטה הראשית שמנווטת
export default function ModalContant({ selectedStrategy, onNavigate }) {
  switch (selectedStrategy) {
    case "peaks":
      return <PeaksContent onNavigate={onNavigate} />;
    case "integrated":
      return <IntegratedContent onNavigate={onNavigate} />;
    case "base":
      return <BaseContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
