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
    לחץ לצפייה בפרק המלא &larr;
  </div>
);

// 1. מחברות A5
export function NotebooksContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מוצר דגל: מחברות מעוצבות</h2>
      <div>
        <p>
          מחברות A5 הן מוצר "Mass" קלאסי: עלות ייצור נמוכה (כ-15 ש"ח) ומחיר
          מכירה אטרקטיבי (29 ש"ח), המשאיר רווח גולמי של כ-50%.
        </p>
        <p>מתאים מאוד למכירה בארגונים, כנסים וחנויות.</p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "6.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 6.2 - מוצרי דפוס מבוססי עיצוב
        </div>
        <div>
          <strong>פירוט:</strong> דוגמאות רווחיות (מחברות)
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. לוחות שנה
export function CalendarContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מוצר עונתי: לוחות שנה</h2>
      <div>
        <p>
          מוצר חובה לכל ארגון בתחילת שנה. פוטנציאל הזמנות גדולות (למשל: 3,000
          יחידות לקרן רום).
        </p>
        <p>עלות נמוכה (7 ש"ח), מכירה ב-15-25 ש"ח, רווח גבוה ליחידה.</p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "6.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 6.2 - מוצרי דפוס מבוססי עיצוב
        </div>
        <div>
          <strong>פירוט:</strong> דוגמאות רווחיות (לוחות שנה)
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. סיכום פוטנציאל
export function SummaryContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>פוטנציאל הכנסה שוטף</h2>
      <div>
        <p>בניית בסיס הכנסות יציב ("לחם וחמאה") שאינו תלוי בחגים.</p>
        <p>
          <strong>יעד שנתי:</strong> הכנסות של 500,000 ש"ח ממוצרי Mass ודפוס
          שוטף.
        </p>
        <p>
          <strong>רווח צפוי:</strong> כ-350,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "6.3")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 6.3 - מוצרי Mass (שוטף)
        </div>
        <div>
          <strong>פירוט:</strong> תחזית שנתית וחודשית
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedItem, onNavigate }) {
  switch (selectedItem) {
    case "notebooks":
      return <NotebooksContent onNavigate={onNavigate} />;
    case "calendar":
      return <CalendarContent onNavigate={onNavigate} />;
    case "summary":
      return <SummaryContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
