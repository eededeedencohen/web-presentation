import React from "react";
import styles from "./ModalContant.module.css";

const ClickHint = ({ text = "לחץ לצפייה בנתונים המלאים" }) => (
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
    {text} &larr;
  </div>
);

// 1. רכיב מטרת העל -> מפנה למסמך (שקופית 6, פרק 1)
export function MainGoalContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>מטרת העל: עצמאות ושותפות</h2>
      <div className={styles.popupText}>
        <p>
          היעד הוא לא רק פיננסי, אלא יצירת גוף כלכלי יציב המכניס מעל מיליון ש"ח
          בשנה, במטרה לצמצם את התלות בתקציבים ממשלתיים חיצוניים.
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(6, "1")}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>מסמך תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>פרק 1 ("חזון ומטרות על")</span>
        </div>
        <ClickHint text="לצפייה במסמך המלא" />
      </div>
    </div>
  );
}

// 2. רכיב הכנסות -> מפנה לטבלת צפי פיננסי (שקופית 2)
export function RevenueTargetContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>צפי הכנסות: מנועי הצמיחה</h2>
      <div className={styles.popupText}>
        <p>
          הקפיצה ל-1.1 מיליון ש"ח (גידול פי 3.6) מתבססת על הרחבת הפעילות: חגים
          (B2B), שוטף (Mass Market) ומיזמים חדשים (התו החברתי).
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(2)} // 2 = טבלת צפי פיננסי
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>
            טבלת צפי הכנסות ורווחים 2026
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>נתונים:</span>
          <span className={styles.sourceValue}>פירוט חודשי של הכנסות</span>
        </div>
        <ClickHint text="לצפייה בטבלה המלאה" />
      </div>
    </div>
  );
}

// 3. רכיב רווח והוצאות -> מפנה לטבלת צפי פיננסי (שקופית 2)
export function ProfitTargetContent({ onNavigate }) {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>רווח והוצאות: מודל התייעלות</h2>
      <div className={styles.popupText}>
        <p>
          הזינוק ברווח (פי 17.4) נובע מהוזלת עלויות ייצור (מכרזי ספקים) והתמקדות
          במוצרים רווחיים.
        </p>
      </div>

      <div
        className={styles.sourceBox}
        onClick={() => onNavigate(2)} // 2 = טבלת צפי פיננסי
        style={{ cursor: "pointer" }}
      >
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור:</span>
          <span className={styles.sourceValue}>
            טבלת צפי הכנסות ורווחים 2026
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>נתונים:</span>
          <span className={styles.sourceValue}>שורת הרווח החודשית</span>
        </div>
        <ClickHint text="לצפייה בטבלה המלאה" />
      </div>
    </div>
  );
}

export default function GoalModalContent({ selectedGoal, onNavigate }) {
  switch (selectedGoal) {
    case "mainGoal":
      return <MainGoalContent onNavigate={onNavigate} />;
    case "revenue":
      return <RevenueTargetContent onNavigate={onNavigate} />;
    case "profit":
      return <ProfitTargetContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
