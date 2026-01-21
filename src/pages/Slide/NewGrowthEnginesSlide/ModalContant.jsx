import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. מכירות קמעונאיות (7.2)
export function RetailContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מכירות קמעונאיות (B2B)">
      <ModalText>הפצת מוצרי המותג לרשתות שיווק וחנויות (מודל סיטונאי).</ModalText>
      <ModalText>
        מאפשר הגעה לקהל יעד עצום ללא עלויות תפעול חנויות פיזיות שלנו.
      </ModalText>
      <ModalText>
        <strong>פוטנציאל:</strong> 175,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 7.2 - מכירות קמעונאיות"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.2"
      />
    </SlideModalContainer>
  );
}

// 2. התו החברתי (7.3)
export function SocialLabelContent({ onNavigate }) {
  return (
    <SlideModalContainer title='"התו החברתי"'>
      <ModalText>
        תו קנייה לארגונים (מתנות עובדים) המכובד אך ורק בעסקים חברתיים.
      </ModalText>
      <ModalText>
        מודל Win-Win: הארגון מקבל ערך חברתי (ESG), העובד מקבל מתנה ערכית,
        והעסקים החברתיים מקבלים הכנסה.
      </ModalText>
      <ModalText>
        <strong>פוטנציאל:</strong> 250,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 7.3 - התו החברתי"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.3"
      />
    </SlideModalContainer>
  );
}

// 3. מיזמי חוויה (7.5)
export function ExperienceContent({ onNavigate }) {
  return (
    <SlideModalContainer title='מיזם "יום בחיי"'>
      <ModalText>סדנאות, הרצאות וסיורים במרכזי העמותה.</ModalText>
      <ModalText>
        המוצר: מפגש אנושי ובלתי אמצעי עם אנשים עם מוגבלויות, המייצר חיבור רגשי
        ופותח דלת למכירת מוצרים ושיתופי פעולה.
      </ModalText>
      <ModalText>
        <strong>פוטנציאל:</strong> 80,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 7.5 - מיזם "יום בחיי"'
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.5"
      />
    </SlideModalContainer>
  );
}

// 4. להקת שק"ל (7.4)
export function BandContent({ onNavigate }) {
  return (
    <SlideModalContainer title='להקת שק"ל'>
      <ModalText>
        הרכב מוזיקלי מקצועי של אנשים עם מוגבלויות המופיע באירועי חברה וטקסים.
      </ModalText>
      <ModalText>מוצר חווייתי המשלב איכות תרבותית עם מסר חברתי חזק.</ModalText>
      <ModalText>
        <strong>פוטנציאל:</strong> 35,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 7.4 - להקת שק"ל'
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.4"
      />
    </SlideModalContainer>
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
