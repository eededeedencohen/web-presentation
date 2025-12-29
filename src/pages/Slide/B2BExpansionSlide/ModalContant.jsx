import React from "react";

// עיצוב פנימי לשימוש חוזר
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  direction: "rtl",
  textAlign: "right",
  color: "#333",
  padding: "0 10px 10px 10px",
  maxHeight: "80vh",
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

const ClickHint = () => (
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
    לחץ לצפייה בפרק המלא &larr;
  </div>
);

export function B2BModelContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>המודל הקמעונאי (B2B)</h2>
      <div>
        <p>
          שינוי תפיסה ממכירה ישירה לצרכן למכירה סיטונאית לרשתות שיווק מובילות.
        </p>
        <p>
          במסגרת המודל, אנו מייצרים/מייבאים מוצרים ממותגים ומוכרים אותם בכמויות
          מסחריות לרשתות כמו רמי לוי, שופרסל וחנן, המפיצות אותם לקהל הרחב.
        </p>
        <p>
          <strong>פוטנציאל רווח:</strong> כ-175,000 ש"ח בשנה (מבוסס על 5 שיתופי
          פעולה גדולים).
        </p>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.2 - מכירות קמעונאיות
        </div>
        <div>
          <strong>פירוט:</strong> אסטרטגיה, מודל עסקי ותחזית רווח
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedContent, onNavigate }) {
  // במקרה הזה יש רק תוכן אחד מרכזי
  return <B2BModelContent onNavigate={onNavigate} />;
}
