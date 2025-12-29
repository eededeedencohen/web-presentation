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

// 1. לוגיסטיקה ושילוח
export function LogisticsContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>לוגיסטיקה ושילוח</h2>
      <div>
        <p>כיום אנו מבצעים משלוחים ספורדיים בעלות גבוהה.</p>
        <p>
          <strong>הצורך:</strong> התקשרות עם חברת הפצה ורכישת "בנק משלוחים" כדי
          להוזיל עלויות ולייעל את השילוח ללקוחות עסקיים ופרטיים.
        </p>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "8")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 8 - צרכים ומשאבים
        </div>
        <div>
          <strong>פירוט:</strong> סעיף לוגיסטיקה
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 2. פתרונות אחסון
export function StorageContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>פתרונות אחסון</h2>
      <div>
        <p>
          בעקבות השינויים במבנה (הורדת מקום האחסון בקומה 0), נוצר מחסור בשטח
          אחסון זמין.
        </p>
        <p>
          <strong>הצורך:</strong> מציאת פתרון אחסון נוסף ונגיש למלאי הגדל (חומרי
          גלם ומוצרים מוגמרים).
        </p>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "8")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 8 - צרכים ומשאבים
        </div>
        <div>
          <strong>פירוט:</strong> סעיף אחסון
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

// 3. כוח אדם
export function ManpowerContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>כוח אדם</h2>
      <div>
        <p>כדי לעמוד ביעדי המכירות והתפעול, נדרש חיזוק לצוות הקיים.</p>
        <p>
          <strong>הצורך:</strong>
          <br />
          1. איש מכירות טלפוני נוסף (Telemarketing).
          <br />
          2. אחראי לוגיסטיקה (בניהולו של אייל) לטיפול בהזמנות, שילוח ושירות טכני
          לרשתות.
        </p>
      </div>

      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "8")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 8 - צרכים ומשאבים
        </div>
        <div>
          <strong>פירוט:</strong> סעיף כוח אדם
        </div>
        <ClickHint />
      </div>
    </div>
  );
}

export function TechnologyContent({ onNavigate }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>מערכות טכנולוגיות</h2>
      <div>
        <p>שדרוג המערכות התומכות כדי לייעל את המכירה והתפעול.</p>
        <p>
          <strong>הצורך:</strong> הטמעת מערכת CRM לניהול לקוחות, ומערכת לניהול
          מלאי ממוחשבת ומדויקת.
        </p>
      </div>
      <div style={sourceBoxStyle} onClick={() => onNavigate(6, "8")}>
        <div>
          <strong>מקור:</strong> תכנון שנתי 2026
        </div>
        <div>
          <strong>מיקום:</strong> פרק 8 ("צרכים ומשאבים")
        </div>
        <div>
          <strong>פירוט:</strong> סעיף טכנולוגיה
        </div>
        <ClickHint />
      </div>
    </div>
  );
}
export default function ModalContant({ selectedNeed, onNavigate }) {
  switch (selectedNeed) {
    case "distribution": // התקשרות עם חברת הפצה (לפי ה-Data שלך)
      return <LogisticsContent onNavigate={onNavigate} />;

    case "storage": // פתרון אחסון נוסף (לפי ה-Data שלך)
      return <StorageContent onNavigate={onNavigate} />;

    case "logistics": // איש מכירות טלפוני נוסף (לפי ה-Data שלך)
    case "technology": // אחראי לוגיסטיקה (לפי ה-Data שלך)
      // שניהם קשורים לכוח אדם
      return <ManpowerContent onNavigate={onNavigate} />;

    default:
      return null;
  }
}
