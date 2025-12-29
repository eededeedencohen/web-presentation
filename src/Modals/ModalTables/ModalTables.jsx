import React from "react";
import styles from "./TableModal.module.css";

// --- כותרת ---
const ModalHeader = ({ title, onClose }) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    <button onClick={onClose} className={styles.closeButton} title="סגור">
      ✕
    </button>
  </div>
);

// =========================================================
// 1. טבלת מלאי (מעוצבת)
// =========================================================
export const InventoryTable = ({ data, onClose }) => {
  return (
    <div className={styles.container}>
      <ModalHeader title=" מלאי מחסנים ושווי פוטנציאלי" onClose={onClose} />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ borderRadius: "0 10px 0 0" }}>שם מוצר</th>
              <th>מק"ט</th>
              <th>כמות במלאי</th>
              <th>מחיר יח'</th>
              <th style={{ borderRadius: "10px 0 0 0" }}>פוטנציאל הכנסה</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className={styles.productName}>{item.productName}</td>
                <td>
                  {item.sku ? (
                    <span className={styles.badge}>{item.sku}</span>
                  ) : (
                    "—"
                  )}
                </td>
                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>
                <td className={styles.price}>₪{item.price}</td>
                <td className={styles.income}>{item.potentialIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          marginTop: "10px",
          fontSize: "0.9rem",
          color: "#888",
          textAlign: "left",
        }}
      >
        סה"כ פריטים: {data.length}
      </div>
    </div>
  );
};

// =========================================================
// 2. שאר הטבלאות (אם תרצה להשתמש בהן באותו עיצוב)
// =========================================================

// טבלת הצעות מחיר
export const QuotesTable = ({ data, onClose }) => {
  return (
    <div className={styles.container}>
      <ModalHeader title="📑 השוואת הצעות מחיר (מכרז)" onClose={onClose} />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>שם המוצר</th>
              <th>מפרט</th>
              <th>חי הפקות</th>
              <th>דפוס שי</th>
              <th>גרפוס</th>
              <th>במבליק</th>
              <th>דפוס ירושלים</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className={styles.productName}>{row.productName}</td>
                <td
                  style={{
                    fontSize: "0.8rem",
                    maxWidth: "200px",
                    lineHeight: "1.4",
                  }}
                >
                  {row.specs}
                </td>
                <td>{row.haiPrice ? `₪${row.haiPrice}` : "-"}</td>
                <td>{row.shaiPrice ? `₪${row.shaiPrice}` : "-"}</td>
                <td>{row.graphosPrice ? `₪${row.graphosPrice}` : "-"}</td>
                <td>{row.bambalikPrice ? `₪${row.bambalikPrice}` : "-"}</td>
                <td>{row.jlmPrice ? `₪${row.jlmPrice}` : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
