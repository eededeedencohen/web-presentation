import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

export function B2BModelContent({ onNavigate }) {
  return (
    <SlideModalContainer title="המודל הקמעונאי (B2B)">
      <ModalText>
        שינוי תפיסה ממכירה ישירה לצרכן למכירה סיטונאית לרשתות שיווק מובילות.
      </ModalText>
      <ModalText>
        במסגרת המודל, אנו מייצרים/מייבאים מוצרים ממותגים ומוכרים אותם בכמויות
        מסחריות לרשתות כמו רמי לוי, שופרסל וחנן, המפיצות אותם לקהל הרחב.
      </ModalText>
      <ModalText>
        <strong>פוטנציאל רווח:</strong> כ-175,000 ש"ח בשנה (מבוסס על 5 שיתופי
        פעולה גדולים).
      </ModalText>

      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 7.2 - מכירות קמעונאיות"
        details="אסטרטגיה, מודל עסקי ותחזית רווח"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.2"
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ selectedContent, onNavigate }) {
  // במקרה הזה יש רק תוכן אחד מרכזי
  return <B2BModelContent onNavigate={onNavigate} />;
}
