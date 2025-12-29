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
    לחץ לצפייה בנתונים המלאים &larr;
  </div>
);

export function ChartContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>עונתיות המכירות</h2>
      <div>
        <p>
          הגרף מציג את תנודות ההכנסה הצפויות לאורך השנה, עם דגש על תקופות השיא
          (חגים).
        </p>
        <p>
          <strong>פיקים מרכזיים:</strong> מרץ (פורים), אפריל (פסח), ספטמבר (ראש
          השנה).
        </p>
        <p>
          <strong>יעד:</strong> איזון הגרף באמצעות הכנסות שוטפות בחודשים
          ה"חלשים".
        </p>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(2)}>
        <div>
          <strong>מקור:</strong> טבלת צפי פיננסי 2026
        </div>
        <div>
          <strong>מיקום:</strong> שקופית 2
        </div>
        <div>
          <strong>פירוט:</strong> נתונים מספריים חודשיים
        </div>
        <ClickHint />
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(3)}>
        <div>
          <strong>מקור:</strong> תוכנית עבודה שנתית
        </div>
        <div>
          <strong>מיקום:</strong> שקופית 3
        </div>
        <div>
          <strong>פירוט:</strong> פעולות לכל חודש
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ onNavigate }) {
  // תוכן יחיד לגרף
  return <ChartContent onNavigate={onNavigate} />;
}
