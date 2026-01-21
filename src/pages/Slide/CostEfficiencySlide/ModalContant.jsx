import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. מכרז דפוס (6.1)
export function TenderContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מכרז דפוס 2026">
      <ModalText>
        מהלך אסטרטגי של יציאה למכרז מרוכז מול 6 ספקים מובילים (כגון דפוס שי,
        במבליק, גרפוס ועוד).
      </ModalText>
      <ModalText>
        <strong>התוצאה:</strong> יישור קו במחירים והוזלה משמעותית של עלויות
        הייצור (עד 60% במוצרים מסוימים).
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 6.1 - מכרז הפקות דפוס"
        details="רשימת ספקים ומוצרים במכרז"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6.1"
      />
    </SlideModalContainer>
  );
}

// 2. חיסכון בעלויות
export function SavingContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מודל החיסכון">
      <ModalText>
        מעבר מרכישות ספורדיות לרכש אסטרטגי שנתי בכמויות גדולות (500/1000
        יחידות).
      </ModalText>
      <ModalText>
        השוואת מחירים קפדנית בין ספקים מבטיחה את המחיר הטוב ביותר לכל מוצר, מה
        שמתרגם לחיסכון ישיר של כ-150,000 ש"ח בשנה.
      </ModalText>
      <SourceBox
        document="טבלאות השוואת מחירים"
        location="שקופית 4 (טבלת 500 יח')"
        details="נתונים משווים בין ספקים"
        onNavigate={onNavigate}
        slideId={4}
      />
    </SlideModalContainer>
  );
}

// 3. רווחיות (6.2)
export function ProfitabilityContent({ onNavigate }) {
  return (
    <SlideModalContainer title="שיפור הרווחיות">
      <ModalText>הגדלת המרווח (Margin) בכל מכירה בזכות הפחתת עלויות הייצור.</ModalText>
      <ModalText>
        <strong>דוגמה:</strong> מחברת A5 שעלתה בעבר לייצר כ-20 ש"ח, עולה כיום
        15 ש"ח ונמכרת ב-29 ש"ח, מה שמשאיר רווח של כ-50%.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 6.2 - מוצרים מבוססי עיצוב"
        details="דוגמאות לרווחיות מוצרים"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6.2"
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ selectedItem, onNavigate }) {
  switch (selectedItem) {
    case "tender":
      return <TenderContent onNavigate={onNavigate} />;
    case "saving":
      return <SavingContent onNavigate={onNavigate} />;
    case "profitability":
      return <ProfitabilityContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
