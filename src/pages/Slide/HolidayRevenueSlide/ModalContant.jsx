import React from "react";
// שימוש בעיצוב מוכן או inline לשם הפשטות (אותו עיצוב כמו קודם)
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

// 1. פורים (5.2)
export function PurimContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>פורים: משלוחי מנות</h2>
      <div>
        <p>
          מודל "Cofix" לבתי ספר: משלוחי מנות במחיר נגיש (15 ש"ח), עם רווח נקי של
          5 ש"ח ליחידה.
        </p>
        <p>
          <strong>יעד:</strong> 50 בתי ספר, 10,000 משלוחים.
        </p>
        <p>
          <strong>צפי הכנסות:</strong> 150,000 ש"ח.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "5.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 5.2 - מבצע פורים
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. ראש השנה (5.1)
export function RoshHashanahContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>ראש השנה: שיא הפעילות</h2>
      <div>
        <p>מכירת מארזי שי יוקרתיים לארגונים וחברות (B2B).</p>
        <p>
          <strong>יעד:</strong> 30 חברות גדולות, כ-2,000 מארזים.
        </p>
        <p>
          <strong>צפי הכנסות:</strong> 200,000 ש"ח.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "5.1")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 5.1 - ערכות חג
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. פסח (5.1)
export function PassoverContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>פסח: מתנות לעובדים</h2>
      <div>
        <p>מכירת מארזים והגדות של פסח מעוצבות ("הגדת רפאל").</p>
        <p>
          <strong>יעד:</strong> 30 חברות, כ-2,000 מארזים.
        </p>
        <p>
          <strong>צפי הכנסות:</strong> 150,000 ש"ח.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "5.1")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 5.1 - ערכות חג
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 4. שמחת תורה (5.3)
export function SimchatTorahContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>שמחת תורה: שקיות ממתקים</h2>
      <div>
        <p>מכירת שקיות ממתקים ("פקעלך") לבתי כנסת ומוסדות.</p>
        <p>
          <strong>יעד:</strong> 50 בתי כנסת, 7,500 שקיות.
        </p>
        <p>
          <strong>צפי הכנסות:</strong> 112,500 ש"ח.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "5.3")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 5.3 - מבצע שמחת תורה
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedHoliday, onNavigate }) {
  switch (selectedHoliday) {
    case "purim":
      return <PurimContent onNavigate={onNavigate} />;
    case "roshHashanah":
      return <RoshHashanahContent onNavigate={onNavigate} />;
    case "passover":
      return <PassoverContent onNavigate={onNavigate} />;
    case "simchatTorah":
      return <SimchatTorahContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
