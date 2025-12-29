import React from "react";
import styles from "./BudgetSummarySlide.module.css"; // שימוש באותו קובץ עיצוב או חדש לפי בחירה

const ModalContant = () => {
  const data = [
    { category: "הכנסות ממכירות (צפי)", amount: "₪1,112,492", type: "income" },
    {
      category: "הוצאות משתנות (רכש, חומרי גלם)",
      amount: "₪500,000",
      type: "expense",
    },
    {
      category: "הוצאות קבועות (כוח אדם, שיווק)",
      amount: "₪328,592",
      type: "expense",
    },
    { category: 'סה"כ רווח נקי', amount: "₪283,900", type: "profit" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        direction: "rtl",
        textAlign: "right",
        color: "#333",
      }}
    >
      <h2
        style={{
          color: "var(--purple)",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
        }}
      >
        פירוט תקציב 2026
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        הטבלה להלן מציגה את התחזית הפיננסית המפורטת לשנת 2026, תוך התחשבות
        בעונתיות וביעדי הצמיחה ב-B2B.
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "1.1rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              סעיף
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              סכום
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
              <td
                style={{
                  padding: "12px",
                  fontWeight: item.type === "profit" ? "bold" : "normal",
                }}
              >
                {item.category}
              </td>
              <td
                style={{
                  padding: "12px",
                  color:
                    item.type === "income"
                      ? "var(--green)"
                      : item.type === "expense"
                      ? "#c62828"
                      : "var(--purple)",
                  fontWeight: "bold",
                  direction: "ltr",
                  textAlign: "right",
                }}
              >
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          borderRight: "4px solid var(--green)",
        }}
      >
        <strong>הערת אנליסט:</strong> מרווח הביטחון בתקציב עומד על כ-15% בהוצאות
        המשתנות, מה שמאפשר גמישות במקרה של תנודות במחירי חומרי הגלם.
      </div>
    </div>
  );
};

export default ModalContant;
