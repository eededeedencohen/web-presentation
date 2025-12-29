import React from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  direction: "rtl",
  textAlign: "right",
  color: "#333",
  padding: "0 10px 10px 10px",
  maxHeight: "50vh",
  overflowY: "auto",
};
const titleStyle = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#4b2c85",
  margin: "0 0 10px 0",
  borderBottom: "2px solid #eee",
  paddingBottom: "10px",
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  zIndex: 1,
};
const sourceBoxStyle = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "#f9f9fb",
  borderRight: "5px solid #4b2c85",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: "14px",
};

const ClickHint = ({ text = "לחץ לצפייה בפרק המלא" }) => (
  <div
    style={{
      marginTop: "8px",
      fontSize: "0.85rem",
      color: "#4b2c85",
      fontWeight: "bold",
      borderTop: "1px dashed #ccc",
      paddingTop: "5px",
    }}
  >
    {text} &larr;
  </div>
);

// 1. מכרז דפוס (6.1)
export function TenderContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מכרז דפוס 2026</h2>
      <div>
        <p>
          מהלך אסטרטגי של יציאה למכרז מרוכז מול 6 ספקים מובילים (כגון דפוס שי,
          במבליק, גרפוס ועוד).
        </p>
        <p>
          <strong>התוצאה:</strong> יישור קו במחירים והוזלה משמעותית של עלויות
          הייצור (עד 60% במוצרים מסוימים).
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "6.1")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 6.1 - מכרז הפקות דפוס
        </div>
        <div>
          <strong>פירוט:</strong> רשימת ספקים ומוצרים במכרז
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. חיסכון בעלויות (מפנה לטבלאות השוואה - שקופית 4)
export function SavingContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מודל החיסכון</h2>
      <div>
        <p>
          מעבר מרכישות ספורדיות לרכש אסטרטגי שנתי בכמויות גדולות (500/1000
          יחידות).
        </p>
        <p>
          השוואת מחירים קפדנית בין ספקים מבטיחה את המחיר הטוב ביותר לכל מוצר, מה
          שמתרגם לחיסכון ישיר של כ-150,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(4)}>
        <div>
          <strong>מקור:</strong> טבלאות השוואת מחירים
        </div>
        <div>
          <strong>מיקום:</strong> שקופית 4 (טבלת 500 יח')
        </div>
        <div>
          <strong>פירוט:</strong> נתונים משווים בין ספקים
        </div>
        <ClickHint text="לצפייה בטבלת המחירים" />
      </div>
    </div>
  );
}

// 3. רווחיות (6.2)
export function ProfitabilityContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>שיפור הרווחיות</h2>
      <div>
        <p>הגדלת המרווח (Margin) בכל מכירה בזכות הפחתת עלויות הייצור.</p>
        <p>
          <strong>דוגמה:</strong> מחברת A5 שעלתה בעבר לייצר כ-20 ש"ח, עולה כיום
          15 ש"ח ונמכרת ב-29 ש"ח, מה שמשאיר רווח של כ-50%.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "6.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 6.2 - מוצרים מבוססי עיצוב
        </div>
        <div>
          <strong>פירוט:</strong> דוגמאות לרווחיות מוצרים
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedItem, onNavigate }) {
  switch (selectedItem) {
    case "tender":
      return <TenderContent onNavigate={onNavigate} />;
    case "saving":
      return <SavingContent onNavigate={onNavigate} />;
    case "profitability":
      return <ProfitabilityContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
