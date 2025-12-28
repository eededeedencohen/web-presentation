import React from "react";
import styles from "./ModalContant.module.css";

// 1. רכיב החוזקות (Strengths)
export function StrengthsContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>חוזקות (Strengths)</h2>
      <p className={styles.popupText}>
        הנכסים הפנימיים שלנו: מסר חברתי חזק של תרומה לקהילה, היותנו ארגון מבוסס
        עם מוניטין חיובי (במיוחד בירושלים), תשתיות קיימות, וצוות איכותי הכולל את
        יקיר, אייל, אנשי מכירות ומתנדבים.
      </p>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 1:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            מצגת אסטרטגית עמוד 13 [cite: 171-174]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 2:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            תכנון שנתי פרק 4 (טבלה) [cite: 256]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>
            "מסר חברתי... ארגון מבוסס... תשתיות וצוות איכותי"
          </span>
        </div>
      </div>
    </div>
  );
}

// 2. רכיב החולשות (Weaknesses)
export function WeaknessesContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>חולשות (Weaknesses)</h2>
      <p className={styles.popupText}>
        האתגרים הפנימיים הדורשים טיפול: כוח הייצור אינו עסקי לחלוטין (חלקו
        בדעיכה), קיימת בירוקרטיה ארגונית הדורשת אישורים, והמבנה הפיננסי אינו
        גמיש מספיק לתגובות מהירות.
      </p>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 1:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            מצגת אסטרטגית עמוד 13 [cite: 167-170]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 2:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            תכנון שנתי פרק 4 (טבלה) [cite: 256]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>
            "כוח ייצור לא עסקי... בירוקרטיה... מבנה פיננסי לא גמיש"
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. רכיב ההזדמנויות (Opportunities)
export function OpportunitiesContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>הזדמנויות (Opportunities)</h2>
      <p className={styles.popupText}>
        פוטנציאל הצמיחה החיצוני: קיים פוטנציאל אדיר שטרם מומש, אפשרות למינוף
        שיווקי ומיתוגי שטרם בוצע, ורצון אותנטי של הציבור והמגזר העסקי לתרום
        חברתית ולבצע רכישות עם ערך מוסף.
      </p>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 1:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            מצגת אסטרטגית עמוד 13 [cite: 179-182]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 2:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            תכנון שנתי פרק 4 (טבלה) [cite: 256]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>
            "פוטנציאל גדול בלתי ממומש... רצון הציבור לתרום"
          </span>
        </div>
      </div>
    </div>
  );
}

// 4. רכיב האיומים (Threats)
export function ThreatsContent() {
  return (
    <div className={styles.exposurePopupContainer}>
      <h2 className={styles.popupTitle}>איומים (Threats)</h2>
      <p className={styles.popupText}>
        הסיכונים החיצוניים: השוק הארגוני תחרותי מאוד ("אוקיינוס אדום"), נדרש זמן
        רב לחדירה לשוק וביסוס קשרים, וישנו קושי בבידול מול עמותות אחרות המתחרות
        על אותו כיס של התורם/הרוכש.
      </p>

      <div className={styles.sourceBox}>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 1:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            מצגת אסטרטגית עמוד 13 [cite: 175-178]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מקור 2:</span>
          [cite_start]
          <span className={styles.sourceValue}>
            תכנון שנתי פרק 4 (טבלה) [cite: 256]
          </span>
        </div>
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>
            "שוק ארגוני תחרותי... חוסר בידול מול עמותות אחרות"
          </span>
        </div>
      </div>
    </div>
  );
}

// הקומפוננטה הראשית לניהול התצוגה של ה-SWOT
export default function ModalContant({ selectedSwotPart }) {
  switch (selectedSwotPart) {
    case "strengths":
      return <StrengthsContent />;
    case "weaknesses":
      return <WeaknessesContent />;
    case "opportunities":
      return <OpportunitiesContent />;
    case "threats":
      return <ThreatsContent />;
    default:
      return <StrengthsContent />; // ברירת מחדל
  }
}
