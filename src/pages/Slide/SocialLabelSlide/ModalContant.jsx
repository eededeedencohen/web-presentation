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

export function SocialLabelContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>"התו החברתי"</h2>
      <div>
        <p>פלטפורמה חדשנית המשלבת רווחה ארגונית עם ערך חברתי אמיתי.</p>
        <p>
          <strong>הקונספט:</strong> תו קנייה (בדומה ל"תו הזהב" או "BuyMe")
          המיועד לארגונים כמתנה לעובדים, אך מכובד <u>אך ורק</u> בעסקים המעסיקים
          אנשים עם מוגבלויות או בעלי תרומה חברתית מוכחת.
        </p>
        <p>
          <strong>מודל Win-Win-Win:</strong>
        </p>
        <ul
          style={{ paddingRight: "20px", marginTop: "5px", lineHeight: "1.5" }}
        >
          <li>
            <strong>הארגון:</strong> עומד ביעדי אחריות תאגידית (ESG) ותורם
            לקהילה דרך תקציב הרווחה הקיים.
          </li>
          <li>
            <strong>העובד:</strong> נהנה ממתנה איכותית עם ערך מוסף ומשמעות.
          </li>
          <li>
            <strong>העסקים החברתיים:</strong> נהנים מתנועת לקוחות והכנסה.
          </li>
          <li>
            <strong>העמותה:</strong> מייצרת הכנסה משמעותית ממכירת התו ומעמלות
            סליקה.
          </li>
        </ul>
      </div>

      {/* הפנייה לפרק 7.3 במסמך */}
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "7.3")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 7.3 - התו החברתי
        </div>
        <div>
          <strong>פירוט:</strong> אסטרטגיה מלאה, מודל עסקי ותחזית רווח
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ onNavigate }) {
  // מכיוון שיש רק נושא אחד בשקופית הזו, נחזיר אותו ישירות
  return <SocialLabelContent onNavigate={onNavigate} />;
}
