import React from "react";
import {
  SlideModalContainer,
  ModalText,
} from "../../../components/SlideModal/SlideModalContent";

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
    <SlideModalContainer title="פירוט תקציב 2026">
      <ModalText>
        הטבלה להלן מציגה את התחזית הפיננסית המפורטת לשנת 2026, תוך התחשבות
        בעונתיות וביעדי הצמיחה ב-B2B.
      </ModalText>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.95rem",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                textAlign: "right",
              }}
            >
              סעיף
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                textAlign: "right",
              }}
            >
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
                      ? "#16a34a"
                      : item.type === "expense"
                        ? "#c62828"
                        : "#4b2c85",
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
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          borderRight: "4px solid #16a34a",
          fontSize: "0.9rem",
        }}
      >
        <strong>הערת אנליסט:</strong> מרווח הביטחון בתקציב עומד על כ-15% בהוצאות
        המשתנות, מה שמאפשר גמישות במקרה של תנודות במחירי חומרי הגלם.
      </div>
    </SlideModalContainer>
  );
};

export default ModalContant;
