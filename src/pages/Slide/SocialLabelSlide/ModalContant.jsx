import React from "react";
import {
  SlideModalContainer,
  ModalText,
  ModalList,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

export function SocialLabelContent({ onNavigate }) {
  return (
    <SlideModalContainer title='"התו החברתי"'>
      <ModalText>
        פלטפורמה חדשנית המשלבת רווחה ארגונית עם ערך חברתי אמיתי.
      </ModalText>
      <ModalText>
        <strong>הקונספט:</strong> תו קנייה (בדומה ל"תו הזהב" או "BuyMe") המיועד
        לארגונים כמתנה לעובדים, אך מכובד <u>אך ורק</u> בעסקים המעסיקים אנשים עם
        מוגבלויות או בעלי תרומה חברתית מוכחת.
      </ModalText>
      <ModalText>
        <strong>מודל Win-Win-Win:</strong>
      </ModalText>
      <ModalList
        items={[
          "הארגון: עומד ביעדי אחריות תאגידית (ESG) ותורם לקהילה דרך תקציב הרווחה הקיים.",
          "העובד: נהנה ממתנה איכותית עם ערך מוסף ומשמעות.",
          "העסקים החברתיים: נהנים מתנועת לקוחות והכנסה.",
          "העמותה: מייצרת הכנסה משמעותית ממכירת התו ומעמלות סליקה.",
        ]}
      />
      <SourceBox
        document="תכנון שנתי 2026"
        location="פרק 7.3 - התו החברתי"
        details="אסטרטגיה מלאה, מודל עסקי ותחזית רווח"
        onNavigate={onNavigate}
        slideId={6}
        sectionId="7.3"
      />
    </SlideModalContainer>
  );
}

export default function ModalContant({ onNavigate }) {
  return <SocialLabelContent onNavigate={onNavigate} />;
}
