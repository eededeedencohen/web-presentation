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

// 1. מכירות קמעונאיות (7.2)
export function RetailContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מכירות קמעונאיות (B2B)</h2>
      <div>
        <p>הפצת מוצרי המותג לרשתות שיווק וחנויות (מודל סיטונאי).</p>
        <p>מאפשר הגעה לקהל יעד עצום ללא עלויות תפעול חנויות פיזיות שלנו.</p>
        <p>
          <strong>פוטנציאל:</strong> 175,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.2")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.2 - מכירות קמעונאיות
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. התו החברתי (7.3)
export function SocialLabelContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>"התו החברתי"</h2>
      <div>
        <p>תו קנייה לארגונים (מתנות עובדים) המכובד אך ורק בעסקים חברתיים.</p>
        <p>
          מודל Win-Win: הארגון מקבל ערך חברתי (ESG), העובד מקבל מתנה ערכית,
          והעסקים החברתיים מקבלים הכנסה.
        </p>
        <p>
          <strong>פוטנציאל:</strong> 250,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.3")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.3 - התו החברתי
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. מיזמי חוויה (7.5)
export function ExperienceContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מיזם "יום בחיי"</h2>
      <div>
        <p>סדנאות, הרצאות וסיורים במרכזי העמותה.</p>
        <p>
          המוצר: מפגש אנושי ובלתי אמצעי עם אנשים עם מוגבלויות, המייצר חיבור רגשי
          ופותח דלת למכירת מוצרים ושיתופי פעולה.
        </p>
        <p>
          <strong>פוטנציאל:</strong> 80,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.5")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.5 - מיזם "יום בחיי"
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 4. להקת שק"ל (7.4)
export function BandContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>להקת שק"ל</h2>
      <div>
        <p>
          הרכב מוזיקלי מקצועי של אנשים עם מוגבלויות המופיע באירועי חברה וטקסים.
        </p>
        <p>מוצר חווייתי המשלב איכות תרבותית עם מסר חברתי חזק.</p>
        <p>
          <strong>פוטנציאל:</strong> 35,000 ש"ח בשנה.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.4")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.4 - להקת שק"ל
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedEngine, onNavigate }) {
  switch (selectedEngine) {
    case "retail":
      return <RetailContent onNavigate={onNavigate} />;
    case "social":
      return <SocialLabelContent onNavigate={onNavigate} />;
    case "experience":
      return <ExperienceContent onNavigate={onNavigate} />;
    case "band":
      return <BandContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
