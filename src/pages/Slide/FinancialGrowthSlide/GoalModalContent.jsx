import React from "react";
import styles from "./ModalContant.module.css";

// 1. רכיב מטרת העל - מורחב
export function MainGoalContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>מטרת העל: עצמאות ושותפות</h2>
      <div className={styles.popupText}>
        <p>
          היעד הוא לא רק פיננסי, אלא יצירת גוף כלכלי יציב המכניס מעל מיליון ש"ח
          בשנה, במטרה לצמצם את התלות בתקציבים ממשלתיים חיצוניים.
        </p>
        <p>
          אנו בונים "מנוע צמיחה חברתי-עסקי": מודל המחבר בין יצירה ומשמעות לבין
          קיימות כלכלית. במודל זה, האדם עם המוגבלות אינו רק "נתמך", אלא שותף מלא
          ליצירה, לעבודה ולרווחים, תוך חיבור למגזר העסקי והציבורי.
        </p>
      </div>

      <div className={styles.sourceBox}>
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
          <span className={styles.sourceValue}>תחת "חזון" ו"מטרת על"</span>
        </div>
      </div>
    </div>
  );
}

// 2. רכיב יעד הכנסות - מורחב (הסבר על המנועים)
export function RevenueTargetContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>יעד הכנסות: אסטרטגיית הצמיחה</h2>
      <div className={styles.popupText}>
        <p>
          הקפיצה ל-1.1 מיליון ש"ח (גידול פי 3.6) מתבססת על שלושה עמודי תווך
          אסטרטגיים:
        </p>
        <ul style={{ paddingRight: "20px", marginTop: "5px" }}>
          <li>
            <strong>כיבוש הפסגות (חגים):</strong> מיקוד במכירות שיא בראש השנה,
            פסח ופורים המהווים את מנוע ההכנסה העיקרי.
          </li>
          <li>
            <strong>בניית הבסיס (שוטף):</strong> יצירת הכנסה יציבה כל השנה
            ממוצרי דפוס ו-Mass Market, כדי לא להסתמך רק על חגים.
          </li>
          <li>
            <strong>מנועים חדשים:</strong> כניסה למכירה קמעונאית ברשתות (B2B)
            והשקת "התו החברתי".
          </li>
        </ul>
      </div>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>מצגת אסטרטגית 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>עמוד 4 ("אסטרטגיה")</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>פירוט שלושת עמודי התווך</span>
        </div>
      </div>
    </div>
  );
}

// 3. רכיב יעד רווחיות - מורחב (הסבר על ההתייעלות)
export function ProfitTargetContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>יעד רווח: התייעלות ומודל עסקי</h2>
      <div className={styles.popupText}>
        <p>
          הזינוק הדרמטי ברווח (פי 25.5) נובע לא רק מהגדלת המכירות, אלא משינוי
          עמוק במבנה העלויות:
        </p>
        <ul style={{ paddingRight: "20px", marginTop: "5px" }}>
          <li>
            <strong>ניהול עלויות אסטרטגי:</strong> יציאה למכרז ספקים מקיף שהוזיל
            את עלויות הייצור (דפוס, אריזות) בשיעור של 37%-60%.
          </li>
          <li>
            <strong>תמהיל מוצרים רווחי:</strong> התמקות במוצרים עם שולי רווח
            גבוהים (כגון "התו החברתי" ומוצרי נייר מעוצבים).
          </li>
          <li>
            <strong>מודל פיננסי חכם:</strong> שמירה על הוצאות קבועות נמוכות ביחס
            לגידול בהכנסות.
          </li>
        </ul>
      </div>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>תכנון שנתי 2026</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>עמוד 8-9 (מודל פיננסי)</span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>
            נתוני מכרז ספקים ותחזית רווח
          </span>
        </div>
      </div>
    </div>
  );
}

// הקומפוננטה הראשית שמנווטת
export default function GoalModalContent({ selectedGoal }) {
  switch (selectedGoal) {
    case "mainGoal":
      return <MainGoalContent />;
    case "revenue":
      return <RevenueTargetContent />;
    case "profit":
      return <ProfitTargetContent />;
    default:
      return null;
  }
}
