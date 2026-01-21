import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. לוגיסטיקה ושילוח
export function LogisticsContent({ onNavigate }) {
  return (
    <SlideModalContainer title="לוגיסטיקה ושילוח">
      <ModalText>כיום אנו מבצעים משלוחים ספורדיים בעלות גבוהה.</ModalText>
      <ModalText>
        <strong>הצורך:</strong> התקשרות עם חברת הפצה ורכישת "בנק משלוחים" כדי
        להוזיל עלויות ולייעל את השילוח ללקוחות עסקיים ופרטיים.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 8 - צרכים ומשאבים"
        details="סעיף לוגיסטיקה"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="8"
      />
    </SlideModalContainer>
  );
}

// 2. פתרונות אחסון
export function StorageContent({ onNavigate }) {
  return (
    <SlideModalContainer title="פתרונות אחסון">
      <ModalText>
        בעקבות השינויים במבנה (הורדת מקום האחסון בקומה 0), נוצר מחסור בשטח
        אחסון זמין.
      </ModalText>
      <ModalText>
        <strong>הצורך:</strong> מציאת פתרון אחסון נוסף ונגיש למלאי הגדל (חומרי
        גלם ומוצרים מוגמרים).
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 8 - צרכים ומשאבים"
        details="סעיף אחסון"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="8"
      />
    </SlideModalContainer>
  );
}

// 3. כוח אדם
export function ManpowerContent({ onNavigate }) {
  return (
    <SlideModalContainer title="כוח אדם">
      <ModalText>כדי לעמוד ביעדי המכירות והתפעול, נדרש חיזוק לצוות הקיים.</ModalText>
      <ModalText>
        <strong>הצורך:</strong>
        <br />
        1. איש מכירות טלפוני נוסף (Telemarketing).
        <br />
        2. אחראי לוגיסטיקה (בניהולו של אייל) לטיפול בהזמנות, שילוח ושירות טכני
        לרשתות.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 8 - צרכים ומשאבים"
        details="סעיף כוח אדם"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="8"
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ selectedNeed, onNavigate }) {
  switch (selectedNeed) {
    case "distribution":
      return <LogisticsContent onNavigate={onNavigate} />;
    case "storage":
      return <StorageContent onNavigate={onNavigate} />;
    case "logistics":
    case "technology":
      return <ManpowerContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
