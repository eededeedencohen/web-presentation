import React from "react";
import styles from "./ModalView.module.css";

// --- כותרת כללית (לשימוש בכל הרכיבים) ---
const ModalHeader = ({ title, onClose }) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    <button onClick={onClose} className={styles.closeIcon}>
      ✕
    </button>
  </div>
);

// --- רכיב 1: כרטיס מוצר (עבור קובץ המלאי) ---
// מציג את נתוני המוצר בצורה ויזואלית וגדולה
export const ProductDetailsView = ({ data, onClose }) => {
  return (
    <div className={styles.container}>
      <ModalHeader title="פרטי מוצר במלאי" onClose={onClose} />

      <div className={styles.productCard}>
        <div className={styles.productHeader}>
          <span className={styles.productName}>{data.name}</span>
          <span className={styles.skuBadge}>מק"ט: {data.sku}</span>
        </div>

        <div className={styles.gridDetails}>
          <div className={styles.detailItem}>
            <span className={styles.label}>מחיר יחידה</span>
            <span className={styles.value}>₪{data.price}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>כמות במלאי</span>
            <span className={styles.value}>{data.quantity} יח'</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>שווי כולל</span>
            {/* חישוב אוטומטי לתצוגה */}
            <span className={styles.value}>
              ₪{(data.price * data.quantity).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button onClick={onClose} className={styles.closeBtn}>
          סגור
        </button>
      </div>
    </div>
  );
};

// --- רכיב 2: טבלת השוואת מחירים (עבור קובץ הצעות המחיר) ---
// נוח להשוואה בין הספקים (גרפוס, דפוס שי וכו')
export const QuoteComparisonView = ({ productName, quotes, onClose }) => {
  return (
    <div className={styles.container}>
      <ModalHeader title="השוואת הצעות מחיר" onClose={onClose} />

      <div className={styles.subHeader}>
        מוצר: <strong>{productName}</strong>
      </div>

      <table className={styles.readOnlyTable}>
        <thead>
          <tr>
            <th>ספק</th>
            <th>מחיר (כולל מע"מ)</th>
            <th>הערות</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, index) => (
            <tr key={index}>
              <td>{quote.supplier}</td>
              <td className={styles.priceCell}>₪{quote.price}</td>
              <td className={styles.noteCell}>{quote.note || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>
        <button onClick={onClose} className={styles.closeBtn}>
          אישור
        </button>
      </div>
    </div>
  );
};

// --- רכיב 3: סיכום חודשי (עבור קובץ תוכנית העבודה) ---
export const MonthlyPlanView = ({ monthData, onClose }) => {
  return (
    <div className={styles.container}>
      <ModalHeader
        title={`תוכנית עבודה - חודש ${monthData.name}`}
        onClose={onClose}
      />

      <div className={styles.planSection}>
        <h4 className={styles.sectionTitle}>אירועים מרכזיים</h4>
        <p className={styles.textData}>
          {monthData.events || "אין אירועים מיוחדים החודש"}
        </p>
      </div>

      <div className={styles.statsRow}>
        <div className={`${styles.statBox} ${styles.greenBox}`}>
          <span className={styles.statLabel}>יעד הכנסות</span>
          <span className={styles.statNumber}>₪{monthData.incomeTarget}</span>
        </div>
        <div className={`${styles.statBox} ${styles.redBox}`}>
          <span className={styles.statLabel}>צפי הוצאות</span>
          <span className={styles.statNumber}>₪{monthData.expenses}</span>
        </div>
        <div className={`${styles.statBox} ${styles.blueBox}`}>
          <span className={styles.statLabel}>רווח צפוי</span>
          <span className={styles.statNumber}>₪{monthData.profit}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <button onClick={onClose} className={styles.closeBtn}>
          סגור
        </button>
      </div>
    </div>
  );
};
