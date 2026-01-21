import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. כיבוש הפסגות (חגים)
export function PeaksContent({ onNavigate }) {
  return (
    <SlideModalContainer title="כיבוש הפסגות">
      <ModalText>
        מיקוד מאמצים ב"פיקים" העונתיים הגדולים (ראש השנה, פסח ופורים), המהווים
        את מנוע ההכנסה המרכזי והמיידי של החנות.
      </ModalText>
      <ModalText>
        האסטרטגיה כוללת שיווק אקטיבי לחברות (B2B), יצירת קטלוגים ייעודיים לכל
        חג, וניהול מלאי חכם כדי למקסם רווחים בתקופות השיא.
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 5.1 ("ערכות חג")'
        details="נתוני צפי הכנסות לחגים"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="5.1"
      />
    </SlideModalContainer>
  );
}

// 2. צמיחה משולבת (חברתי-עסקי)
export function IntegratedContent({ onNavigate }) {
  return (
    <SlideModalContainer title="צמיחה משולבת">
      <ModalText>
        מינוף המודל הייחודי שלנו המשלב ערך חברתי עם הצלחה עסקית. זהו הבידול
        העיקרי שלנו מול מתחרים בשוק.
      </ModalText>
      <ModalText>
        האסטרטגיה היא להפוך את האדם עם המוגבלות לשותף מלא – יוצר, עובד ומשפיע.
        חיבור זה יוצר ערך מוסף ללקוחות (ESG/CSR) ומאפשר פיתוח מוצרים כמו "התו
        החברתי" וסדנאות "יום בחיי".
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 1 ("חזון ומטרות על")'
        details="מנוע צמיחה חברתי-עסקי"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="1"
      />
    </SlideModalContainer>
  );
}

// 3. בניית הבסיס (שוטף/Mass)
export function BaseContent({ onNavigate }) {
  return (
    <SlideModalContainer title="בניית הבסיס">
      <ModalText>
        יצירת זרם הכנסות יציב וקבוע לאורך כל השנה (ARR), כדי להפחית את התלות
        במכירות החגים בלבד.
      </ModalText>
      <ModalText>
        האסטרטגיה מתבססת על מוצרי Mass Market, מכרזי דפוס גדולים, ומכירה
        קמעונאית שוטפת בחנויות וברשתות, המבטיחים תזרים מזומנים גם בחודשים
        "רגילים".
      </ModalText>
      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 6 ("הפקות דפוס ו-Mass")'
        details="בניית הכנסה שוטפת"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="6"
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ selectedStrategy, onNavigate }) {
  switch (selectedStrategy) {
    case "peaks":
      return <PeaksContent onNavigate={onNavigate} />;
    case "integrated":
      return <IntegratedContent onNavigate={onNavigate} />;
    case "base":
      return <BaseContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
