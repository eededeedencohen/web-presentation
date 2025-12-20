import React from "react";
import styles from "./SwotAnalysisSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import SWOTCard from "../../../components/Cards/SWOTCard/SWOTCard";
import exampleImage from "../../../assets/Images/image.png";

const cardsData = [
  {
    id: 1,
    title: "חולשות",
    points: ["כוח ייצור לא עסקי", "בירוקרטיה ארגונית", "מבנה פיננסי לא גמיש"],
    color: "var(--green)", // צבע הטורקיז
    iconName: "broken-link",
    image: exampleImage, // אותה תמונה בכל הכרטיסים
  },
  {
    id: 2,
    title: "חוזקות",
    points: [
      "מסר חברתי ותרומה לקהילה",
      "ארגון מבוסס עם מוניטין",
      "תשתיות וצוות איכותי",
    ],
    color: "var(--purple)", // צבע הסגול
    iconName: "shield", // או 'insurance' / 'heart'
    image: exampleImage,
  },
  {
    id: 3,
    title: "איומים",
    points: [
      'שוק ארגוני תחרותי ("אוקיינוס אדום")',
      "צורך בזמן חדירה לשוק",
      "חוסר בידול מול עמותות אחרות",
    ],
    color: "var(--green)",
    iconName: "thunder",
    image: exampleImage,
  },
  {
    id: 4,
    title: "הזדמנויות",
    points: [
      "פוטנציאל גדול בלתי ממומש",
      "שיווק ומיתוג לא ממומש",
      "רצון הציבור לתרום",
    ],
    color: "var(--purple)",
    iconName: "door",
    image: exampleImage,
  },
];
// מבט מפוכח על המגרש:
//  החוזקות, החולשות, ההזדמנויות והאיומים שלנו
function SwotAnalysisSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"מבט מפוכח על המגרש:"}
          subtitle={"החוזקות, החולשות, ההזדמנויות והאיומים שלנו"}
          width="60%"
          fontSize="3rem"
          subFontSize="2rem"
          className={styles.header}
        />
      </div>

      {/* שינוי: cardsArea הוא עכשיו position: relative */}
      <div className={styles.cardsArea}>
        {/* קו הפרדה אופקי */}
        <div className={styles.horizontalDivider}></div>
        {/* קו הפרדה אנכי */}
        <div className={styles.verticalDivider}></div>

        <div className={styles.cardWrapper}>
          <SWOTCard
            image={cardsData[1].image}
            icon={cardsData[1].iconName}
            color={cardsData[1].color}
            title={cardsData[1].title}
            content={cardsData[1].points}
          />
        </div>
        <div className={styles.cardWrapper}>
          <SWOTCard
            image={cardsData[0].image}
            icon={cardsData[0].iconName}
            color={cardsData[0].color}
            title={cardsData[0].title}
            content={cardsData[0].points}
          />
        </div>
        <div className={styles.cardWrapper}>
          <SWOTCard
            image={cardsData[3].image}
            icon={cardsData[3].iconName}
            color={cardsData[3].color}
            title={cardsData[3].title}
            content={cardsData[3].points}
          />
        </div>
        <div className={styles.cardWrapper}>
          <SWOTCard
            image={cardsData[2].image}
            icon={cardsData[2].iconName}
            color={cardsData[2].color}
            title={cardsData[2].title}
            content={cardsData[2].points}
          />
        </div>
      </div>
    </div>
  );
}
export default SwotAnalysisSlide;
