import React from "react";
import styles from "./SwotAnalysisSlide.module.css"; // שימוש ב-CSS של הקומפוננטה האב, או צור קובץ CSS ייעודי אם תרצה

// עיצוב פנימי לשימוש חוזר (אפשר גם להעביר לקובץ CSS נפרד)
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
    לחץ כאן לצפייה בפרק המלא במסמך &larr;
  </div>
);

// 1. חוזקות
export function StrengthsContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>חוזקות (Strengths)</h2>
      <div>
        <p>הנכסים הפנימיים המרכזיים שלנו המאפשרים לנו להצליח:</p>
        <ul style={{ paddingRight: "20px", lineHeight: "1.6" }}>
          <li>
            <strong>מסר חברתי חזק:</strong> חיבור עמוק לערכי תרומה לקהילה המהווה
            מנוע מכירה משמעותי.
          </li>
          <li>
            <strong>מוניטין וותק:</strong> ארגון מבוסס ומוכר, במיוחד באזור
            ירושלים.
          </li>
          <li>
            <strong>תשתיות וצוות:</strong> מערך לוגיסטי קיים וכוח אדם איכותי
            (יקיר, אייל, מתנדבים).
          </li>
        </ul>
      </div>

      <div
        style={sourceBoxStyle}
        onClick={() => onNavigate(6, "4")} // 6=מסמך, 4=פרק SWOT
      >
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 4 - מטריצת SWOT
        </div>
        <div>
          <strong>פירוט:</strong> ריבוע החוזקות
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. חולשות
export function WeaknessesContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>חולשות (Weaknesses)</h2>
      <div>
        <p>האתגרים הפנימיים שעלינו לנהל ולשפר:</p>
        <ul style={{ paddingRight: "20px", lineHeight: "1.6" }}>
          <li>
            <strong>כוח ייצור:</strong> יכולת ייצור מוגבלת (לא תעשייתית) וחלקית.
          </li>
          <li>
            <strong>בירוקרטיה:</strong> תהליכים ארגוניים איטיים וצורך באישורים
            מרובים.
          </li>
          <li>
            <strong>גמישות פיננסית:</strong> מבנה תקציבי קשיח המקשה על תגובה
            מהירה לשינויים.
          </li>
        </ul>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "4")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 4 - מטריצת SWOT
        </div>
        <div>
          <strong>פירוט:</strong> ריבוע החולשות
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. הזדמנויות
export function OpportunitiesContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>הזדמנויות (Opportunities)</h2>
      <div>
        <p>מנועי הצמיחה החיצוניים שמחכים למימוש:</p>
        <ul style={{ paddingRight: "20px", lineHeight: "1.6" }}>
          <li>
            <strong>פוטנציאל לא ממומש:</strong> השוק רחוק מלהיות רווי, יש מקום
            עצום לגדילה.
          </li>
          <li>
            <strong>מיתוג ושיווק:</strong> הציבור צמא למוצרים עם ערך, והמותג
            שלנו טרם מוצה.
          </li>
          <li>
            <strong>רצון לתרום:</strong> מגמה מתחזקת של צרכנות חברתית ואחריות
            תאגידית (ESG).
          </li>
        </ul>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "4")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 4 - מטריצת SWOT
        </div>
        <div>
          <strong>פירוט:</strong> ריבוע ההזדמנויות
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 4. איומים
export function ThreatsContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>איומים (Threats)</h2>
      <div>
        <p>הסיכונים הסביבתיים שעלינו להיערך אליהם:</p>
        <ul style={{ paddingRight: "20px", lineHeight: "1.6" }}>
          <li>
            <strong>תחרות עזה:</strong> השוק הארגוני הוא "אוקיינוס אדום" עם
            מתחרים רבים.
          </li>
          <li>
            <strong>זמן חדירה:</strong> בניית אמון וקשרים עם חברות גדולות לוקחת
            זמן.
          </li>
          <li>
            <strong>קושי בבידול:</strong> עמותות רבות מתחרות על אותם תקציבי
            רווחה ותרומות.
          </li>
        </ul>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "4")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 4 - מטריצת SWOT
        </div>
        <div>
          <strong>פירוט:</strong> ריבוע האיומים
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export default function ModalContant({ selectedSwotPart, onNavigate }) {
  switch (selectedSwotPart) {
    case "strengths":
      return <StrengthsContent onNavigate={onNavigate} />;
    case "weaknesses":
      return <WeaknessesContent onNavigate={onNavigate} />;
    case "opportunities":
      return <OpportunitiesContent onNavigate={onNavigate} />;
    case "threats":
      return <ThreatsContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
