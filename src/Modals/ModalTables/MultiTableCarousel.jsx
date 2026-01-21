import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
// וודא שהנתיב הזה נכון בהתאם למבנה התיקיות
import AnnualPlanDoc from "../../pages/Slide/CoverSlide/AnnualPlanDoc";

// ==========================================
// 1. נתוני מלאי
// ==========================================
const inventoryData = [
  {
    col1: "מארזי תה שלוותי",
    col2: "-",
    col3: "27",
    col4: "40",
    col5: "₪1,080",
  },
  {
    col1: "פמוטים - פרחים ורודים",
    col2: "CAL-9",
    col3: "1,463",
    col4: "75",
    col5: "₪109,725",
  },
  {
    col1: "פמוטים - שבעת המינים",
    col2: "CAL-8",
    col3: "1,457",
    col4: "75",
    col5: "₪109,275",
  },
  {
    col1: "קערות במבוק - 7 המינים",
    col2: "BMB-1D",
    col3: "350",
    col4: "49",
    col5: "₪17,150",
  },
  {
    col1: "קערות במבוק - תבלין",
    col2: "BMB-6G",
    col3: "950",
    col4: "49",
    col5: "₪46,550",
  },
  {
    col1: "תחתית סירים - כשמגיעים",
    col2: "354",
    col3: "354",
    col4: "25",
    col5: "₪8,850",
  },
  {
    col1: "תחתית סירים - אני רותח",
    col2: "345",
    col3: "345",
    col4: "25",
    col5: "₪8,625",
  },
  {
    col1: "תחתית סירים - דגים צהוב",
    col2: "155",
    col3: "155",
    col4: "25",
    col5: "₪3,875",
  },
  {
    col1: "תחתית סירים - תוכי כחול",
    col2: "140",
    col3: "140",
    col4: "25",
    col5: "₪3,500",
  },
  {
    col1: "תחתית סירים - 7 המינים",
    col2: "1051",
    col3: "1,051",
    col4: "25",
    col5: "₪26,275",
  },
  {
    col1: "תחתית קפה - 7 המינים",
    col2: "987",
    col3: "987",
    col4: "59",
    col5: "₪58,233",
  },
  {
    col1: "תחתית קפה - דגים צהוב",
    col2: "622",
    col3: "622",
    col4: "59",
    col5: "₪36,698",
  },
  {
    col1: "תחתית קפה - קפה שחור",
    col2: "576",
    col3: "576",
    col4: "59",
    col5: "₪33,984",
  },
  {
    col1: "סט 3 קופ' במבוק",
    col2: "620",
    col3: "620",
    col4: "69",
    col5: "₪42,780",
  },
  { col1: "נטלה", col2: "720", col3: "720", col4: "39", col5: "₪28,080" },
  { col1: "כפות במבוק", col2: "950", col3: "950", col4: "29", col5: "₪27,550" },
  {
    col1: "מגש במבוק קטן",
    col2: "990",
    col3: "990",
    col4: "29",
    col5: "₪28,710",
  },
  {
    col1: "מגש במבוק גדול",
    col2: "1020",
    col3: "1,020",
    col4: "49",
    col5: "₪49,980",
  },
  {
    col1: 'הגדה של פסח "רפאל"',
    col2: "250",
    col3: "250",
    col4: "26",
    col5: "₪6,500",
  },
  {
    col1: 'הגדה "רפאל"- באהבה שק"ל',
    col2: "52",
    col3: "52",
    col4: "26",
    col5: "₪1,352",
  },
  {
    col1: "יקב ירושלים יין 750",
    col2: "30",
    col3: "30",
    col4: "25",
    col5: "₪750",
  },
  {
    col1: "גפרורים שבת שלום",
    col2: "10",
    col3: "10",
    col4: "15",
    col5: "₪150",
  },
  { col1: "פאזל אינשטיין", col2: "29", col3: "29", col4: "49", col5: "₪1,421" },
  {
    col1: "לבבות זרעי משאלות",
    col2: "600",
    col3: "600",
    col4: "15",
    col5: "₪9,000",
  },
  {
    col1: "נרות שולחן לבן גולמי",
    col2: "300",
    col3: "300",
    col4: "5",
    col5: "₪1,500",
  },
  { col1: "ראנר פסח", col2: "150", col3: "150", col4: "79", col5: "₪11,850" },
  { col1: "ראנר 7 המינים", col2: "40", col3: "40", col4: "79", col5: "₪3,160" },
  {
    col1: "סדר הדלקה חנוכה",
    col2: "250",
    col3: "250",
    col4: "10",
    col5: "₪2,500",
  },
  {
    col1: "כריות לב קטן רגיל/רקום",
    col2: "650",
    col3: "650",
    col4: "25",
    col5: "₪16,250",
  },
  {
    col1: "כריות לב גדול רגיל",
    col2: "100",
    col3: "100",
    col4: "30",
    col5: "₪3,000",
  },
  {
    col1: "כריות לב גדול רקום",
    col2: "100",
    col3: "100",
    col4: "35",
    col5: "₪3,500",
  },
  {
    col1: "שקיות בשמים 7 המינים",
    col2: "120",
    col3: "120",
    col4: "20",
    col5: "₪2,400",
  },
  {
    col1: "שקיות בשמים חלקות",
    col2: "451",
    col3: "451",
    col4: "10",
    col5: "₪4,510",
  },
  {
    col1: "שקיות אפיקומן חלקות",
    col2: "770",
    col3: "770",
    col4: "25",
    col5: "₪19,250",
  },
  { col1: "חנוכיות קרמיקה", col2: "10", col3: "10", col4: "65", col5: "₪650" },
  {
    col1: "שקיות בד סוב' לבן",
    col2: "1408",
    col3: "1,408",
    col4: "5",
    col5: "₪7,040",
  },
  {
    col1: "שקיות בד אורגנזה",
    col2: "200",
    col3: "200",
    col4: "5",
    col5: "₪1,000",
  },
  {
    col1: "כוסות תרמיות מעוצבות",
    col2: "50",
    col3: "50",
    col4: "25",
    col5: "₪1,250",
  },
  {
    col1: "סה''כ שווי מלאי",
    col2: "",
    col3: "19,530",
    col4: "",
    col5: "₪766,108",
  },
];

// ==========================================
// 2. צפי פיננסי 2026
// ==========================================
const financeData = [
  {
    col1: "ינואר",
    col2: "-",
    col3: "₪41,666",
    col4: "₪39,716",
    col5: "₪1,950",
  },
  {
    col1: "פברואר",
    col2: "-",
    col3: "₪41,666",
    col4: "₪39,716",
    col5: "₪1,950",
  },
  {
    col1: "מרץ",
    col2: "פורים",
    col3: "₪191,666",
    col4: "₪140,216",
    col5: "₪51,450",
  },
  {
    col1: "אפריל",
    col2: "פסח",
    col3: "₪191,666",
    col4: "₪115,216",
    col5: "₪76,450",
  },
  { col1: "מאי", col2: "-", col3: "₪41,666", col4: "₪39,716", col5: "₪1,950" },
  { col1: "יוני", col2: "-", col3: "₪41,666", col4: "₪39,716", col5: "₪1,950" },
  { col1: "יולי", col2: "-", col3: "₪41,666", col4: "₪39,716", col5: "₪1,950" },
  {
    col1: "אוגוסט",
    col2: "-",
    col3: "₪41,666",
    col4: "₪39,716",
    col5: "₪1,950",
  },
  {
    col1: "ספטמבר",
    col2: "ראש השנה",
    col3: "₪241,666",
    col4: "₪140,216",
    col5: "₪101,450",
  },
  {
    col1: "אוקטובר",
    col2: "שמחת תורה",
    col3: "₪154,166",
    col4: "₪115,216",
    col5: "₪38,950",
  },
  {
    col1: "נובמבר",
    col2: "-",
    col3: "₪41,666",
    col4: "₪39,716",
    col5: "₪1,950",
  },
  {
    col1: "דצמבר",
    col2: "-",
    col3: "₪41,666",
    col4: "₪39,716",
    col5: "₪1,950",
  },
  {
    col1: "סה''כ שנתי",
    col2: "",
    col3: "₪1,112,492",
    col4: "₪828,592",
    col5: "₪283,900",
  },
];

// ==========================================
// 3. תוכנית עבודה שנתית מפורטת (נתונים מלאים)
// ==========================================
const workPlanData = [
  {
    col1: "ינואר",
    col2: "₪1,950",
    col3: "אריזות הכנה לקראת חג פורים ופסח",
    col4: "שיווק אקטיבי: פנייה ללקוחות עבר לביצוע רכישה חוזרת וקבלת לידים חמים",
    col5: "הוספת 5 חברות חדשות",
  },
  {
    col1: "פברואר",
    col2: "₪1,950",
    col3: "אריזות הכנה לקראת חג פורים ופסח",
    col4: "שיווק אקטיבי: פנייה ללקוחות חדשים (לידים חדשים/ישנים), מינוף פניות נכנסות",
    col5: "הוספת 5 חברות, 25 בתי ספר",
  },
  {
    col1: "מרץ (פורים)",
    col2: "₪86,450",
    col3: "1. שילוח 50 הזמנות בתי ספר (10K משלוחים). 2. גבייה. 3. שילוח 15 הזמנות חברות (1,995 מארזים). 4. גבייה. 5. אריזה. 6. עדכון והזמנת מלאי.",
    col4: "פניות נכנסות מלקוחות חדשים וחוזרים ומינופם לרכישות וקבלת לידים נוספים",
    col5: "הוספת 5 חברות, 25 בתי ספר",
  },
  {
    col1: "אפריל (פסח)",
    col2: "₪106,450",
    col3: "1. פיתוח מוצרים חדשים. 2. בניית קטלוג. 3. ספירת מלאי.",
    col4: "ביצוע 200 שיחות עומק עם לקוחות לפסח (יעד: 15 גדולות, 30 בינוניות, 50 בתי ספר)",
    col5: "הוספת 3 חברות חדשות",
  },
  {
    col1: "מאי",
    col2: "₪1,950",
    col3: "1. פיתוח מוצרים חדשים. 2. בניית קטלוג. 3. ספירת מלאי.",
    col4: "שיווק אקטיבי: פנייה ללקוחות עבר וקבלת לידים",
    col5: "הוספת 3 חברות חדשות",
  },
  {
    col1: "יוני",
    col2: "₪1,950",
    col3: "1. פיתוח מוצרים חדשים. 2. בניית קטלוג. 3. ספירת מלאי.",
    col4: "שיווק אקטיבי ללקוחות חדשים ומינוף פניות נכנסות",
    col5: "הוספת 5 חברות חדשות",
  },
  {
    col1: "יולי",
    col2: "₪1,950",
    col3: "1. אריזות הכנה לקראת חג ראש השנה ושמחת תורה. 2. עדכון מלאים.",
    col4: "שיווק אקטיבי: פנייה ללקוחות עבר וקבלת לידים",
    col5: "הוספת 5 חברות חדשות",
  },
  {
    col1: "אוגוסט",
    col2: "₪1,950",
    col3: "1. אריזות הכנה לר''ה ושמחת תורה. 2. עדכון מלאים.",
    col4: "שיווק אקטיבי ללקוחות חדשים ומינוף פניות נכנסות",
    col5: "הוספת 5 חברות, 37 בתי כנסת",
  },
  {
    col1: "ספטמבר (ר''ה)",
    col2: "₪141,450",
    col3: "1. שילוח הזמנות ל-75 בתי כנסת (75K שקיות). 2. גבייה. 3. שילוח 15 הזמנות חברות. 4. גבייה ואריזה. 5. עדכון/הזמנת מלאי.",
    col4: "ביצוע 200 שיחות עומק עם לקוחות לר''ה (יעד: 15 גדולות, 30 בינוניות, 75 בתי כנסת)",
    col5: "הוספת 5 חברות, 37 בתי כנסת",
  },
  {
    col1: "אוקטובר (ש''ת)",
    col2: "₪65,200",
    col3: "1. פיתוח מוצרים חדשים. 2. בניית קטלוג. 3. ספירת מלאי.",
    col4: "שיווק אקטיבי: פנייה ללקוחות עבר וקבלת לידים",
    col5: "הוספת 3 חברות חדשות",
  },
  {
    col1: "נובמבר",
    col2: "₪1,950",
    col3: "1. פיתוח מוצרים חדשים. 2. בניית קטלוג. 3. ספירת מלאי.",
    col4: "שיווק אקטיבי ללקוחות חדשים ומינוף פניות נכנסות",
    col5: "הוספת 3 חברות חדשות",
  },
  {
    col1: "דצמבר",
    col2: "₪1,950",
    col3: "1. פיתוח מוצרים, בניית קטלוג, ספירת מלאי. 4. בניית תוכנית שנתית 2027.",
    col4: "ביצוע 200 שיחות עומק עם לקוחות לר''ה (יעד: 15 גדולות, 30 בינוניות, 75 בתי כנסת)",
    col5: "הוספת 3 חברות חדשות",
  },
];

// ==========================================
// 4. מכרז דפוס (500 יחידות)
// ==========================================
const quotes500Data = [
  {
    col1: "מחברות A5",
    col2: "ספירלה כריכה קשה",
    col3: "₪5,000",
    col4: "₪8,900",
    col5: "₪8,500",
    col6: "₪6,000",
  },
  {
    col1: "מחברות A4",
    col2: "ספירלה כריכה קשה",
    col3: "₪10,000",
    col4: "₪12,400",
    col5: "₪13,000",
    col6: "₪11,000",
  },
  {
    col1: "גלויה A5",
    col2: "נטול עץ 300ג'",
    col3: "₪320",
    col4: "₪550",
    col5: "₪250",
    col6: "₪450",
  },
  {
    col1: "לוח שנה שולחני",
    col2: "A5 ספירלה",
    col3: "₪2,990",
    col4: "₪2,450",
    col5: "-",
    col6: "₪4,500",
  },
  {
    col1: "מדבקות עגולות",
    col2: "3.7 / 6.5 ס''מ",
    col3: "₪190",
    col4: "₪200",
    col5: "₪240",
    col6: "₪250",
  },
  {
    col1: "פלאייר A5",
    col2: "צבעוני צד אחד",
    col3: "₪380",
    col4: "₪220",
    col5: "₪250",
    col6: "₪200",
  },
  {
    col1: "פתקי 'הילדה'",
    col2: "כרומו 180ג'",
    col3: "₪350",
    col4: "₪220",
    col5: "₪350",
    col6: "₪200",
  },
  {
    col1: "4 מגנטים",
    col2: "4.5X4.5 ס''מ",
    col3: "₪420",
    col4: "₪800",
    col5: "₪450",
    col6: "₪750",
  },
  {
    col1: "עטים עם לוגו",
    col2: "עט כדורי",
    col3: "₪1,560",
    col4: "₪1,900",
    col5: "₪1,500",
    col6: "₪600",
  },
  {
    col1: "שקיות אלבד",
    col2: "26X36 ס''מ",
    col3: "₪3,400",
    col4: "₪6,500",
    col5: "₪4,000",
    col6: "₪2,500",
  },
  {
    col1: "שקיות כותנה",
    col2: "26X36 צבעוני",
    col3: "₪3,200",
    col4: "₪5,000",
    col5: "₪4,500",
    col6: "₪5,500",
  },
  {
    col1: "כוסות חד''פ חם",
    col2: "8oz",
    col3: "₪450",
    col4: "₪750",
    col5: "₪400",
    col6: "-",
  },
  {
    col1: "הגדה 'רפאל'",
    col2: "כריכה רכה",
    col3: "₪10,150",
    col4: "₪9,300",
    col5: "₪11,500",
    col6: "₪6,650",
  },
];

// ==========================================
// 5. מכרז דפוס (1000 יחידות)
// ==========================================
const quotes1000Data = [
  {
    col1: "מחברות A5",
    col2: "ספירלה כריכה קשה",
    col3: "₪10,000",
    col4: "₪15,900",
    col5: "₪13,000",
    col6: "₪11,000",
  },
  {
    col1: "מחברות A4",
    col2: "ספירלה כריכה קשה",
    col3: "₪18,750",
    col4: "₪21,600",
    col5: "₪19,760",
    col6: "₪21,000",
  },
  {
    col1: "גלויה A5",
    col2: "נטול עץ 300ג'",
    col3: "₪580",
    col4: "₪840",
    col5: "₪400",
    col6: "₪800",
  },
  {
    col1: "לוח שנה שולחני",
    col2: "A5 ספירלה",
    col3: "₪5,500",
    col4: "₪4,750",
    col5: "-",
    col6: "₪8,000",
  },
  {
    col1: "מדבקות עגולות",
    col2: "3.7 / 6.5 ס''מ",
    col3: "₪270",
    col4: "₪350",
    col5: "₪390",
    col6: "₪320",
  },
  {
    col1: "פלאייר A5",
    col2: "צבעוני צד אחד",
    col3: "₪520",
    col4: "₪300",
    col5: "₪400",
    col6: "₪280",
  },
  {
    col1: "פתקי 'הילדה'",
    col2: "כרומו 180ג'",
    col3: "₪530",
    col4: "₪300",
    col5: "₪600",
    col6: "₪280",
  },
  {
    col1: "4 מגנטים",
    col2: "4.5X4.5 ס''מ",
    col3: "₪780",
    col4: "₪1,200",
    col5: "₪700",
    col6: "₪1,250",
  },
  {
    col1: "עטים עם לוגו",
    col2: "עט כדורי",
    col3: "₪2,650",
    col4: "₪2,600",
    col5: "₪1,600",
    col6: "₪850",
  },
  {
    col1: "שקיות אלבד",
    col2: "26X36 ס''מ",
    col3: "₪6,500",
    col4: "₪11,500",
    col5: "₪7,000",
    col6: "₪4,500",
  },
  {
    col1: "שקיות כותנה",
    col2: "26X36 צבעוני",
    col3: "₪5,200",
    col4: "₪7,000",
    col5: "₪8,000",
    col6: "₪10,000",
  },
  {
    col1: "כוסות חד''פ חם",
    col2: "8oz",
    col3: "₪850",
    col4: "₪1,200",
    col5: "₪750",
    col6: "₪680",
  },
  {
    col1: "הגדה 'רפאל'",
    col2: "כריכה רכה",
    col3: "₪11,950",
    col4: "₪18,000",
    col5: "₪11,500",
    col6: "₪10,920",
  },
];

// ==========================================
// הגדרת השקופיות
// ==========================================
export const MultiTableCarousel = ({
  onClose,
  onBackToSummary,
  initialSlideId = 1,
  targetDocSectionId = null,
}) => {
  // ... (אותו קוד לוגיקה של useState ו-nextSlide/prevSlide כמו קודם)
  // לצורך הקיצור אני כותב כאן את ה-return המעודכן:

  // --- שחזור לוגיקה פנימית בתוך הקומפוננטה ---
  // (אם תעתיק את הקוד הזה, תצטרך לוודא שהנתונים inventoryData וכו' מוגדרים למעלה)
  // הנה ה-Slides לצורך הקונטקסט (העתק מהקובץ המקורי שלך):
  const slides = [
    {
      id: 1,
      title: "📦 מלאי מחסנים ופוטנציאל הכנסה",
      headers: ["שם מוצר", 'מק"ט', "כמות", "מחיר יח'", "שווי"],
      data: inventoryData,
      type: "inventory",
    },
    {
      id: 2,
      title: "💰 צפי הכנסות ורווחים 2026",
      headers: ["חודש", "אירוע מרכזי", "הכנסות", "הוצאות", "רווח צפוי"],
      data: financeData,
      type: "finance",
    },
    {
      id: 3,
      title: "📅 תוכנית עבודה שנתית מפורטת",
      headers: [
        "חודש",
        "יעד רווח 26'",
        "פעולות תפעוליות",
        "פעולות שיווקיות",
        "יעד לקוחות",
      ],
      data: workPlanData,
      type: "workPlan",
    },
    {
      id: 4,
      title: "📑 השוואת מחירים (500 יח')",
      headers: ["מוצר", "מפרט", "חי הפקות", "דפוס שי", "גרפוס", "במבליק"],
      data: quotes500Data,
      type: "quotes",
    },
    {
      id: 5,
      title: "📑 השוואת מחירים (1000 יח')",
      headers: ["מוצר", "מפרט", "חי הפקות", "דפוס שי", "גרפוס", "במבליק"],
      data: quotes1000Data,
      type: "quotes",
    },
    {
      id: 6,
      title: "📘 תכנון אסטרטגי מלא 2026",
      headers: [],
      data: [],
      type: "document",
    },
  ];

  const getInitialIndex = () => {
    const index = slides.findIndex((s) => s.id === initialSlideId);
    return index !== -1 ? index : 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // מרחק מינימלי להחלקה (בפיקסלים)
  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentIndex(getInitialIndex());
  }, [initialSlideId]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // --- לוגיקה לניווט וגלילה ---
  const scrollContainerRef = React.useRef(null);
  const longPressTimer = React.useRef(null);
  const scrollInterval = React.useRef(null);
  const isLongPress = React.useRef(false);

  // משתנים לזיהוי לחיצה משולשת (Triple Click)
  const clickCount = React.useRef(0);
  const lastKeyTime = React.useRef(0);
  const lastKey = React.useRef(null);
  const navigationTimer = React.useRef(null); // טיימר לניווט מושהה

  const startScrolling = (direction) => {
    stopScrolling();
    scrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        // ArrowLeft -> direction="down" -> +15
        // ArrowRight -> direction="up" -> -15
        scrollContainerRef.current.scrollTop += direction === "down" ? 15 : -15;
      }
    }, 16);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        longPressTimer.current = setTimeout(() => {
          isLongPress.current = true;
          startScrolling("down"); // לחיצה ארוכה שמאלה -> גלילה למטה
        }, 300);
      } else if (e.key === "ArrowRight") {
        longPressTimer.current = setTimeout(() => {
          isLongPress.current = true;
          startScrolling("up"); // לחיצה ארוכה ימינה -> גלילה למעלה
        }, 300);
      }
    };

    const handleKeyUp = (e) => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }
      stopScrolling();

      if (!isLongPress.current) {
        const now = Date.now();
        const isSameKey = lastKey.current === e.key;
        // זמן מקסימלי בין לחיצות כדי שיחשבו כרצף
        const isQuick = now - lastKeyTime.current < 400;

        if (isSameKey && isQuick) {
          clickCount.current += 1;
        } else {
          clickCount.current = 1;
        }

        lastKey.current = e.key;
        lastKeyTime.current = now;

        // אם יש טיימר ניווט קודם - מבטלים אותו כי הגיעה עוד לחיצה
        if (navigationTimer.current) {
          clearTimeout(navigationTimer.current);
          navigationTimer.current = null;
        }

        if (clickCount.current === 3) {
          // פעולה ל-3 לחיצות: סגירה
          clickCount.current = 0;
          if (onClose) onClose();
        } else {
          // פעולה ללחיצה בודדת או כפולה - מפעילים טיימר
          // שמחכה לראות אם יגיעו עוד לחיצות
          navigationTimer.current = setTimeout(() => {
            // אם הטיימר הגיע לסופו, סימן שלא היו עוד לחיצות מהירות
            // אז מבצעים את הניווט (רק אם לא הגענו ל-3 לחיצות)
            // (אנחנו בתוך ה-callback של ה-timeout, אז currentCount לא בהכרח רלוונטי כאן,
            // אבל ה-cancel שעשינו למעלה מטפל בזה)

            if (e.key === "ArrowLeft") {
              // בחץ שמאלה - תמיד נרצה לבצע פעולה אחת בלבד גם אם לחץ פעמיים
              // אלא אם נרצה לתמוך בדאבל קליק בעתיד. כרגע: כל רצף < 3 מפעיל ניווט אחד?
              // או מפעיל כמספר הלחיצות?
              // הבקשה הייתה "שלא יראו שמדפדף 2 עמודים ואז סוגר".
              // אז אם לחץ 1 - דפדוף. אם לחץ 2 - דפדוף (פעמיים?). אם לחץ 3 - סגירה.
              // הדרך הכי נקיה: אחרי השהיה, בודקים כמה נלחץ.
              // אם clickCount היה 1 או 2 -> מנווטים כמספר הפעמים (או פעם אחת, תלוי בהתנהגות רצויה).
              // נניח שנרצה לבצע את סך כל הניווטים שנצברו (אם זה לא 3).
              // אבל המשתמש ביקש למנוע את המצב שרואים דפדוף ואז סגירה.
              // אז אם זה רצף שמוביל ל-3 -> לא עושים כלום עד ה-3.
              // אם זה נעצר ב-1 או 2 -> אז מבצעים.

              // נבצע ניווט כמספר הלחיצות שנצברו (אם < 3)
              // או פשוט נבצע ניווט אחד עבור כל לחיצה בודדת שהתמהמה?
              // הפשוט ביותר: אם הטיימר פוקע, מבצעים את הפעולה עבור הלחיצה הנוכחית.
              // אבל זה יגרום ל-2 דפדופים אם לחץ פעמיים.
              // בוא נעשה לוגיקה פשוטה: מבצעים את הניווט עבור הלחיצה הנוכחית
              // *רק* אם הטיימר לא בוטל.

              // אבל רגע, אם לחץ פעם שניה תוך כדי ה-400ms, הטיימר של הפעם הראשונה בוטל.
              // אז הניווט הראשון לא יקרה.
              // זה אומר שאם לחץ פעמיים מהר -> יווצר טיימר חדש. כשיפקע -> ינווט פעם אחת?
              // זה אומר שדאבל קליק יביא לניווט בודד. זה אולי רצוי ואולי לא.
              // אם המשתמש לוחץ מהר כדי לדפדף מהר, זה יפריע לו.
              // מצד שני, זה הפתרון היחיד ל"לחכות".
              // נלך על הפתרון שבו אם לוחצים מהר (פחות מ-3), זה מבצע את הפעולות בסוף.
              // כדי לתמוך ב"לחיצה מהירה לדפדוף מהר", אפשר לקצר את ה-timeout ל-250ms נניח,
              // או פשוט להשלים עם זה שיש דיליי קטן.
              // כאן אבצע את הפעולה עבור סך הלחיצות שנצברו (clickCount).

              for (let i = 0; i < clickCount.current; i++) {
                nextSlide();
              }
            } else if (e.key === "ArrowRight") {
              for (let i = 0; i < clickCount.current; i++) {
                prevSlide();
              }
            }
            // מאפסים את המונה אחרי ביצוע הפעולה
            clickCount.current = 0;
          }, 350); // השהייה קצרה של 350ms
        }
      }
      isLongPress.current = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      stopScrolling();
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
    };
  }, []); // התלות היא פונקציות הניווט, אבל כיוון שהן משתמשות ב-updater function של setState, זה בטוח

  // טיפול בתחילת מגע
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // טיפול בתנועת מגע
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // טיפול בסיום מגע
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(); // החלקה שמאלה = מעבר קדימה
    }
    if (isRightSwipe) {
      prevSlide(); // החלקה ימינה = מעבר אחורה
    }
  };

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return <div>טעינה...</div>;

  // אם זה מסמך, לא מוסיפים touch handlers כדי לאפשר גלילה
  const isDocument = currentSlide.type === "document";

  return (
    <div
      className={styles.carouselContainer}
      onTouchStart={isDocument ? undefined : onTouchStart}
      onTouchMove={isDocument ? undefined : onTouchMove}
      onTouchEnd={isDocument ? undefined : onTouchEnd}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{currentSlide.title}</h2>
        {onBackToSummary ? (
          <button
            onClick={onBackToSummary}
            className={styles.backToSummaryButton}
          >
            ← חזרה לתקציר
          </button>
        ) : (
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        )}
      </div>

      <button
        className={`${styles.navButton} ${styles.prevBtn}`}
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className={styles.contentArea}>
        {currentSlide.type === "document" ? (
          <div
            className={styles.documentScrollContainer}
            ref={scrollContainerRef}
          >
            <AnnualPlanDoc targetSectionId={targetDocSectionId} />
          </div>
        ) : (
          <div className={styles.tableContainer} ref={scrollContainerRef}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {currentSlide.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentSlide.data.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.col1?.includes("סה''כ") ? styles.totalRow : ""
                    }
                  >
                    <td className={styles.productName}>{row.col1}</td>

                    {/* Inventory */}
                    {currentSlide.type === "inventory" && (
                      <>
                        <td>
                          {row.col2 !== "-" ? (
                            <span className={styles.badge}>{row.col2}</span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td>
                          <span className={styles.quantity}>{row.col3}</span>
                        </td>
                        <td>{row.col4}</td>
                        <td className={styles.income}>{row.col5}</td>
                      </>
                    )}

                    {/* Finance */}
                    {currentSlide.type === "finance" && (
                      <>
                        <td>
                          {row.col2 !== "-" ? (
                            <span className={styles.badge}>{row.col2}</span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td style={{ color: "green", fontWeight: "bold" }}>
                          {row.col3}
                        </td>
                        <td style={{ color: "#d32f2f" }}>{row.col4}</td>
                        <td style={{ fontWeight: "bold" }}>{row.col5}</td>
                      </>
                    )}

                    {/* WorkPlan - הסרנו את ה-Inline Styles הבעייתיים */}
                    {/* WorkPlan */}
                    {/* WorkPlan */}
                    {currentSlide.type === "workPlan" && (
                      <>
                        <td
                          style={{
                            color: "green",
                            fontWeight: "bold",
                            width: "10%",
                          }}
                        >
                          {row.col2}
                        </td>

                        {/* שינוי: הגבלת רוחב לעמודות הטקסט הארוך */}
                        <td
                          className={styles.wrapText}
                          style={{ width: "27%" }}
                        >
                          {row.col3}
                        </td>
                        <td
                          className={styles.wrapText}
                          style={{ width: "27%" }}
                        >
                          {row.col4}
                        </td>

                        {/* שינוי: הגדלת הרוחב של יעד לקוחות */}
                        <td
                          className={styles.wrapText}
                          style={{
                            fontWeight: "bold",
                            color: "#2b5876",
                            width: "22%",
                            minWidth: "80px",
                          }}
                        >
                          {row.col5}
                        </td>
                      </>
                    )}

                    {/* Quotes - הסרנו את ה-Inline Styles הבעייתיים */}
                    {currentSlide.type === "quotes" && (
                      <>
                        <td className={styles.wrapText}>{row.col2}</td>
                        <td>{row.col3}</td>
                        <td>{row.col4}</td>
                        <td>{row.col5}</td>
                        <td>{row.col6}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <button
        className={`${styles.navButton} ${styles.nextBtn}`}
        onClick={nextSlide}
      >
        &#10095;
      </button>

      <div className={styles.dotsContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
            title={slide.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiTableCarousel;
