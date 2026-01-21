import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. פורים (5.2)
export function PurimContent({ onNavigate }) {
  return (
    <SlideModalContainer title="פורים: משלוחי מנות">
      <ModalText>
        מודל "Cofix" לבתי ספר: משלוחי מנות במחיר נגיש (15 ש"ח), עם רווח נקי של
        5 ש"ח ליחידה.
      </ModalText>
      <ModalText>
        <strong>יעד:</strong> 50 בתי ספר, 10,000 משלוחים.
      </ModalText>
      <ModalText>
        <strong>צפי הכנסות:</strong> 150,000 ש"ח.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 5.2 - מבצע פורים"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="5.2"
      />
    </SlideModalContainer>
  );
}

// 2. ראש השנה (5.1)
export function RoshHashanahContent({ onNavigate }) {
  return (
    <SlideModalContainer title="ראש השנה: שיא הפעילות">
      <ModalText>מכירת מארזי שי יוקרתיים לארגונים וחברות (B2B).</ModalText>
      <ModalText>
        <strong>יעד:</strong> 30 חברות גדולות, כ-2,000 מארזים.
      </ModalText>
      <ModalText>
        <strong>צפי הכנסות:</strong> 200,000 ש"ח.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 5.1 - ערכות חג"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="5.1"
      />
    </SlideModalContainer>
  );
}

// 3. פסח (5.1)
export function PassoverContent({ onNavigate }) {
  return (
    <SlideModalContainer title="פסח: מתנות לעובדים">
      <ModalText>מכירת מארזים והגדות של פסח מעוצבות ("הגדת רפאל").</ModalText>
      <ModalText>
        <strong>יעד:</strong> 30 חברות, כ-2,000 מארזים.
      </ModalText>
      <ModalText>
        <strong>צפי הכנסות:</strong> 150,000 ש"ח.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 5.1 - ערכות חג"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="5.1"
      />
    </SlideModalContainer>
  );
}

// 4. שמחת תורה (5.3)
export function SimchatTorahContent({ onNavigate }) {
  return (
    <SlideModalContainer title='שמחת תורה: שקיות ממתקים'>
      <ModalText>מכירת שקיות ממתקים ("פקעלך") לבתי כנסת ומוסדות.</ModalText>
      <ModalText>
        <strong>יעד:</strong> 50 בתי כנסת, 7,500 שקיות.
      </ModalText>
      <ModalText>
        <strong>צפי הכנסות:</strong> 112,500 ש"ח.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 5.3 - מבצע שמחת תורה"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="5.3"
      />
    </SlideModalContainer>
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
