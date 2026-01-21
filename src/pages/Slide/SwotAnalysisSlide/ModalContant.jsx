import React from "react";
import {
  SlideModalContainer,
  ModalText,
  ModalList,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. חוזקות
export function StrengthsContent({ onNavigate }) {
  return (
    <SlideModalContainer title="חוזקות (Strengths)">
      <ModalText>הנכסים הפנימיים המרכזיים שלנו המאפשרים לנו להצליח:</ModalText>
      <ModalList
        items={[
          "מסר חברתי חזק: חיבור עמוק לערכי תרומה לקהילה המהווה מנוע מכירה משמעותי.",
          "מוניטין וותק: ארגון מבוסס ומוכר, במיוחד באזור ירושלים.",
          "תשתיות וצוות: מערך לוגיסטי קיים וכוח אדם איכותי (יקיר, אייל, מתנדבים).",
        ]}
      />
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 4 - מטריצת SWOT"
        details="ריבוע החוזקות"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="4"
      />
    </SlideModalContainer>
  );
}

// 2. חולשות
export function WeaknessesContent({ onNavigate }) {
  return (
    <SlideModalContainer title="חולשות (Weaknesses)">
      <ModalText>האתגרים הפנימיים שעלינו לנהל ולשפר:</ModalText>
      <ModalList
        items={[
          "כוח ייצור: יכולת ייצור מוגבלת (לא תעשייתית) וחלקית.",
          "בירוקרטיה: תהליכים ארגוניים איטיים וצורך באישורים מרובים.",
          "גמישות פיננסית: מבנה תקציבי קשיח המקשה על תגובה מהירה לשינויים.",
        ]}
      />
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 4 - מטריצת SWOT"
        details="ריבוע החולשות"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="4"
      />
    </SlideModalContainer>
  );
}

// 3. הזדמנויות
export function OpportunitiesContent({ onNavigate }) {
  return (
    <SlideModalContainer title="הזדמנויות (Opportunities)">
      <ModalText>מנועי הצמיחה החיצוניים שמחכים למימוש:</ModalText>
      <ModalList
        items={[
          "פוטנציאל לא ממומש: השוק רחוק מלהיות רווי, יש מקום עצום לגדילה.",
          "מיתוג ושיווק: הציבור צמא למוצרים עם ערך, והמותג שלנו טרם מוצה.",
          "רצון לתרום: מגמה מתחזקת של צרכנות חברתית ואחריות תאגידית (ESG).",
        ]}
      />
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 4 - מטריצת SWOT"
        details="ריבוע ההזדמנויות"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="4"
      />
    </SlideModalContainer>
  );
}

// 4. איומים
export function ThreatsContent({ onNavigate }) {
  return (
    <SlideModalContainer title="איומים (Threats)">
      <ModalText>הסיכונים הסביבתיים שעלינו להיערך אליהם:</ModalText>
      <ModalList
        items={[
          "תחרות עזה: השוק הארגוני הוא \"אוקיינוס אדום\" עם מתחרים רבים.",
          "זמן חדירה: בניית אמון וקשרים עם חברות גדולות לוקחת זמן.",
          "קושי בבידול: עמותות רבות מתחרות על אותם תקציבי רווחה ותרומות.",
        ]}
      />
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 4 - מטריצת SWOT"
        details="ריבוע האיומים"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="4"
      />
    </SlideModalContainer>
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
