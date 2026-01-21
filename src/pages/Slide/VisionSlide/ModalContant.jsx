import React from "react";
import {
  SlideModalContainer,
  ModalText,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

// 1. רכיב החזון
export function VisionContent({ onNavigate }) {
  return (
    <SlideModalContainer title="הצהרת החזון">
      <ModalText>
        חנות המתנות שואפת להוות בית יוצר המשקף לעולם את הכישרון, היצירתיות
        והעוצמה האנושית של אמני ויוצרי שק"ל. החזון הוא להפוך את החנות לפלטפורמה
        המאפשרת לאנשים עם מוגבלויות לממש את הפוטנציאל המקצועי שלהם מתוך תשוקה
        ליצירה.
      </ModalText>

      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 1 ("חזון ומטרות על")'
        details='תחת "חזון", פסקאות 1-2'
        onNavigate={onNavigate}
        slideId="1"
      />
    </SlideModalContainer>
  );
}

// 2. רכיב עצמאות כלכלית
export function FinancialContent({ onNavigate }) {
  return (
    <SlideModalContainer title="עצמאות כלכלית">
      <ModalText>
        החזון הכלכלי הוא יצירת מקור הכנסה עצמאי ויציב לעמותה, שיוביל לצמצום
        התלות בתקציבים ממשלתיים ובמקורות ציבוריים. עצמאות זו תאפשר פיתוח שירותים
        חדשניים והעשרת מסגרות התעסוקה. מטרת העל היא יצירת גוף עם הכנסות של לפחות
        1,000,000 ש"ח בשנה.
      </ModalText>

      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 1 ("חזון ומטרות על")'
        details='תחת "חזון", פסקה 7'
        onNavigate={onNavigate}
        slideId="1"
      />
    </SlideModalContainer>
  );
}

// 3. רכיב משמעות
export function MeaningContent({ onNavigate }) {
  return (
    <SlideModalContainer title="משמעות">
      <ModalText>
        חנות חזקה ורווחית תגדיל את תחושת המשמעות והשייכות של אנשי העמותה. המודל
        ממחיש את יכולתם להיות יצרניים ומשפיעים בכלכלה הישראלית. כל רכישה היא
        הצהרה על חברה טובה וצודקת יותר.
      </ModalText>

      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 1 ("חזון ומטרות על")'
        details='תחת "חזון", פסקה 6'
        onNavigate={onNavigate}
        slideId="1"
      />
    </SlideModalContainer>
  );
}

// 4. רכיב מנוע חשיפה
export function ExposureContent({ onNavigate }) {
  return (
    <SlideModalContainer title="מנוע חשיפה">
      <ModalText>
        כיום קיים פער גדול בין היקף העשייה וההשפעה של עמותת שק"ל לבין ההיכרות של
        הציבור הרחב איתה. החנות משמשת כ"מנוע חשיפה" שמטרתו להגדיל את הנראות
        הציבורית, לחזק את המותג "שק"ל" בשיח החברתי ולהציג את יכולותיהם של אנשים
        עם מוגבלויות כשותפים מלאים ומשפיעים.
      </ModalText>

      <SourceBox
        document="תכנון שנתי 2026"
        location='פרק 1 ("חזון ומטרות על")'
        details='תחת "חזון", פסקאות 3-5'
        onNavigate={onNavigate}
        slideId="1"
      />
    </SlideModalContainer>
  );
}

// קבלת ה-prop החדש onNavigate
export default function ModalContant({ selectedVision, onNavigate }) {
  switch (selectedVision) {
    case "vision":
      return <VisionContent onNavigate={onNavigate} />;
    case "financial":
      return <FinancialContent onNavigate={onNavigate} />;
    case "meaning":
      return <MeaningContent onNavigate={onNavigate} />;
    case "exposure":
      return <ExposureContent onNavigate={onNavigate} />;
    default:
      return null;
  }
}
