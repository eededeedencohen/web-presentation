import React from "react";
import styles from "./NewGrowthEnginesSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import GrowthEngineCard from "../../../components/Cards/GrowthEngineCard/GrowthEngineCard";
import exampleImage from "../../../assets/Images/image.png";
import socialImage from "../../../assets/Images/social.png";
// להקה
import bandImage from "../../../assets/Images/image8.png";
// מיזמי חוויה
import experienceImage from "../../../assets/Images/life-day.png";
// מכירות קמעונאיות
import retailImage from "../../../assets/Images/image12.png";

const cardsData = [
  {
    id: 1,
    title: "מכירות קמעונאיות (B2B)",
    content: "הכנסת מוצרי המותג לרשתות שיווק וחנויות.",
    summary: "פוטנציאל רווח שנתי: ₪175,000",
    color: "var(--purple)", // או הקוד הסגול שלך
    iconName: "retail", // שם האייקון המתאים
    image:  retailImage,
  },
  {
    id: 2,
    title: '"התו החברתי"',
    content: "תו שמוענק לארגונים המכובד רק בעסקים חברתיים.",
    summary: "פוטנציאל רווח שנתי: ₪250,000",
    color: "var(--green)", // צבע הטורקיז
    iconName: "favorite",
    image: socialImage,
  },
  {
    id: 3,
    title: 'מיזמי חוויה ("יום בחיי")',
    content: "הרצאות וסיורים במרכזי העמותה ככלי לחשיפה ומכירה.",
    summary: "פוטנציאל רווח שנתי: ₪80,000",
    color: "var(--purple)",
    iconName: "public-speaking",
    image: experienceImage,
  },
  {
    id: 4,
    title: 'להקת שק"ל',
    content: "הופעה של להקה מקצועית באירועי חברה.",
    summary: "פוטנציאל רווח שנתי: ₪35,000",
    color: "var(--green)",
    iconName: "microphone",
    image: bandImage,
  },
];

function NewGrowthEnginesSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"צמיחה משלבת"}
          subtitle="מנועי צמיחה לקיימות ארוכת טווח"
          width="60%"
          fontSize="3rem"
          subFontSize="2.5rem"
          className={styles.header}
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          בנוסף לחיזוק הפעילות הקיימת, אנו מפתחים אפיקי הכנסה חדשים שיבטיחו את
          צמיחתנו בשנים הבאות.
        </h2>
      </div>

      {/* שינוי: cardsArea הוא עכשיו position: relative */}
      <div className={styles.cardsArea}>
        {/* קו הפרדה אופקי */}
        <div className={styles.horizontalDivider}></div>
        {/* קו הפרדה אנכי */}
        <div className={styles.verticalDivider}></div>

        <div className={styles.cardWrapper}>
          <GrowthEngineCard
            image={cardsData[1].image}
            icon={cardsData[1].iconName}
            color={cardsData[1].color}
            title={cardsData[1].title}
            content={cardsData[1].content}
            summary={cardsData[1].summary}
          />
        </div>
        <div className={styles.cardWrapper}>
          <GrowthEngineCard
            image={cardsData[0].image}
            icon={cardsData[0].iconName}
            color={cardsData[0].color}
            title={cardsData[0].title}
            content={cardsData[0].content}
            summary={cardsData[0].summary}
          />
        </div>

        <div className={styles.cardWrapper}>
          <GrowthEngineCard
            image={cardsData[3].image}
            icon={cardsData[3].iconName}
            color={cardsData[3].color}
            title={cardsData[3].title}
            content={cardsData[3].content}
            summary={cardsData[3].summary}
          />
        </div>

        <div className={styles.cardWrapper}>
          <GrowthEngineCard
            image={cardsData[2].image}
            icon={cardsData[2].iconName}
            color={cardsData[2].color}
            title={cardsData[2].title}
            content={cardsData[2].content}
            summary={cardsData[2].summary}
          />
        </div>
      </div>
    </div>
  );
}
export default NewGrowthEnginesSlide;
