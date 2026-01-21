import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. מחברות A5
export function NotebooksContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מוצר דגל: מחברות מעוצבות">
      <ModalText>
        מחברות A5 הן מוצר "Mass" קלאסי: עלות ייצור נמוכה (כ-15 ש"ח) ומחיר מכירה
        אטרקטיבי (29 ש"ח), המשאיר רווח גולמי של כ-50%.
      </ModalText>
      <ModalText>מתאים מאוד למכירה בארגונים, כנסים וחנויות.</ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 6.2 - מוצרי דפוס מבוססי עיצוב"
        details="דוגמאות רווחיות (מחברות)"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6.2"
      />
    </SlideModalContainer>
  );
}

// 2. לוחות שנה
export function CalendarContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מוצר עונתי: לוחות שנה">
      <ModalText>
        מוצר חובה לכל ארגון בתחילת שנה. פוטנציאל הזמנות גדולות (למשל: 3,000
        יחידות לקרן רום).
      </ModalText>
      <ModalText>
        עלות נמוכה (7 ש"ח), מכירה ב-15-25 ש"ח, רווח גבוה ליחידה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 6.2 - מוצרי דפוס מבוססי עיצוב"
        details="דוגמאות רווחיות (לוחות שנה)"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6.2"
      />
    </SlideModalContainer>
  );
}

// 3. סיכום פוטנציאל
export function SummaryContent({ onNavigate }) {
  return (
    <SlideModalContainer title="פוטנציאל הכנסה שוטף">
      <ModalText>
        בניית בסיס הכנסות יציב ("לחם וחמאה") שאינו תלוי בחגים.
      </ModalText>
      <ModalText>
        <strong>יעד שנתי:</strong> הכנסות של 500,000 ש"ח ממוצרי Mass ודפוס שוטף.
      </ModalText>
      <ModalText>
        <strong>רווח צפוי:</strong> כ-350,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 6.3 - מוצרי Mass (שוטף)"
        details="תחזית שנתית וחודשית"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6.3"
      />
    </SlideModalContainer>
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
