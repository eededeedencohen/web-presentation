# SlideModalContent - קומפוננט משותף למודלים

## 🎯 מטרה

קומפוננט מרכזי שמאחד את כל קבצי ה-`ModalContant.jsx` המפוזרים בפרויקט (12 קבצים!)
למקום אחד עם עיצוב אחיד ותמיכה מלאה במובייל.

## 📦 מיקום

```
src/components/SlideModal/
├── SlideModalContent.jsx       # הקומפוננטים
└── SlideModalContent.module.css # העיצוב (מותאם למובייל)
```

## 🔧 שימוש

### דוגמה בסיסית

```jsx
import {
  SlideModalContainer,
  ModalText,
  ModalSection,
  ModalList,
  SourceBox,
} from "../../../components/SlideModal/SlideModalContent";

function MyModalContent({ onNavigate }) {
  return (
    <SlideModalContainer title="כותרת המודל">
      <ModalText>טקסט הסבר כללי על הנושא...</ModalText>

      <ModalSection title="סעיף משנה">
        <ModalList
          items={["פריט ראשון ברשימה", "פריט שני ברשימה", "פריט שלישי ברשימה"]}
        />
      </ModalSection>

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
```

## 📚 רכיבים זמינים

### 1. `SlideModalContainer`

מיכל ראשי עם כותרת וגלילה

```jsx
<SlideModalContainer title="כותרת המודל">{children}</SlideModalContainer>
```

### 2. `ModalText`

פסקת טקסט רגילה

```jsx
<ModalText>תוכן הטקסט...</ModalText>
```

### 3. `ModalSection`

סעיף עם כותרת משנה

```jsx
<ModalSection title="כותרת הסעיף">{children}</ModalSection>
```

### 4. `ModalList`

רשימה ממוספרת או לא ממוספרת

```jsx
<ModalList items={["פריט 1", "פריט 2", "פריט 3"]} ordered={false} />
```

### 5. `SourceBox`

תיבת מקור עם קישור למסמך מלא

```jsx
<SourceBox
  document="שם המסמך" // חובה
  location="מיקום במסמך" // חובה
  details="פרטים נוספים" // אופציונלי
  onNavigate={onNavigate} // פונקציה - אם קיימת מוסיפה clickable
  slideId={6} // מספר השקופית במסמך
  sectionId="7.2" // מזהה הסעיף במסמך (אופציונלי)
/>
```

## 🔄 קבצים שצריכים רפקטור

### ✅ כבר עודכן:

- `src/pages/Slide/B2BExpansionSlide/ModalContant.jsx`

### ⏳ ממתינים לעדכון (11 קבצים):

1. `src/pages/Slide/VisionSlide/ModalContant.jsx`
2. `src/pages/Slide/SwotAnalysisSlide/ModalContant.jsx`
3. `src/pages/Slide/StrategySlide/ModalContant.jsx`
4. `src/pages/Slide/SocialLabelSlide/ModalContant.jsx`
5. `src/pages/Slide/SeasonalityChartSlide/ModalContant.jsx`
6. `src/pages/Slide/ResourceNeedsSlide/ModalContant.jsx`
7. `src/pages/Slide/NewGrowthEnginesSlide/ModalContant.jsx`
8. `src/pages/Slide/MassMarketSlide/ModalContant.jsx`
9. `src/pages/Slide/HolidayRevenueSlide/ModalContant.jsx`
10. `src/pages/Slide/CostEfficiencySlide/ModalContant.jsx`
11. `src/pages/Slide/BudgetSummarySlide/ModalContant.jsx`

## 🎨 יתרונות

1. **קוד נקי** - כל ה-inline styles הוסרו
2. **עיצוב אחיד** - כל המודלים נראים אותו דבר
3. **תמיכה במובייל** - כולל media queries אוטומטיים
4. **קל לתחזוקה** - שינוי במקום אחד משפיע על כולם
5. **גמישות** - ניתן לשלב את הרכיבים בכל דרך

## 📝 הערות

- כל הרכיבים מותאמים אוטומטית למובייל
- העיצוב עקבי עם שאר הפרויקט (צבעים, פונטים)
- ניתן להוסיף רכיבים נוספים לפי הצורך
