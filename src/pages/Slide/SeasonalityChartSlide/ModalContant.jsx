import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

export function ChartContent({ onNavigate }) {
  return (
    <SlideModalContainer title="עונתיות המכירות">
      <ModalText>
        הגרף מציג את תנודות ההכנסה הצפויות לאורך השנה, עם דגש על תקופות השיא
        (חגים).
      </ModalText>
      <ModalText>
        <strong>פיקים מרכזיים:</strong> מרץ (פורים), אפריל (פסח), ספטמבר (ראש
        השנה).
      </ModalText>
      <ModalText>
        <strong>יעד:</strong> איזון הגרף באמצעות הכנסות שוטפות בחודשים ה"חלשים".
      </ModalText>

      <SourceBox
        document="טבלת צפי פיננסי 2026"
        location="שקופית 2"
        details="נתונים מספריים חודשיים"
        onNavigate={onNavigate}
        slideId={2}
      />

      <SourceBox
        document="תוכנית עבודה שנתית"
        location="שקופית 3"
        details="פעולות לכל חודש"
        onNavigate={onNavigate}
        slideId={3}
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ onNavigate }) {
  return <ChartContent onNavigate={onNavigate} />;
}
